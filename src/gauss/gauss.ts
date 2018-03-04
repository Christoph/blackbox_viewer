import { autoinject, observable } from 'aurelia-framework';
import * as d3 from "d3"
import {exampleData} from "../resources/example-data"

@autoinject
export class Gauss {
  file;
  data;
  dimensions = [];
  params = [];
  bins = {};
  selected_dim = "";
  dim_not_selected = true;
  data_not_loaded = true;
  modes = ["Opacity + Viridis", "Opacity", "Color-Plasma", "Color-Viridis"];
  input_modes = ["Parallel-Charts", "SPLOM"]
  selected_input_mode = "Parallel-Charts";
  splom_selected = false;
  selected_mode = "Opacity + Viridis";

  @observable brushing_parallel;
  redraw_parallel;

  @observable brushing_lines;
  redraw_lines;

  resetChart;
  resetInputChart;

  inFilter = []
  outFilter = new Map()


  color_viridis = d3.scaleSequential(d3.interpolateViridis)
    .domain([0, 1])

  initial_color = "#d3d3d3";
  keys = new Map([
    ["none", "n0"],
    [this.color_viridis(0.2), "n1"],
    [this.color_viridis(0.4), "n2"],
    [this.color_viridis(0.6), "n3"],
    [this.color_viridis(0.8), "n4"],
    [this.color_viridis(1), "n5"]
  ])

  quantize =  d3.scaleQuantize()
      .domain([0.1, 1.1])
      .range([0.2, 0.4, 0.6, 0.8, 1])

  data_charts = <any[]>[]
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
    this.visualize()
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

    this.data_charts.length = 0
    this.data_lines_original.length = 0

    for (let i = 0; i < this.data.length; i++) {
      let d = this.data[i]

      this.data_charts.push({
        id: i,
        highlight: 0,
        color: this.initial_color,
        params: d.params,
        data: d.data
      })

      this.data_lines_original.push({
        id: i,
        highlight: 0,
        color: this.initial_color,
        params: d.params,
        data: d.data
      })
    }

    this.params.map((dim) => {
      let ext = <any>d3.extent(this.data, (data) => {
        return data["params"][dim];
      })

      let focus_data = this.data_charts.map(a => {
        return {
          value: a["params"][dim],
          highlight: a["highlight"],
          color: a["color"]
        }

      })

      let bin_count = 20;
      let borders = d3.range(ext[0], ext[1], (ext[1] - ext[0]) / bin_count)
      borders.push(ext[1])

      let bins = []
      borders.forEach((x, i) => {
        if(i <= bin_count - 1) {
          let bucket = []
          bucket["x0"] = borders[i]
          bucket["x1"] = borders[i+1]
          bucket["n0"] = { value: 0, color: "#d3d3d3"}
          bucket["n1"] = { value: 0, color: this.color_viridis(0.2)}
          bucket["n2"] = { value: 0, color: this.color_viridis(0.4)}
          bucket["n3"] = { value: 0, color: this.color_viridis(0.6)}
          bucket["n4"] = { value: 0, color: this.color_viridis(0.8)}
          bucket["n5"] = { value: 0, color: this.color_viridis(1)}

          bins.push(bucket)
        }
      })

      focus_data.forEach(x => {
        for(let i = 1; i < borders.length; i++) {
          if(borders[i] >= x.value) {
            bins[i - 1].push(x)
            if(x.highlight == 0) {
              bins[i - 1][this.keys.get("none")]["value"] += 1;
            }
            break;
          }
        }
      })

      this.bins[dim] = bins
    })

    this.data_length = this.data_lines_original.length;
    this.filterOutData([])
  }

  brushing_linesChanged() {
    this.updateData();
  }

  brushing_parallelChanged() {
    // this.updateData();
    // this.filterOutData(this.brushing_parallel);
  }

  private updateData() {
    if(this.brushing_lines.active) {
      this.outFilter.set(this.brushing_lines.dim, {
        timestep: this.brushing_lines.timestep,
        scale: d3.scaleLinear()
          .domain([this.brushing_lines.center - this.brushing_lines.radius, this.brushing_lines.center, this.brushing_lines.center + this.brushing_lines.radius])
          .range([0.1, 1.1, 0.1])
      })
    }
    else {
      this.outFilter.delete(this.brushing_lines.dim)
    }

    // Set highlight and colors
    this.data_charts
      .forEach(x => {
        let highlight = 0;
        let counter = 0;

        if(this.outFilter.size > 0) {
          this.outFilter.forEach((data, dim) => {
            if(x.data[data.timestep][dim] >= data.scale.domain()[0] && x.data[data.timestep][dim] <= data.scale.domain()[2]) {
              highlight += data.scale(x.data[data.timestep][dim]);
              counter++;
            }
          })

          if(highlight <= 0) {
            x.highlight = 0;
            x.color = "none"
          }
          else {
            x.highlight = this.quantize(highlight/counter);
            x.color = this.color_viridis(x.highlight);
          }
        }
        else {
          x.highlight = 0;
          x.color = this.initial_color;
        }
      })

      // Update bins
      this.params.map((dim) => {
        let ext = <any>d3.extent(this.data, (data) => {
          return data["params"][dim];
        })

        let focus_data = this.data_charts.map(a => {
          return {
            value: a["params"][dim],
            highlight: a["highlight"],
            color: a["color"]
          }

        })

        let bin_count = 20;
        let borders = d3.range(ext[0], ext[1], (ext[1] - ext[0]) / bin_count)
        borders.push(ext[1])

        let bins = []
        borders.forEach((x, i) => {
          if(i <= bin_count - 1) {
            let bucket = []
            bucket["x0"] = borders[i]
            bucket["x1"] = borders[i+1]
            bucket["n0"] = { value: 0, color: "#d3d3d3"}
            bucket["n1"] = { value: 0, color: this.color_viridis(0.2)}
            bucket["n2"] = { value: 0, color: this.color_viridis(0.4)}
            bucket["n3"] = { value: 0, color: this.color_viridis(0.6)}
            bucket["n4"] = { value: 0, color: this.color_viridis(0.8)}
            bucket["n5"] = { value: 0, color: this.color_viridis(1)}

            bins.push(bucket)
          }
        })

        focus_data.forEach(x => {
          for(let i = 1; i < borders.length; i++) {
            if(borders[i] >= x.value) {
              bins[i - 1].push(x)
              if(x.highlight == 0) {
                bins[i - 1][this.keys.get("none")]["value"] += 1;
              }
              else {
                bins[i - 1][this.keys.get(x.color)]["value"] += 1;
              }
              break;
            }
          }
        })

        this.bins[dim] = bins
      })



      // this.data_charts.sort(function(x, y){
      //    return d3.ascending(x.highlight, y.highlight);
      // })

    this.redraw_lines = this.redraw_lines == 0 ? 1 : 0;
    this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
  }

  private updateInData(mapping) {
    if (this.inFilter.length > 0) {
      this.data_charts
        .filter(x => this.inFilter.includes(x["id"]))
        .forEach(x => {
          x["highlight"] = mapping.get(x["id"])
        })
    }
    else {
      // this.data_parallel
      //   .forEach(x => {
      //     x["highlight"] = mapping.get(x["id"])
      //   })
    }

    this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
  }

  private updateParallelData(ids) {
    this.inFilter = ids;

    if (ids.length > 0) {
      // this.data_parallel.forEach(x => {
      //   if (ids.includes(x["id"])) {
      //     x["highlight"] = 1;
      //   }
      //   else {
      //     x["highlight"] = 0;
      //   }
      // })
    }
    else {
      // this.data_parallel.forEach(x => {
      //   x["highlight"] = 0;
      // })
    }

    this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
  }

  private filterOutData(ids) {
    if (ids.length > 1) {
      let highlight_list = new Set(ids);

      this.data_charts.length = 0

      this.data_charts.push(...this.data_lines_original.filter(x => highlight_list.has(x["id"])))

      // Save current filter
      this.current_filter = highlight_list;
    }
    else {
      this.data_charts.length = 0
      this.data_charts.push(...this.data_lines_original)
    }
  }

  load() {
    if (this.data.length > 0) {
      if ("params" in this.data[0] && "data" in this.data[0]) {
        // Get y values
        this.dimensions = d3.keys(this.data[0]["data"][0]).filter((d) => {
          return d
        });

        this.params = d3.keys(this.data[0]["params"]).filter((d) => {
          return d
        });

        this.selected_dim = this.dimensions[0];
        this.dim_not_selected = false;

        this.data_not_loaded = false;
      }
    }
  }
}
