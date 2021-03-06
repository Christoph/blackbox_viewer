import { autoinject, observable } from 'aurelia-framework';
import * as d3 from "d3"
import {exampleData} from "../resources/example-data"
import {inlierData} from "../resources/inlier-data"
import {correlationData} from "../resources/correlation-data"
import {sensitivityData} from "../resources/sensitivity-data"

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
  brushing_modes = ["binary", "linear", "focus"]
  selected_input_mode = "Parallel-Charts";
  splom_selected = false;
  selected_mode = "Opacity + Viridis";
  selected_brushing_mode = "linear"
  no_filter = true;
  no_selection = true;
  filter = new Set();
  visible_count = 0;
  data_count = 0;
  selected_count = 0;

  @observable brushing_parallel;
  redraw_parallel;

  @observable brushing_lines;
  redraw_lines;

  resetChart;
  resetInputChart;

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

  time_scale = d3.scaleLinear()

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

  loadExample = () => {
    this.data = exampleData.getExampleData()
    this.load()
    this.visualize()
  }

  loadInlier = () => {
    this.data = inlierData.getExampleData()
    this.load()
  }

  loadCorrelation = () => {
    this.data = correlationData.getExampleData()
    this.load()
  }

  loadSensitivity = () => {
    this.data = sensitivityData.getExampleData()
    this.load()
  }

  restart = () => {
    this.outFilter.clear();
    this.filter.clear();
    this.visible_count = 0;

    this.data_charts.length = 0
    this.data_lines_original.length = 0

    this.resetInputChart = this.resetInputChart == 0 ? 1 : 0;
    this.resetChart = this.resetChart == 0 ? 1 : 0;
  }

  selectDim(dim) {
    this.selected_dim = dim;

    let x_max = d3.max(this.data, (array) => d3.max<any, any>(array["data"], (d) => d[this.selected_dim]))
    let x_min = d3.min(this.data, (array) => d3.min<any, any>(array["data"], (d) => d[this.selected_dim]))

    this.time_scale
      .domain([+x_min, +x_max])
      .range([0, this.data[0]["data"].length - 1])

    this.dim_not_selected = false;
  }

  selectMode(mode) {
    this.selected_mode = mode;

    this.redraw_lines = this.redraw_lines == 0 ? 1 : 0;
    this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
  }

  selectBrush(mode) {
    this.selected_brushing_mode = mode;

    if(this.brushing_lines) this.updateData()
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
    this.restart();

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

    this.updateBins();

    this.data_length = this.data_lines_original.length;
    this.filterOutData([])
  }

  brushing_linesChanged() {
    this.updateData();
  }

  private filterData() {
    this.data_charts.length = 0

    this.data_charts.push(...this.data_lines_original.filter(x => !this.filter.has(x["id"])))
  }

  private removeSelection() {
    this.data_charts.forEach(x => {
      if(x["highlight"] > 0) {
        x["highlight"] = 0;
        this.filter.add(x["id"])
      }
    })

    this.selected_count = 0;
    this.visible_count = this.filter.size;
    this.filterData();

    this.updateBins();
    this.no_filter = false;
  }

  private resetSelection() {
    this.filter.clear()
    this.data_charts.length = 0
    this.visible_count = 0;
    this.selected_count = 0;

    this.data_charts.push(...this.data_lines_original)
    this.updateBins();

    this.no_filter = true;
  }

  private updateData() {
    this.no_selection = true;

    this.brushing_lines.forEach((d, dim) => {
      if(d.active) {
        if(this.selected_brushing_mode == "focus") {
          // Focus brushing
          this.outFilter.set(dim, {
            timestep: d.timestep,
            scale: d3.scaleLinear()
              .domain([d.extent[0], d.extent[1]+((d.extent[0]-d.extent[1])/2), d.extent[1]])
              .range([0.1, 1.1, 0.1])
          })
        }
        else if(this.selected_brushing_mode == "linear") {
          // Linear brushing
          this.outFilter.set(dim, {
            timestep: d.timestep,
            scale: d3.scaleLinear()
              .domain([d.extent[0],  d.extent[1]])
              .range([0.1, 1.1])
          })
        }
        else if(this.selected_brushing_mode == "binary") {
          // Binary brushing
          this.outFilter.set(dim, {
            timestep: d.timestep,
            extent: d.extent
          })
        }

        this.no_selection = false;
      }
      else {
        this.outFilter.delete(dim)
      }
    })

    // Set highlight and colors
    let selected_lines = 0;
    this.data_charts
      .forEach(x => {
        let highlight = 0;
        let counter = 0;

        if(this.outFilter.size > 0) {
          if(this.selected_brushing_mode == "focus") {
            // Focus brushing
            this.outFilter.forEach((data, dim) => {
              let t = Math.round(this.time_scale(data.timestep))
              if(x.data[t][dim] >= data.scale.domain()[2] && x.data[t][dim] <= data.scale.domain()[0]) {
                highlight += data.scale(x.data[t][dim]);
                counter++;
              }
            })

            if(highlight <= 0 || counter < this.outFilter.size) {
              x.highlight = 0;
              x.color = "none"
            }
            else {
              selected_lines++;

              x.highlight = this.quantize(highlight/counter);
              x.color = this.color_viridis(x.highlight);
            }
          }
          else if(this.selected_brushing_mode == "linear") {
            // Linear brushing
            this.outFilter.forEach((data, dim) => {
              let t = Math.round(this.time_scale(data.timestep))
              if(x.data[t][dim] >= data.scale.domain()[1] && x.data[t][dim] <= data.scale.domain()[0]) {
                highlight += data.scale(x.data[t][dim]);
                counter++;
              }
            })

            if(highlight <= 0 || counter < this.outFilter.size) {
              x.highlight = 0;
              x.color = "none"
            }
            else {
              selected_lines++;

              x.highlight = this.quantize(highlight/counter);
              x.color = this.color_viridis(x.highlight);
            }
          }
          else if(this.selected_brushing_mode == "binary") {
            // Binary brushing
            this.outFilter.forEach((data, dim) => {
              let t = Math.round(this.time_scale(data.timestep))
              if(x.data[t][dim] >= data.extent[1] && x.data[t][dim] <= data.extent[0]) {
                highlight = 1;
                counter++;
              }
            })

            if(highlight <= 0 || counter < this.outFilter.size) {
              x.highlight = 0;
              x.color = "none"
            }
            else {
              selected_lines++;

              x.highlight = highlight;
              x.color = this.color_viridis(x.highlight);
            }
          }
        }
        else {
          x.highlight = 0;
          x.color = this.initial_color;
        }
      })

    this.selected_count = selected_lines;

    this.updateBins();

    this.redraw_lines = this.redraw_lines == 0 ? 1 : 0;
    this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
  }

  private updateBins() {
    // Update bins
    this.params.map((dim) => {
      let ext = <any>d3.extent(this.data_charts, (data) => {
        return data["params"][dim];
      })

      let focus_data = this.data_charts.map(a => {
        return {
          id: a["id"],
          value: a["params"][dim],
          highlight: a["highlight"],
          color: a["color"]
        }

      })

      let bin_count = 20;
      let borders = d3.range(ext[0], ext[1], (ext[1] - ext[0]) / bin_count)
      borders.push(ext[1])

      // Add values around single value input space
      if(borders.length < 2) {
        if(ext[0] == 0) {
          borders = d3.range(ext[0], ext[1]+1, (ext[1]+1 - ext[0]) / bin_count)
          borders.push(ext[1]+1)
        }
        else {
          borders = d3.range(ext[0]*0.9, ext[1]*1.1, (ext[1]*1.1 - ext[0]*0.9) / bin_count)
          borders.push(ext[1]*1.1)
        }
      }

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

        let x_max = d3.max(this.data, (array) => d3.max<any, any>(array["data"], (d) => d[this.selected_dim]))
        let x_min = d3.min(this.data, (array) => d3.min<any, any>(array["data"], (d) => d[this.selected_dim]))

        this.time_scale
          .domain([+x_min, +x_max])
          .range([0, this.data[0]["data"].length - 1])

        this.dim_not_selected = false;
        this.data_not_loaded = false;
      }

      this.data_count = this.data.length;
    }
  }
}
