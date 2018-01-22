import { autoinject, observable } from 'aurelia-framework';
import * as d3 from "d3"

@autoinject
export class Gauss {
  file;
  data;

  @observable brushing_parallel;
  redraw_parallel;

  @observable brushing_lines;
  redraw_lines;

  inFilter = []

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

  brushing_linesChanged() {
    this.updateOutData(this.brushing_lines);
    this.updateInData(this.brushing_lines);
  }

  brushing_parallelChanged() {
    this.updateParallelData(this.brushing_parallel);
    this.filterOutData(this.brushing_parallel);
  }

  private updateOutData(mapping) {
    // Set highlight colors
    this.data_lines.forEach(x => {
      x["highlight"] = mapping.get(x["id"])
    })

    this.redraw_lines = this.redraw_lines == 0 ? 1 : 0;
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
