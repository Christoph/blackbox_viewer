import * as d3 from "d3";
import * as _ from 'lodash';
import { inject, noView, bindable, bindingMode, BindingEngine } from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class parallelBarCharts {
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
  private bins = {};
  private charts = {};
  private dimensions = <any>[];
  private line;
  private parcoords;
  private color_viridis;
  private color_plasma;
  private chart_height;
  private chart_offset;
  private brushes = new Map();
  private quantize;
  private quantize_opacity;
  private line_data = [];

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

    if(!this.initialized) this.initChart()
    if (this.data.length > 1) {
      this.updateChart();
    }
  }

  // Update the chart if the data changes
  dataMutated(splices) {
    this.updateChart();
  }

  redrawChanged() {
    if (this.data.length > 1) {
      this.updateHighlight();
    }
  }

  resetChanged() {
    // if(this.initialized) {
    //   this.svg.remove()
    //   this.dataMutated("")
    //   this.initialized = false;
    // }
    //
    // this.initChart()
    // this.updateChart();
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

  private removeBrushing = (dim) => {
    this.brushes.delete(dim)

    let brushed = _.intersection(...Array.from(this.brushes.values()));

    if (this.brushes.size > 0 && brushed.length == 0) {
      brushed.push("x")
    }

    this.brushing = brushed;
  }

  // Update external variables with current brushes
  private getBrushing = (dim, low, high) => {
    let brushed_elements = this.data.filter(x => x["data"][dim] >= low && x["data"][dim] <= high).map(x => x.id)
    this.brushes.set(dim, brushed_elements)

    let brushed = _.intersection(...Array.from(this.brushes.values()));

    // If no element is brushed return a x to let the system know that
    // there are brushes active
    if (this.brushes.size > 0 && brushed.length == 0) {
      brushed.push("x")
    }

    this.brushing = brushed;
  }

  initChart() {
    this.svg = d3.select(this.element)
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)

    this.chart = this.svg
      .append("g")
      .attr("transform",
      "translate(" + this.margin.left + "," + this.margin.top + ")");

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

    this.initialized = true;
  }

  updateHighlight() {
    let self = this;
    // TODO: NOrmlize color or opacity over all charts!

    for (var dim in this.charts) {
      if(this.mode == "Opacity") {
        this.charts[dim].selectAll(".bar-parallel")
          .attr("opacity", function(bar) {
            let opacity = 0;
            let counter = 0;

            self.data.forEach((d) => {
              let value = d["data"][dim];

              if(value >= bar.x0 && value <= bar.x1) {
                counter++;
                opacity += d["highlight"]
              }
            })

            if(bar.length < 1) return 0;

            return opacity / counter
          })

          this.svg.selectAll(".line")
            .attr("opacity", function(d) {
              return d["highlight"]
            })
            .moveToBack()
        }
        else if(this.mode = "Opacity + Viridis") {
          let opacity = 0;
          let counter = 0;

          // this.charts[dim].selectAll(".bar-parallel")
          //   .attr("opacity", function(bar) {
          //     self.data.forEach((d) => {
          //       let value = d["data"][dim];
          //
          //       if(value >= bar.x0 && value <= bar.x1) {
          //         counter++;
          //         opacity += d["highlight"]
          //       }
          //     })
          //
          //     if(bar.length < 1) return 0;
          //
          //     if(opacity > 0) return self.quantize_opacity(opacity / counter)
          //     else return 0
          //   })

          this.svg.selectAll(".line")
            .attr("opacity", function(d) {
              return d["highlight"]
            })
            .moveToBack()

          this.charts[dim].selectAll(".bar-parallel")
            .style("fill", function(bar) {
              let opacity = 0;
              let counter = 0;

              self.data.forEach((d) => {
                let value = d["data"][dim];

                if(value >= bar.x0 && value <= bar.x1) {
                  counter++;
                  opacity += d["highlight"]
                }
              })

              if(bar.length < 1) return 0;

              if(opacity <= 0) {
                return "white"
              }
              else {
                return self.quantize(opacity / counter)
              }
            })

          this.svg.selectAll(".line")
            .style("stroke", function(d) {
              return self.color_viridis(d["highlight"])
            })
            .moveToBack()
        }
        else if(this.mode = "Color-Viridis") {
          this.charts[dim].selectAll(".bar-parallel")
          .style("fill", function(bar) {
            let opacity = 0;
            let counter = 0;

            self.data.forEach((d) => {
              let value = d["data"][dim];

              if(value >= bar.x0 && value <= bar.x1) {
                counter++;
                opacity += d["highlight"]
              }
            })

            if(bar.length < 1) return 0;

            return self.color_viridis(opacity / counter)
          })
        }
        else if(this.mode = "Color-Plasma") {
          this.charts[dim].selectAll(".bar-parallel")
          .style("fill", function(bar) {
            let opacity = 0;
            let counter = 0;

            self.data.forEach((d) => {
              let value = d["data"][dim];

              if(value >= bar.x0 && value <= bar.x1) {
                counter++;
                opacity += d["highlight"]
              }
            })

            if(bar.length < 1) return 0;

            return self.color_plasma(opacity / counter)
          })
        }
    }
  }

  updateChart() {
    let self = this;

    // Get current dataset dimensions: Keys of the map
    if (this.data.length > 0) {
      this.dimensions = d3.keys(this.data[0]["data"]);
    }

    this.y_lines.domain(this.dimensions);

    this.chart_height = (this.height - this.margin.top - this.margin.bottom - ((this.dimensions.length-1) * this.margin.middle))/this.dimensions.length;

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
        return data["data"][dim];
      })

      this.x[dim] = d3.scaleLinear()
        .range([this.width, 0])
        .domain([ext[0], ext[1]])

      let focus_data = this.data.map(a => a["data"][dim])

      this.bins[dim] = d3.histogram()
        .domain(this.x[dim].domain())
        .thresholds(d3.range(ext[0], ext[1], (ext[1] - ext[0]) / 20))
        (focus_data);

      this.y[dim] = d3.scaleLinear()
        .range([0, this.chart_height])
        .domain([d3.max(this.bins[dim], (d: any[]) => d.length), 0]);

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
          .attr("x", (this.chart_height - this.margin.middle)/2 - this.margin.top)
          .text(dim);

      let bar_chart = g.selectAll("rect.bars")
        .data(this.bins[dim])

      bar_chart.enter().append("rect")
        .attr("class", "bar-parallel")
        .attr("transform", (d) => {
          return "translate(" + (this.x[dim](d.x1)) + ", " + (this.y[dim](d.length)) + ")";
        })
        .attr("x", 1)
        .attr("height", (d) => {
          return this.chart_height - this.y[dim](d.length); })
        .attr("width", (d) => {
          return this.x[dim](d.x0) - this.x[dim](d.x1) - 1;
        })

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

    // Draw lines
    this.parcoords
      .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")")
      .selectAll("path")
      .data(this.data)
      .enter().append("path")
      .attr("class", "line")
      .attr("d", (d) => {
        return this.path(d["data"])
      })
      .moveToBack()
  }
}
