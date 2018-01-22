import { autoinject, observable } from 'aurelia-framework';
import * as d3 from "d3"

@autoinject
export class Gauss {
  @observable brushing_pop;
  @observable brushing_sus;
  @observable brushing_inf;
  @observable brushing_rec;
  redraw_pop;
  redraw_sus;
  redraw_inf;
  redraw_rec;

  file;
  data;

  @observable brushing_parallel;
  redraw_parallel;

  inFilter = []
  outFilterList = new Map([
    ["pop", new Map()],
    ["sus", new Map()],
    ["inf", new Map()],
    ["rec", new Map()]
  ]);

  data_parallel = <any[]>[]
  data_lines = <any[]>[]
  data_lines_original = <any[]>[]
  data_length = 0;

  current_filter = new Set();

  position = 'right';
  trigger = 'mouseover';

  toggled(open) {
      if (open) {
          console.log('opened');
      } else {
          console.log('closed');
      }
  }

  fileSelected() {
    let reader = new FileReader();
    let file = this.file[0];

    reader.onload = (event: any) => {
      this.data = JSON.parse(event.target.result);
      this.load()
    }
    reader.readAsText(file);
  }

  brushing_popChanged() {
    this.updateOutData(this.brushing_pop, "pop");
    this.updateInData(this.brushing_pop);
  }

  brushing_susChanged() {
    this.updateOutData(this.brushing_sus, "sus");
    this.updateInData(this.brushing_sus);
  }

  brushing_recChanged() {
    this.updateOutData(this.brushing_rec, "rec");
    this.updateInData(this.brushing_rec);
  }

  brushing_infChanged() {
    this.updateOutData(this.brushing_inf, "inf");
    this.updateInData(this.brushing_inf);
  }

  brushing_parallelChanged() {
    this.updateParallelData(this.brushing_parallel);
    this.filterOutData(this.brushing_parallel);
    // this.redrawLinecharts();
  }

  redrawLinecharts() {
    this.redraw_pop = this.redraw_pop == 0 ? 1 : 0;
    this.redraw_inf = this.redraw_inf == 0 ? 1 : 0;
    this.redraw_rec = this.redraw_rec == 0 ? 1 : 0;
    this.redraw_sus = this.redraw_sus == 0 ? 1 : 0;
  }

  private updateOutData(mapping, attribute) {
    let average = new Map();

    // Set current filter
    this.outFilterList.set(attribute, mapping);

    // Update average filter
    mapping.forEach((v, k) => {
      let temp = 0;

      this.outFilterList.forEach((iv, ik) => {
        if (iv.size > 0) temp = temp + iv.get(k);
      })

      temp = temp / this.outFilterList.size;

      average.set(k, temp)
    })

    // Set highlight colors
    this.data_lines.forEach(x => {
      x["highlight"] = mapping.get(x["id"])
    })

    this.redrawLinecharts();
  }

  private updateInData(mapping) {
    if (this.inFilter.length > 0) {
      this.data_parallel
        .filter(x => this.inFilter.includes(x["id"]))
        .forEach(x => {
          x["highlight"] = mapping.get(x["id"])
        })
    }
    else {
      this.data_parallel
        .forEach(x => {
          x["highlight"] = mapping.get(x["id"])
        })
    }

    this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
  }

  private updateParallelData(ids) {
    this.inFilter = ids;

    if (ids.length > 0) {
      this.data_parallel.forEach(x => {
        if (ids.includes(x["id"])) {
          x["highlight"] = 1;
        }
        else {
          x["highlight"] = 0;
        }
      })
    }
    else {
      this.data_parallel.forEach(x => {
        x["highlight"] = 1;
      })
    }

    this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
  }

  private filterOutData(ids) {
    if (ids.length > 1) {
      let highlight_list = new Set(ids);

      this.data_lines.length = 0

      this.data_lines.push(...this.data_lines_original.filter(x => highlight_list.has(x["id"])))

      // Save current filter
      this.current_filter = highlight_list;
    }
    else {
      this.data_lines.length = 0
      this.data_lines.push(...this.data_lines_original)
    }
  }

  load() {
    if (this.data.length > 0) {
      console.log(this.data)
      if ("params" in this.data[0] && "data" in this.data[0]) {
        this.data_parallel.length = 0
        this.data_lines_original.length = 0

        for (let i = 0; i < this.data.length; i++) {
          let d = this.data[i]

          this.data_parallel.push({
            "id": i,
            "highlight": 0,
            "data": d.params
          })

          this.data_lines_original.push({
            "id": i,
            "highlight": 0,
            "data": d.data
          })
        }

        this.data_length = this.data_lines_original.length;
        this.filterOutData([])
      }
    }
  }
}
