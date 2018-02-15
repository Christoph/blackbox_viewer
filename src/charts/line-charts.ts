import * as d3 from "d3";
import * as _ from "lodash";
import * as PIXI from "pixi.js";
import { inject, noView, bindable, bindingMode, BindingEngine } from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class LineCharts {
  // One-Way
  @bindable margin = { top: 25, right: 40, bottom: 35, left: 40, middle: 40, y: 40 };
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
  private app;
  private line_id = new Map();
  private id_color = new Map();
  private dimensions;
  private charts;
  private x;
  private y = new Map();
  private y_gl = new Map();
  private focus_x = new Map();
  private valueline = new Map();
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
  private x_weight = new Map();;
  private quantize;
  private quantize_opacity;
  private weight_to_highlight;
  private lineGenerator;

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
      this.data.forEach(d => {
        this.id_color.set(d["id"], d["color"])
      })

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

  getLine(dim) {
    let data = [];

    // Upper start point
    data.push([0, 0])

    // Upper brush start
    data.push([0, this.y.get(dim)(Math.max(this.y.get(dim).domain()[0], this.center - this.weight))])

    // middle point
    data.push([this.focus_x.get(dim).range()[1], this.y.get(dim)(this.center)])

    // Lower brush end
    data.push([0, this.y.get(dim)(Math.min(this.y.get(dim).domain()[1], this.center + this.weight))])

    // Lower end point
    data.push([0, this.focus_height])

    return data
  }

  resolve_brushing(dim) {
    this.brushing = {
      center: this.center,
      radius: this.weight,
      dim: dim,
      timestep: this.selected_time
    }
  }

  initChart() {
    let self = this;

    // Complete drawing area
    let canvas = d3.select(this.element)
      .append("canvas")
      .style("position", "absolute")
      .style("top", 0)
      .style("left", 0)

      this.app = new PIXI.Application({
        view: canvas.node(),
        width: this.width  + this.margin.left + this.margin.right,
        height: this.height + this.margin.top + this.margin.bottom,
        transparent: true,
        antialias: true
      });

    this.svg = d3.select(this.element)
      .append("svg")
      .style("position", "absolute")
      .style("top", 0)
      .style("left", 0)
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);

    // Get y values
    this.dimensions = d3.keys(this.data[0]["data"][0]).filter((d) => {
      return d != this.x_attribute
    });

    // Initialize id color Map
    this.dimensions.forEach(dim => {
      this.line_id.set(dim, new Map())
    })

    // Set height value
    this.lc_height = (this.y_size - this.margin.top - this.margin.bottom - ((this.dimensions.length-1) * this.margin.y))/this.dimensions.length;
    this.focus_height = this.lc_height

    this.focus_offset = this.lc_width + this.margin.middle + this.margin.left;

    // Reset charts map
    this.charts = new Map();

    this.color_viridis = d3.scaleSequential(d3.interpolateViridis)
      .domain([0, 1])

    this.quantize = d3.scaleQuantize()
        .domain([0, 1])
        .range([
          this.color_viridis(0.2),
          this.color_viridis(0.4),
          this.color_viridis(0.6),
          this.color_viridis(0.8),
          this.color_viridis(1),
        ])

    // for all charts
    this.x = d3.scaleLinear()
      .range([0, this.lc_width]);

    this.lineGenerator = d3.line();

    this.weight_to_highlight = d3.scaleLinear()
      .range([0,1])

    // Create initial chart areas
    let margin_iterator = 0;
    this.dimensions.map((dim) => {
      let brushing = false;
      function updateBrushing(d) {
        if(brushing && d3.event) {
          self.center = self.y.get(dim).invert(d3.mouse(this)[1]);
          self.weight = self.x_weight.get(dim)(d3.mouse(this)[0]);

          self.weight_to_highlight.domain([0, self.weight])

          self.updateBrush(dim);
          self.resolve_brushing(dim);
        }
      }

      // Linechart area
      let linechart = this.svg
        .append("g")
        .attr("width", this.lc_width)
        .attr("height", this.lc_height)
        .attr("transform",
        "translate(" + this.margin.left + ", " + (this.margin.top + (this.focus_height + this.margin.y) * margin_iterator) + ")")

      let focus = this.svg
        .append("g")
        .attr("transform",
        "translate(" + this.focus_offset + ", " + (this.margin.top + (this.focus_height + this.margin.y) * margin_iterator) + ")")

      focus
        .append("rect")
        .attr("width", this.focus_width)
        .attr("height", this.focus_height)
        .style("opacity", 0)
        .on("mousedown", function(d) {
          self.center = self.y.get(dim).invert(d3.mouse(this)[1]);
          self.weight = self.x_weight.get(dim)(d3.mouse(this)[0]);

          self.weight_to_highlight.domain([0, self.weight])

          self.createBrush(dim);
          self.updateBrush(dim);
          self.resolve_brushing(dim);

          brushing = true;
        })
        .on("mousemove", _.throttle(updateBrushing, 50))
        .on("mouseup", function(d) {
          brushing = false;
        })
        .on("mouseleave", function(d) {
          brushing = false;
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
                // .raise()
                .attr("x1", d3.event.x)
                .attr("x2", d3.event.x)

              d3.select(this).select("circle")
                // .raise()
                .attr("cx", d3.event.x)

              d3.select(this).select("text")
                // .raise()
                .attr("x", d3.event.x - 10)
            }

            d3.select(this).select("text")
              .text(Math.round(self.x.invert(d3.event.x)))
          })
          .on('end', function() {
            let closest = self.x_values.reduce(function(prev, curr) {
              return (Math.abs(curr - self.x.invert(d3.event.x)) < Math.abs(prev - self.x.invert(d3.event.x)) ? curr : prev);
            });

            self.selected_time = closest

            d3.select(this).select("text")
              .text(self.selected_time)

            self.updateBars(dim);

            d3.select(this).classed('active',false);
          });

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

        selector.append("text")
          .attr("x", this.lc_width - 10)
          .attr("y", -10)

        // add the x Axis
        focus.append("g")
          .attr("transform", "translate(0," + this.lc_height + ")")
          .attr("class", "xAxis");

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

        // for each chart
        let y = d3.scaleLinear()
          .range([this.lc_height, 0]);

        this.y.set(dim, y)

        let y_gl = d3.scaleLinear()
          .range([this.lc_height, 0]);

        this.y_gl.set(dim, y_gl)

        let focus_x = d3.scaleLinear()
          .range([0, this.focus_width]);

        this.focus_x.set(dim , focus_x)

        let x_weight = d3.scaleLinear()
          .domain([0, this.focus_width]);

        this.x_weight.set(dim , x_weight)

        // Update axis
        linechart.selectAll(".xAxis")
          .call(d3.axisBottom(this.x));
        linechart.selectAll(".yAxis")
          .call(d3.axisLeft(this.y.get(dim)));

        focus.selectAll(".yAxis")
          .call(d3.axisRight(this.y.get(dim)));
        focus.selectAll(".xAxis")
          .call(d3.axisBottom(this.focus_x.get(dim)).ticks(2));

        // Webgl parts
        let container = new PIXI.Container()

        container.position.x = this.margin.left
        container.position.y = this.margin.top + (this.focus_height + this.margin.y) * margin_iterator

        this.app.stage.addChild(container);

        this.charts.set(dim, {linechart: linechart, focus: focus, container: container})
        this.filters.set(dim, new Map())

        margin_iterator++;
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

    this.x_weight.get(dim).range([0, (y_max - y_min)/2])

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

      this.resolve_brushing(dim);
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
    if(this.mode = "Opacity + Viridis") {
      this.charts.get(dim).container.children.forEach(x => {
        let color = this.id_color.get(this.line_id.get(dim).get(x))

        if(color == "none") {
          x.alpha = 0.1;
          x.tint = 0x171717
        }
        else {
          x.alpha = 1;
          x.tint = parseInt(color.substring(1), 16);
        }
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

          return self.quantize(opacity / counter)
        })
    }
  }

  createBrush(dim) {
    let line_data = this.getLine(dim);

    this.charts.get(dim).focus.selectAll("path.focusline").remove();
    let focus_line = this.charts.get(dim).focus.selectAll("path.focusline")
      .data([line_data])

    // Distribution line
    focus_line.enter()
      .append("path")
      .attr("class", "focusline")
      .attr("fill", "none")
      .attr("d", this.lineGenerator)
      .moveToFront();
  }

  updateBrush(dim) {
    let line_data = this.getLine(dim);

    // Distribution line
    this.charts.get(dim).focus.selectAll("path.focusline")
      .data([line_data])
      .attr("d", this.lineGenerator)
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

    // Per dimension calls
    this.dimensions.map((dim) => {
      let y_max = d3.max(this.data, (array) => d3.max<any, any>(array["data"], (d) => d[dim]))
      let y_min = d3.min(this.data, (array) => d3.min<any, any>(array["data"], (d) => d[dim]))

      this.selected_time = x_max;

      let focus_data = <any>[];
      this.data.forEach((d: any[]) => {
        focus_data.push(d["data"][this.selected_time][dim])
      })

      this.y.get(dim).domain([y_min, y_max]);
      this.y_gl.get(dim).domain([y_min, y_max])

      this.bins = d3.histogram()
        .domain(this.y.get(dim).domain())
        .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 20))
        (focus_data);

      this.focus_x.get(dim).domain([0, d3.max(this.bins, (d: any[]) => d.length)]);

      this.x_weight.get(dim).range([0, (y_max - y_min)/2])

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

    this.data.forEach(d => {
      this.dimensions.forEach(dim => {
        let line = new PIXI.Graphics();
        line.lineStyle(1, 0x4682b4, 1);

        for(let i = 0; i < d["data"].length-1; i++) {
          line.moveTo(this.x(d["data"][i][this.x_attribute]),this.y_gl.get(dim)(d["data"][i][dim]));
          line.lineTo(this.x(d["data"][i+1][this.x_attribute]),this.y_gl.get(dim)(d["data"][i+1][dim]));
        }

        this.charts.get(dim).container.addChild(line);
        this.line_id.get(dim).set(line, d["id"])
      })
    })
  }
}
