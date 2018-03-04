import * as d3 from "d3";
import * as _ from 'lodash';
import * as PIXI from "pixi.js";
import { inject, noView, bindable, bindingMode, BindingEngine } from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class parallelBarChartsWebgl {
  // One-Way
  @bindable margin = { top: 20, right: 40, bottom: 60, left: 20, middle: 70, y: 35 };
  @bindable redraw = 0;
  @bindable reset = 0;
  @bindable mode = "Opacity";

  // Two-Way
  @bindable({ defaultBindingMode: bindingMode.twoWay }) brushing;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) selected;

  // Observed Variables
  @bindable data = [];
  @bindable bins = {};

  // Aurelia variables
  private element;
  private subscription;
  private initialized = false;

  // D3 variables
  private svg;
  private chart;
  private x = {};
  private y = {};
  private y_lines;
  private charts = {};
  private dimensions = <any>[];
  private line;
  private parcoords;
  private color_viridis;
  private color_plasma;
  private chart_height;
  private chart_offset;
  private brushes = new Map();
  private ranges = new Map();
  private quantize;
  private quantize_opacity;
  private line_data = [];

  private app;
  private container;
  private line_id = new Map();
  private id_color = new Map();

  // set the dimensions and margins of the graph
  private x_size = 500;
  private y_size = 500;
  private width;
  private height;

  constructor(element, private bindingEngine) {
    this.element = element;
  }

  // This is called after binding attributes
  attached() {
    if (this.data) {
      // subscribe to the data array and watch for changes
      this.subscription = this.bindingEngine
        .collectionObserver(this.data)
        .subscribe(splices => this.dataMutated(splices));
    }

    // set the dimensions and margins of the graph
    this.x_size = this.element.parentElement.offsetWidth
    this.y_size = this.element.parentElement.offsetHeight

    this.width = this.x_size - this.margin.left - this.margin.right;
    this.height = this.y_size - this.margin.top - this.margin.bottom;
  }

  // Update the chart if the data changes
  dataMutated(splices) {
    if(!this.initialized) this.initChart()
    this.updateChart();
  }

  redrawChanged() {
    if (this.data.length > 1) {
      this.data.forEach(d => {
        this.id_color.set(d["id"], d["color"])
      })

      this.updateHighlight();
    }
  }

  resetChanged() {
    if(this.initialized) {
      this.svg.remove();
      this.container.removeChildren();

      this.initialized = false;
    }
  }

  // Remove the watcher after disposing the class
  unbind() {
    this.subscription.dispose();
  }

  // Draw the lines
  private path(d) {
    return this.line(this.line_data.map((row) => {
      return [this.x[row.dim](d[row.dim]), row.y];
    }));
  }

  private resolve_brushing = () => {
    let brushed = _.intersection(...Array.from(this.brushes.values()));

    if(this.brushes.size == 0) {
      this.reset_brush_webgl();
    }
    else {
      this.brush_webgl(brushed);
    }
  }

  private update_brushing = () => {
    this.ranges.forEach((v, k) => {
     let brushed_elements = this.data.filter(x => x["params"][k] >= v[0] && x["params"][k] <= v[1] && x["color"] != "none").map(x => x.id)
     this.brushes.set(k, brushed_elements)
    })

    let brushed = _.intersection(...Array.from(this.brushes.values()));
    this.brush_webgl(brushed);

    if(this.brushes.size == 0) {
      this.reset_brush_webgl();
    }
  }

  private removeBrushing = (dim) => {
    this.brushes.delete(dim)
    this.ranges.delete(dim)

    this.resolve_brushing();
  }

  // Update external variables with current brushes
  private getBrushing = (dim, high, low) => {
    let brushed_elements = this.data.filter(x => x["params"][dim] >= low && x["params"][dim] <= high && x["color"] != "none").map(x => x.id)
    this.brushes.set(dim, brushed_elements)
    this.ranges.set(dim, [low, high]);

    let brushed = _.intersection(...Array.from(this.brushes.values()));

    this.resolve_brushing();
  }

  brush_webgl = (ids) => {
    this.container.children.forEach(x => {
      let color = this.id_color.get(this.line_id.get(x))
      let id = this.line_id.get(x)

      if(ids.includes(id)) {
        x.alpha = 1;
        x.tint = parseInt(color.substring(1), 16);
      }
      else {
        x.alpha = 0;
      }
    })
  }

  reset_brush_webgl = () => {
    this.container.children.forEach(x => {
      let color = this.id_color.get(this.line_id.get(x))

      if(color == "none") {
        x.alpha = 0;
      }
      else {
        x.alpha = 1;
        x.tint = parseInt(color.substring(1), 16);
      }
    })
  }

  initChart() {
    let self = this;

    let canvas = d3.select(this.element)
      .append("canvas")
      .style("position", "absolute")
      .style("top", 0)
      .style("left", 0)

    this.app = new PIXI.Application({
      view: canvas.node(),
      width: this.width + this.margin.left + this.margin.right,
      height: this.height + this.margin.top + this.margin.bottom,
      transparent: true,
      antialias: true,
      interactive: true
    });

    this.svg = d3.select(this.element)
      .append("svg")
      .style("position", "absolute")
      .style("top", 0)
      .style("left", 0)
      .attr("pointer-events", "none")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .on("click", function(d) {
        d3.selectAll(".line_parallel").classed("background", false);
        d3.selectAll(".line_parallel").classed("selected", false);
      })

    this.chart = this.svg
      .append("g")
      .attr("transform",
      "translate(" + this.margin.left + "," + this.margin.top + ")")

    this.parcoords =
      this.chart.append("g")

    this.color_viridis = d3.scaleSequential(d3.interpolateViridis)
      .domain([0, 1])
    this.color_plasma = d3.scaleSequential(d3.interpolatePlasma)
      .domain([0, 1])

    this.quantize = d3.scaleQuantize()
      .domain([0,1])
      .range([
        this.color_viridis(0),
        this.color_viridis(0.25),
        this.color_viridis(0.5),
        this.color_viridis(0.75),
        this.color_viridis(1),
      ]);

    this.quantize_opacity = d3.scaleQuantize()
      .domain([0,1])
      .range([0.1, 0.3, 0.6, 0.8, 1]);

    this.y_lines = d3.scalePoint()
      .range([0, this.height- this.margin.top - this.margin.bottom]);

    this.line = d3.line()
      .curve(d3.curveMonotoneY);

    // Get current dataset dimensions: Keys of the map
    if (this.data.length > 0) {
      this.dimensions = d3.keys(this.data[0]["params"]);
    }

    this.y_lines.domain(this.dimensions);

    this.chart_height = Math.floor((this.height - this.margin.top - this.margin.bottom) / ((this.dimensions.length-1) + this.dimensions.length))
    this.margin.middle = this.chart_height;

    let margin_iterator = 0;

    this.dimensions.map((dim) => {
      let ext = <any>d3.extent(this.data, (data) => {
        return data["params"][dim];
      })

      this.x[dim] = d3.scaleLinear()
        .range([0, this.width])
        .domain([ext[0], ext[1]])

      this.y[dim] = d3.scaleLinear()
        .range([this.chart_height, 0])
        .domain([0, d3.max(this.bins[dim], (d: any[]) => d.length)]);

      // Create drawing area
      let g = this.chart.append("g")
        .attr("class", "dimension")
        .attr("width", this.width)
        .attr("height", this.chart_height)
        .attr("transform", "translate(" + this.margin.left + ", " + (this.margin.top + (this.chart_height + this.margin.middle) * margin_iterator) + ")");

        // Set custom tick amount if the values are too small
        let tick_multiplier = 1;

        if(ext[0] - ext[1] < 0.0001) {
          tick_multiplier = 0.5;
        }
        else if(ext[0] - ext[1] < 0.001) {
          tick_multiplier = 0.7;
        }
        else if(ext[0] - ext[1] < 0.01) {
          tick_multiplier = 0.8;
        }

        let ticks = self.x[dim].ticks().length

        g.append("g")
          .attr("class", "x-axis")
          .attr("transform", "translate(0," + self.chart_height + ")")
          .call(d3.axisBottom(self.x[dim]).ticks(Math.ceil(ticks * tick_multiplier)));

        g.append("g")
          .attr("class", "y-axis")
          .call(d3.axisLeft(self.y[dim]).ticks(4));

        // Add titles for the axis
        g.append("text")
          .style("text-anchor", "middle")
          .attr("transform", "rotate(-90)")
          .attr("y", -25)
          .attr("x", -(this.chart_height)/2)
          .text(dim);

      // Add and store a brush for each axis.
      g.append("g")
        .attr("class", "brush")
        .each(function(this, d) {
          d3.select(this).call(d3.brushX()
            .extent([[-2, -2], [self.width+2, self.chart_height+2]])
            .on("brush", () => {
              if (!d3.event.sourceEvent) return; // Only transition after input.
              let range = d3.event.selection.map(self.x[dim].invert)
              let d0 = range[1]
              let d1 = range[0]

              self.getBrushing(dim, d0, d1)
            })
            .on("end", () => {
              if (!d3.event.sourceEvent) return; // Only transition after input.
              if (!d3.event.selection) {
                self.removeBrushing(dim)
                return
              };

              let range = d3.event.selection.map(self.x[dim].invert)
              let d0 = range[1]
              let d1 = range[0]
              let borders = [d3.min(self.bins[dim], x => x["x0"])]
              borders.push(...self.bins[dim].map(b => b.x1))

              var closest_low = borders.reduce(function(prev: any, curr: any) {
                return (Math.abs(curr - d0) < Math.abs(prev - d0) ? curr : prev);
              });

              var closest_high = borders.reduce(function(prev: any, curr: any) {
                return (Math.abs(curr - d1) < Math.abs(prev - d1) ? curr : prev);
              });

              d3.select(this).transition().duration(500).call(d3.event.target.move, [closest_high, closest_low].map(self.x[dim]));

              self.getBrushing(dim, closest_low, closest_high)
            })
          );
        })

      this.charts[dim] = g

      margin_iterator++;
    });

    this.container = new PIXI.Container()

    this.container.position.x = this.margin.left * 2
    this.container.position.y = this.margin.top * 2

    this.app.stage.addChild(this.container);

    this.initialized = true;
  }

  updateHighlight() {
    let self = this;

    // Update webgl elements
    this.update_brushing();

    // Update d3 elements
    for (var dim in this.charts) {
      if(this.mode == "Opacity") {
        this.charts[dim].selectAll(".bar-parallel")
          .attr("opacity", function(bar) {
            let opacity = 0;
            let counter = 0;

            self.data.forEach((d) => {
              let value = d["params"][dim];

              if(value >= bar.x0 && value <= bar.x1) {
                counter++;
                opacity += d["highlight"]
              }
            })

            if(bar.length < 1) return 0;

            return opacity / counter
          })

          this.svg.selectAll(".line_parallel")
            .attr("opacity", function(d) {
              return d["highlight"]
            })
            .moveToBack()
        }
        else if(this.mode = "Opacity + Viridis") {
          let opacity = 0;
          let counter = 0;
          this.charts[dim].selectAll(".bucket")
            .data(this.bins[dim])
            .each(function(d, i) {
              let new_start_point = 0;
              d3.select(this).selectAll(".bar-parallel")
                .attr("y", function(k: any) {
                  let position = (self.chart_height - new_start_point) - (self.chart_height - self.y[dim](d[k]["value"]));
                  if(d[k]["value"] > 0) new_start_point += (self.chart_height - self.y[dim](d[k]["value"]));
                  return position
                })
                .attr("height", function(k: any) {
                  return self.chart_height - self.y[dim](d[k]["value"])
                })
                .style("fill", function(k: any) {
                  return d[k]["color"]
                })
            })
        }
    }
  }

  updateChart() {
    let self = this;

    this.line_data.length = 0
    this.dimensions.forEach((x, i) => {
      if(i == 0) {
        this.line_data.push({
          dim: x,
          y: this.chart_height * (i+1) + this.margin.middle * i
        })
      }
      else {
        this.line_data.push({
          dim: x,
          y: this.chart_height * i + this.margin.middle * i
        })

        this.line_data.push({
          dim: x,
          y: this.chart_height * (i+1) + this.margin.middle * i
        })
      }
    })

    let margin_iterator = 0;

    // Currently only linear values
    this.dimensions.map((dim) => {
      let ext = <any>d3.extent(this.data, (data) => {
        return data["params"][dim];
      })

      this.x[dim] = d3.scaleLinear()
        .range([0, this.width])
        .domain([ext[0], ext[1]])

      this.y[dim] = d3.scaleLinear()
        .range([this.chart_height, 0])
        .domain([0, d3.max(this.bins[dim], (d: any[]) => d.length)]);

      let g = this.charts[dim];

      // Set custom tick amount if the values are too small
      let tick_multiplier = 1;

      if(ext[0] - ext[1] < 0.0001) {
        tick_multiplier = 0.5;
      }
      else if(ext[0] - ext[1] < 0.001) {
        tick_multiplier = 0.7;
      }
      else if(ext[0] - ext[1] < 0.01) {
        tick_multiplier = 0.8;
      }

      let ticks = self.x[dim].ticks().length

      g.selectAll(".x-axis")
        .attr("transform", "translate(0," + self.chart_height + ")")
        .call(d3.axisBottom(self.x[dim]).ticks(Math.ceil(ticks * tick_multiplier)));

      g.selectAll(".y-axis")
        .call(d3.axisLeft(self.y[dim]).ticks(4));

      let bar_chart = g.selectAll(".bucket")
        .data(this.bins[dim])

      bar_chart.exit().remove();
      bar_chart.enter()
        .append("g")
        .attr("class", "bucket")
        .attr("transform", (d) => {
          return "translate(" + (self.x[dim](d.x0) + 1) + ", 0)";
        })
        .merge(bar_chart)
        .each(function(d, i) {
          let new_start_point = 0;
          let bar = d3.select(this).selectAll(".bar-parallel")
            .data(["n5", "n4", "n3", "n2", "n1", "n0"]);
          bar.exit().remove()
          bar.enter()
            .append("rect")
            .attr("class", "bar-parallel")
            .attr("width", function(k) {
              return self.x[dim](d["x1"]) - self.x[dim](d["x0"]) - 1;
            })
            .merge(bar)
            .attr("y", function(k) {
              let position = (self.chart_height - new_start_point) - (self.chart_height - self.y[dim](d[k]["value"]));
              if(d[k] > 0) new_start_point = position;
              return position
            })
            .attr("height", function(k) {
              return self.chart_height - self.y[dim](d[k]["value"]); })
        })

      margin_iterator++;
    });

    this.container.removeChildren();
    this.data.forEach(d => {
      let line_data = this.line_data.map((row) => {
        return [this.x[row.dim](d["params"][row.dim]), row.y];
      })

      let line = new PIXI.Graphics();
      line.lineStyle(2, 0xffffff, 1);
      line.tint = parseInt("#d3d3d3".substring(1), 16)

      for(let i = 0; i < line_data.length-1; i++) {
        line.moveTo(line_data[i][0],line_data[i][1]);
        line.bezierCurveTo(
          line_data[i][0],
          line_data[i+1][1],
          line_data[i+1][0],
          line_data[i][1],
          line_data[i+1][0],
          line_data[i+1][1]
        );
      }

      this.container.addChild(line);
      this.line_id.set(line, d["id"])
    })
  }
}
