import * as d3 from "d3";
import * as _ from 'lodash';
import { inject, noView, bindable, bindingMode, BindingEngine } from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class parallelBarCharts {
  // One-Way
  @bindable margin = { top: 20, right: 40, bottom: 60, left: 20, middle: 35, y: 35 };
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
  private bins = {};
  private charts = {};
  private dimensions = <any>[];
  private line;
  private background;
  private color_viridis;
  private color_plasma;
  private chart_height;
  private chart_offset;

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
      this.updateHighlight();
    }
  }

  resetChanged() {
    if(this.initialized) {
      this.svg.remove()
      this.dataMutated("")
      this.initialized = false;
    }
  }

  // Remove the watcher after disposing the class
  unbind() {
    this.subscription.dispose();
  }

  // Update external variables with current brushes
  private getBrushing = (g, x, dat) => {
    let temp = <any>[];
    let brushes = new Map();

    g.selectAll(".brush")
      .filter(function(this, d) {
        return d3.brushSelection(this);
      })
      .each(function(this, d) {
        let brush_selection = d3.brushSelection(this)
        let extent = <any>[]
        let selection = <any>[];

        if (brush_selection != null) {
          extent = [x[d].invert(brush_selection[1]), x[d].invert(brush_selection[0])]
        }

        let brushed_elements = dat.filter(x => x["data"][d] >= extent[1] && x["data"][d] <= extent[0])

        brushes.set(d, brushed_elements.map(x => x["id"]))
      });

    let brushed = _.intersection(...Array.from(brushes.values()));

    // If no element is brushed return a x to let the system know that
    // there are brushes active
    if (brushes.size > 0 && brushed.length == 0) {
      brushed.push("x")
    }

    this.brushing = brushed;
  }

  initChart() {
    // append the svg object to the chart div of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    this.svg = d3.select(this.element)
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)

    this.chart = this.svg
      .append("g")
      .attr("transform",
      "translate(" + this.margin.left + "," + this.margin.top + ")");

    this.color_viridis = d3.scaleSequential(d3.interpolateViridis)
      .domain([0, 1])
    this.color_plasma = d3.scaleSequential(d3.interpolatePlasma)
      .domain([0, 1])

    this.initialized = true;
  }

  updateHighlight() {
    let self = this;

    for (var dim in this.charts) {
      if(this.mode == "Opacity") {
        this.charts[dim].selectAll(".bar-parallel")
          .attr("opacity", function(bar) {
              let opacity = 0;

              self.data.forEach((d) => {
                let value = d["data"][dim];

                if(value > bar.x0 && value < bar.x1) {
                  opacity += d["highlight"]
                }
              })

              if(bar.length < 1) return 0;

              return opacity / bar.length
            })
        }
        else if(this.mode = "Color-Viridis") {
          this.charts[dim].selectAll(".bar-parallel")
          .style("fill", function(bar) {
            let opacity = 0;

            self.data.forEach((d) => {
              let value = d["data"][dim];

              if(value > bar.x0 && value < bar.x1) {
                opacity += d["highlight"]
              }
            })

            if(bar.length < 1) return 0;

            return self.color_viridis(opacity / bar.length)
          })
        }
        else if(this.mode = "Color-Plasma") {
          this.charts[dim].selectAll(".bar-parallel")
          .style("fill", function(bar) {
            let opacity = 0;

            self.data.forEach((d) => {
              let value = d["data"][dim];

              if(value > bar.x0 && value < bar.x1) {
                opacity += d["highlight"]
              }
            })

            if(bar.length < 1) return 0;

            return self.color_plasma(opacity / bar.length)
          })
        }
    }

    // else if(this.mode = "Color-Plasma") {
    //   this.svg.selectAll(".bar-parallel")
    //     .style("fill", function(d) {
    //       return self.color_plasma(d["highlight"])
    //     })
    // }
  }

  updateChart() {
    let self = this;

    // Get current dataset dimensions: Keys of the map
    if (this.data.length > 0) {
      this.dimensions = d3.keys(this.data[0]["data"]);
    }

    this.chart_height = (this.y_size - this.margin.top - this.margin.bottom - ((this.dimensions.length-1) * this.margin.y))/this.dimensions.length;

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
          .attr("y", this.chart_height + 26)
          .attr("x", this.width / 2)
          .text(dim);

      let bar_chart = g.selectAll("rect.bars")
        .data(this.bins[dim])

      bar_chart.enter().append("rect")
        .attr("class", "bar-parallel")
        .attr("transform", (d) => {
          return "translate(" + (this.x[dim](d.x1) + 1) + ", " + (this.y[dim](d.length)) + ")";
        })
        .attr("x", 1)
        .attr("height", (d) => {
          if(dim == "gamma") {
            console.log(d, this.y[dim](d.length))
          }
          return this.chart_height - this.y[dim](d.length); })
        .attr("width", (d) => {
          return this.x[dim](d.x0) - this.x[dim](d.x1) - 1;
        })

      this.charts[dim] = g

      margin_iterator++;
    });

    // Add and store a brush for each axis.
    // g.append("g")
    //   .attr("class", "brush")
    //   .each(function(this, d) {
    //     d3.select(this).call(d3.brushX()
    //       .extent([[0, -9], [self.width, 9]])
    //       .on("brush", () => {
    //         if (!d3.event.sourceEvent) return; // Only transition after input.
    //
    //         // self.getBrushing(g, x, dat)
    //       })
    //       .on("end", () => {
    //         if (!d3.event.sourceEvent) return; // Only transition after input.
    //
    //         // getBrushing(g, x, dat)
    //       })
    //     );
    //   })
  }
}
