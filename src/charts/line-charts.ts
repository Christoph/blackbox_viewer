import * as d3 from "d3";
import { inject, noView, bindable, bindingMode, BindingEngine } from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class LineCharts {
  // One-Way
  @bindable margin = { top: 20, right: 40, bottom: 35, left: 40, middle: 20, y: 35 };
  @bindable x_attribute = "x";
  @bindable x_label = "days";
  @bindable redraw = 0;
  @bindable reset = 0;
  @bindable mode = "Opacity";

  // Two-Way
  @bindable({ defaultBindingMode: bindingMode.twoWay }) brushing;

  // Observed Variables
  @bindable data = [];

  // Aurelia variables
  private element;
  private subscription;

  // D3 variables
  private initialized = false;
  private mouse_event;
  private svg;
  private dimensions;
  private charts;
  private x;
  private y = new Map();
  private focus_x = new Map();
  private gauss_x;
  private gauss_y = new Map();
  private gauss_sigma;
  private gauss_max_sigma;
  private gradientColor;
  private valueline = new Map();
  private focusline = new Map();
  private filters = new Map()
  private focus_data;
  private histogram;
  private brush;
  private center = 1.0;
  private weight = 1.0;
  private selected_time;
  private bins;
  private x_values;
  private color_viridis;
  private color_plasma;

  // set the dimensions and margins of the graph
  private width;
  private height;
  private x_size = 900;
  private y_size = 500;
  private lc_width = 50;
  private lc_height = 500;
  private focus_width = 50;
  private focus_height = 500;
  private focus_offset = 100;

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
    this.x_size = this.element.parentElement.offsetWidth;
    this.y_size = this.element.parentElement.offsetHeight;

    this.width = this.x_size - this.margin.left - this.margin.right;
    this.lc_width = this.width * 0.8;
    this.focus_width = this.width * 0.2 - this.margin.left;

    this.height = this.y_size - this.margin.top - this.margin.bottom;
  }

  // Update the chart if the data changes
  dataMutated(splices) {
    if (this.data.length > 1) {
      if(!this.initialized) this.initChart()

      this.updateChart();
      this.svg.selectAll("path.focusline").remove()
    }
    else {
      this.svg.selectAll(".line").remove()
      this.svg.selectAll(".bar").remove()
      this.svg.selectAll("path.focusline").remove()
    }
  }

  redrawChanged() {
    if (this.data.length > 1) {
      this.dimensions.forEach((dim) => {
        this.updateHighlight(dim);
      })
    }
  }

  resetChanged() {
    if(this.initialized) {
      this.svg.remove()
      this.initialized = false;
    }
  }

  unbind() {
    this.subscription.dispose();
  }

  getGaussian(dim) {
    let data = [];
    let rnd = d3.randomUniform(-5, 5);

    // loop to populate data array with
    // probability - quantile pairs
    for (var i = 0; i < 10000; i++) {
      let q = rnd() // calc random draw from uniform dist
      let p = this.gaussian(q, this.gauss_y.get(dim).invert(this.center), this.gauss_sigma(this.weight)) // calc prob of rand draw

      // Set very low probability to zero
      if(p < 0.0001) p = 0;

      let el = {
        "y": q,
        "x": p
      }
      data.push(el)
    };

    this.gradientColor.domain([0, d3.max(data, x => x["x"])])
    // need to sort for plotting
    data.sort(function(a, b) { return (a.y > b.y) ? 1 : ((b.y > a.y) ? -1 : 0); });

    return data;
  };

  //taken from Jason Davies science library
  // https://github.com/jasondavies/science.js/
  gaussian(x, mean, sigma) {
    let gaussianConstant = 1 / Math.sqrt(2 * Math.PI);

    x = (x - mean) / sigma;
    let g = gaussianConstant * Math.exp(-.5 * x * x) / sigma;

    if (g < 0) {
      g = 0;
    }

    return g;
  }

  resetFilter(dim) {
    this.charts.get(dim).focus.selectAll("path.focusline").remove();
    let out = new Map()
    this.filters.set(dim, new Map())

    // Update average filter
    this.filters.forEach((v, k) => {
      if(v.size > 0) {
        v.forEach((iv, ik) => {
          if(out.has(ik)) {
            let value = out.get(ik)

            out.set(ik, (value + iv)/2)
          }
          else {
            out.set(ik, iv)
          }
        })
      }
    })

    this.brushing = out;
  }

  resolve_brushing(dim, new_filter) {
    let out = new Map()

    this.filters.set(dim, new_filter)

    // Update average filter
    new_filter.forEach((v, k) => {
      let temp = 0;
      let counter = 0;

      this.filters.forEach((iv, ik) => {
        if (iv.size > 0) {
          temp = temp + iv.get(k);
          counter++;
        }
      })

      temp = temp / counter;

      out.set(k, temp)
    })

    this.brushing = out;
  }

  initChart() {
    let self = this;

    // Complete drawing area
    this.svg = d3.select(this.element)
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);

    // Get y values
    this.dimensions = d3.keys(this.data[0]["data"][0]).filter((d) => {
      return d != this.x_attribute
    });

    // Set height value
    this.lc_height = (this.y_size - this.margin.top - this.margin.bottom - ((this.dimensions.length-1) * this.margin.y))/this.dimensions.length;
    this.focus_height = this.lc_height

    this.focus_offset = this.lc_width + this.margin.middle + this.margin.left;

    // Reset charts map
    this.charts = new Map();

    // Create initial chart areas
    let margin_iterator = 0;
    this.dimensions.map((dim) => {
      // Linechart area
      let linechart = this.svg
        .append("g")
        .attr("width", this.lc_width)
        .attr("height", this.lc_height)
        .attr("transform",
        "translate(" + this.margin.left + ", " + (this.margin.top + (this.focus_height + this.margin.y) * margin_iterator) + ")")
        .on("click", (d) => {
          this.resetFilter(dim);
        });

      let focus = this.svg
        .append("g")
        .attr("transform",
        "translate(" + this.focus_offset + ", " + (this.margin.top + (this.focus_height + this.margin.y) * margin_iterator) + ")")

      margin_iterator++;

      focus
        .append("rect")
        .attr("width", this.focus_width)
        .attr("height", this.focus_height)
        .style("opacity", 0)
        .on("mousedown", function(d) {
          self.center = self.y.get(dim).invert(d3.mouse(this)[1]);
          self.weight = d3.mouse(this)[0];
          self.createGauss(dim);
          self.updateGauss(dim);

          let new_filter = new Map()
          self.data.forEach(d => {
            new_filter.set(
              d["id"],
              self.gradientColor(self.gaussian(self.gauss_y.get(dim).invert(d.data[self.selected_time][dim]), self.gauss_y.get(dim).invert(self.center), self.gauss_sigma(self.weight)))
            )
          })

          self.resolve_brushing(dim, new_filter);

          self.mouse_event = d3.select(this)
            .on("mousemove", function(d) {
              self.center = self.y.get(dim).invert(d3.mouse(this)[1]);

              self.weight = d3.mouse(this)[0];
              self.updateGauss(dim);

              let new_filter = new Map()

              self.data.forEach(d => {
                new_filter.set(
                  d["id"],
                  self.gradientColor(self.gaussian(self.gauss_y.get(dim).invert(d.data[self.selected_time][dim]), self.gauss_y.get(dim).invert(self.center), self.gauss_sigma(self.weight)))
                )
              })

              self.resolve_brushing(dim, new_filter);
            })
            .on("mouseup", function(d) {
              self.mouse_event.on("mousemove", null).on("mouseup", null);
            })
        })
        .moveToFront()

        // add the x Axis
        linechart.append("g")
          .attr("transform", "translate(0," + this.lc_height + ")")
          .attr("class", "xAxis");

        // x axis label
        linechart.append("text")
          .style("text-anchor", "middle")
          .attr("y", this.lc_height + 26)
          .attr("x", this.lc_width / 2)
          .text(this.x_attribute);

        let drag = d3.drag()
          .on("start", function() { d3.select(this).classed('active',true); })
          .on("drag", function(d) {
            if(d3.event.x >= 0 && d3.event.x <= self.lc_width) {
              d3.select(this).select("line")
                .raise()
                .attr("x1", d3.event.x)
                .attr("x2", d3.event.x)

              d3.select(this).select("circle")
                .raise()
                .attr("cx", d3.event.x)
              }

              let closest = self.x_values.reduce(function(prev, curr) {
                return (Math.abs(curr - self.x.invert(d3.event.x)) < Math.abs(prev - self.x.invert(d3.event.x)) ? curr : prev);
              });

              self.selected_time = closest

              self.updateBars(dim);
          })
          .on('end', function() { d3.select(this).classed('active',false); });

        // Add time selection line
        let selector = linechart
          .append("g")
          .attr("class", "time-selector")
          .attr("width", this.lc_width)
          .attr("height", this.lc_width)
          .call(drag)

        selector.append("line")
          .attr("stroke", "black")
          .attr("x1", this.lc_width)
          .attr("y1", 0)
          .attr("x2", this.lc_width)
          .attr("y2", this.lc_height);

        selector.append("circle")
          .attr("fill", "black")
          .attr("cx", this.lc_width)
          .attr("cy", 0)
          .attr("r", 10)

        // add the x Axis
        focus.append("g")
          .attr("transform", "translate(0," + this.lc_height + ")")
          .attr("class", "xAxis");

        // x axis label
        // focus.append("text")
        //   .style("text-anchor", "middle")
        //   .attr("y", this.height + 26)
        //   .attr("x", this.width / 2)
        //   .text("day");

        // add the y Axis
        linechart.append("g")
          .attr("class", "yAxis")

        // y axis label
        linechart.append("text")
          .style("text-anchor", "middle")
          .attr("y", -4)
          .text(dim);

        // add the y Axis
        focus.append("g")
          .attr("transform", "translate(" + this.focus_width + ", 0)")
          .attr("class", "yAxis")

        // y axis label
        focus.append("text")
          .style("text-anchor", "middle")
          .attr("y", -4)
          .attr("x", this.focus_width)
          .text(dim);

        // for all charts
        this.x = d3.scaleLinear()
          .range([0, this.lc_width]);

        this.gauss_x = d3.scaleLinear()

        this.gauss_sigma = d3.scaleLinear()
          .range([0.001, 3])
          .domain([0, this.focus_width])

        this.gradientColor = d3.scaleLinear()
          .range([0, 1])

        this.color_viridis = d3.scaleSequential(d3.interpolateViridis)
          .domain([0, 1])
        this.color_plasma = d3.scaleSequential(d3.interpolatePlasma)
          .domain([0, 1])

        // for each chart
        let y = d3.scaleLinear()
          .range([this.lc_height, 0]);

        this.y.set(dim, y)

        let focus_x = d3.scaleLinear()
          .range([0, this.focus_width]);

        this.focus_x.set(dim , focus_x)

        let gauss_y = d3.scaleLinear()
          .domain([-5, 5])

        this.gauss_y.set(dim, gauss_y)

        // define the line
        let valueline = d3.line()
          .x((d) => this.x(d[this.x_attribute]))
          .y((d) => this.y.get(dim)(d[dim]));

        this.valueline.set(dim, valueline)

        let focusline = d3.line()
          .x((d) => this.focus_x.get(dim)(this.gauss_x(d["x"])))
          .y((d) => this.y.get(dim)(this.gauss_y.get(dim)(d["y"])));

        this.focusline.set(dim, focusline)

        // Update axis
        linechart.selectAll(".xAxis")
          .call(d3.axisBottom(this.x));
        linechart.selectAll(".yAxis")
          .call(d3.axisLeft(this.y.get(dim)));

        focus.selectAll(".yAxis")
          .call(d3.axisRight(this.y.get(dim)));
        focus.selectAll(".xAxis")
          .call(d3.axisBottom(this.focus_x.get(dim)).ticks(2));

        this.charts.set(dim, {linechart: linechart, focus: focus})

        this.filters.set(dim, new Map())
    })

    this.initialized = true;
  }

  updateBars = (dim) => {
    let y_max = d3.max(this.data, (array) => d3.max<any, any>(array["data"], (d) => d[dim]))
    let y_min = d3.min(this.data, (array) => d3.min<any, any>(array["data"], (d) => d[dim]))

    let focus_data = <any>[];
    this.data.forEach((d: any[]) => {
      focus_data.push(d["data"][this.selected_time][dim])
    })

    this.bins = d3.histogram()
      .domain(this.y.get(dim).domain())
      .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 20))
      (focus_data);

    this.focus_x.get(dim).domain([0, d3.max(this.bins, (d: any[]) => d.length)]);

    this.charts.get(dim).focus.selectAll(".xAxis")
      .call(d3.axisBottom(this.focus_x.get(dim)).ticks(2));

    this.charts.get(dim).focus.selectAll(".bar").remove();
    let focus_chart = this.charts.get(dim).focus.selectAll("rect.bars")
      .data(this.bins)

    // Remove bars
    focus_chart.exit().remove();

    // Add bars
    focus_chart.enter().append("rect")
      .attr("class", "bar")
      .attr("transform", (d) => {
        return "translate(0," + this.y.get(dim)(d.x1) + ")";
      })
      .attr("width", (d) => {
        return this.focus_x.get(dim)(d.length); })
      .attr("height", (d) => {
        return this.y.get(dim)(d.x0) - this.y.get(dim)(d.x1) - 1;
      })
      .moveToBack();

      if(this.filters.get(dim).size > 0) {
        this.updateGauss(dim);

        let new_filter = new Map()

        this.data.forEach(d => {
          new_filter.set(
            d["id"],
            this.gradientColor(this.gaussian(this.gauss_y.get(dim).invert(d.data[this.selected_time][dim]), this.gauss_y.get(dim).invert(this.center), this.gauss_sigma(this.weight)))
          )
        })

        this.resolve_brushing(dim, new_filter);
      }

      this.updateHighlight(dim)
  }

  updateHighlight(dim) {
    let self = this;

    if(this.mode == "Opacity") {
      this.charts.get(dim).linechart.selectAll("path.line")
        .attr("opacity", function(d) {
          return d["highlight"]
        })

      this.charts.get(dim).focus.selectAll("rect.bar")
        .attr("opacity", function(b) {
          let opacity = 0;
          let counter = 0;

          self.data.forEach((d: any[]) => {
            let value = d["data"][self.selected_time][dim];

            if(value >= b.x0 && value <= b.x1) {
              counter++;
              opacity += d["highlight"]
            }
          })

          if(b.length < 1) return 0;

          return opacity / counter
        })
    }
    else if(this.mode = "Color-Viridis") {
      this.charts.get(dim).linechart.selectAll("path.line")
        .style("stroke", function(d) {
          return self.color_viridis(d["highlight"])
        })

      this.charts.get(dim).focus.selectAll("rect.bar")
        .style("fill", function(b) {
          let opacity = 0;
          let counter = 0;

          self.data.forEach((d: any[]) => {
            let value = d["data"][self.selected_time][dim];

            if(value >= b.x0 && value <= b.x1) {
              counter++;
              opacity += d["highlight"]
            }
          })

          if(b.length < 1) return 0;

          return self.color_viridis(opacity / counter)
        })
    }
    else if(this.mode = "Color-Plasma") {
      this.charts.get(dim).linechart.selectAll("path.line")
        .style("stroke", function(d) {
          return self.color_plasma(d["highlight"])
        })

      this.charts.get(dim).focus.selectAll("rect.bar")
        .style("fill", function(b) {
          let opacity = 0;
          let counter = 0;

          self.data.forEach((d: any[]) => {
            let value = d["data"][self.selected_time][dim];

            if(value >= b.x0 && value <= b.x1) {
              opacity += d["highlight"]
              counter++;
            }
          })

          if(b.length < 1) return 0;

          return self.color_plasma(opacity / counter)
        })
    }
  }

  createGauss(dim) {
    let line_data = this.getGaussian(dim);
    this.gauss_x.range(this.focus_x.get(dim).domain()).domain(d3.extent(line_data, d => d["x"]))

    this.charts.get(dim).focus.selectAll("path.focusline").remove();
    let focus_line = this.charts.get(dim).focus.selectAll("path.focusline")
      .data([line_data])

    // Distribution line
    focus_line.enter()
      .append("path")
      .attr("class", "focusline")
      .attr("d", (d) => {this.focusline.get(dim)(d)})
      .moveToFront();
  }

  updateGauss(dim) {
    let line_data = this.getGaussian(dim);

    // Update x axis domain
    this.gauss_x.range(this.focus_x.get(dim).domain()).domain(d3.extent(line_data, d => d["x"]))

    // Update line
    this.charts.get(dim).focus.selectAll("path.focusline")
      .data([line_data])
      .attr("d", (d) => this.focusline.get(dim)(d))
      .moveToFront();
  }

  updateChart() {
    // Update domains
    let x_max = d3.max(this.data, (array) => d3.max<any, any>(array["data"], (d) => d[this.x_attribute]))
    let x_min = d3.min(this.data, (array) => d3.min<any, any>(array["data"], (d) => d[this.x_attribute]))
    this.x.domain([x_min, x_max]);

    this.x_values = this.data[0]["data"].map((d) => {
      return d[this.x_attribute]
    })

    this.dimensions.map((dim) => {
      let y_max = d3.max(this.data, (array) => d3.max<any, any>(array["data"], (d) => d[dim]))
      let y_min = d3.min(this.data, (array) => d3.min<any, any>(array["data"], (d) => d[dim]))

    this.selected_time = x_max;

      let focus_data = <any>[];
      this.data.forEach((d: any[]) => {
        focus_data.push(d["data"][this.selected_time][dim])
      })

      this.y.get(dim).domain([y_min, y_max]);
      this.gauss_y.get(dim).range(this.y.get(dim).domain())

      this.bins = d3.histogram()
        .domain(this.y.get(dim).domain())
        .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 20))
        (focus_data);

      this.focus_x.get(dim).domain([0, d3.max(this.bins, (d: any[]) => d.length)]);

      // Select chart
      this.charts.get(dim).linechart.selectAll("path.line").remove();
      let chart = this.charts.get(dim).linechart.selectAll("path.line")
        .data(this.data)

      this.charts.get(dim).focus.selectAll(".bar").remove();
      let focus_chart = this.charts.get(dim).focus.selectAll("rect.bars")
        .data(this.bins)

      // Update axis
      this.charts.get(dim).linechart.selectAll(".xAxis")
        .call(d3.axisBottom(this.x));
      this.charts.get(dim).linechart.selectAll(".yAxis")
        .call(d3.axisLeft(this.y.get(dim)));

      this.charts.get(dim).focus.selectAll(".yAxis")
        .call(d3.axisRight(this.y.get(dim)));
      this.charts.get(dim).focus.selectAll(".xAxis")
        .call(d3.axisBottom(this.focus_x.get(dim)).ticks(2));

      // Linechart
      chart.exit().remove();

      chart.enter()
        .append("path")
        .attr("class", "line")
        .attr("d", (d) => this.valueline.get(dim)(d["data"]));

      // Barchart
      // Remove bars
      focus_chart.exit().remove();

      // Add bars
      focus_chart.enter().append("rect")
        .attr("class", "bar")
        .attr("transform", (d) => {
          return "translate(0," + this.y.get(dim)(d.x1) + ")";
        })
        .attr("width", (d) => {
          return this.focus_x.get(dim)(d.length); })
        .attr("height", (d) => {
          return this.y.get(dim)(d.x0) - this.y.get(dim)(d.x1) - 1;
        })
        .moveToBack();
    })
  }
}
