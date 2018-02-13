import { autoinject, observable } from 'aurelia-framework';
import * as d3 from "d3"
import {exampleData} from "../resources/example-data"

@autoinject
export class Gauss {
  file;
  data;
  dimensions = [];
  selected_dim = "";
  dim_not_selected = true;
  data_not_loaded = true;
  modes = ["Opacity + Viridis", "Opacity", "Color-Plasma", "Color-Viridis"];
  input_modes = ["Parallel-Charts", "SPLOM"]
  selected_input_mode = "SPLOM";
  splom_selected = true;
  selected_mode = "Opacity + Viridis";

  @observable brushing_parallel;
  redraw_parallel;

  @observable brushing_lines;
  redraw_lines;

  resetChart;
  resetInputChart;

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
          // console.log('opened');
      } else {
          // console.log('closed');
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

  loadExample() {
    this.data = exampleData.getExampleData()
    this.load()
  }

  selectDim(dim) {
    this.selected_dim = dim;
    this.dim_not_selected = false;
  }

  selectMode(mode) {
    this.selected_mode = mode;

    this.redraw_lines = this.redraw_lines == 0 ? 1 : 0;
    this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
  }

  selectInputMode(mode) {
    this.selected_input_mode = mode;

    if(this.selected_input_mode == "SPLOM") {
      this.splom_selected = true;
    }
    else {
      this.splom_selected = false;
    }

    this.resetInputChart = this.resetInputChart == 0 ? 1 : 0;
  }

  visualize() {
    this.resetChart = this.resetChart == 0 ? 1 : 0;
    this.resetInputChart = this.resetInputChart == 0 ? 1 : 0;

    this.data_parallel.length = 0
    this.data_lines_original.length = 0

    for (let i = 0; i < this.data.length; i++) {
      let d = this.data[i]

      this.data_parallel.push({
        "id": i,
        "highlight": 1,
        "data": d.params
      })

      this.data_lines_original.push({
        "id": i,
        "highlight": 1,
        "data": d.data
      })
    }

    this.data_length = this.data_lines_original.length;
    this.filterOutData([])
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
    this.data_lines
    .forEach(x => {
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
        x["highlight"] = 0;
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
        // Get y values
        this.dimensions = d3.keys(this.data[0]["data"][0]).filter((d) => {
          return d
        });

        this.selected_dim = this.dimensions[0];
        this.dim_not_selected = false;

        this.data_not_loaded = false;
      }
    }
  }
}
