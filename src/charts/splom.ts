import * as d3 from "d3";
import * as _ from "lodash";
import { inject, noView, bindable, bindingMode, BindingEngine } from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class Splom {
  // One-Way
  @bindable margin = { top: 25, right: 40, bottom: 35, left: 40, padding: 20 };
  @bindable size = 50;
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
  private svg;
  private charts;
  private x;
  private y;
  private brushCell;
  private domainByTrait = {};
  private brush;
  private color_viridis;
  private quantize;
  private quantize_opacity;

  private filters = new Map()

  // set the dimensions and margins of the graph
  private width;
  private height;
  private x_size = 900;
  private y_size = 500;

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
    this.height = this.y_size - this.margin.top - this.margin.bottom;
  }

  // Update the chart if the data changes
  dataMutated(splices) {
    if (this.data.length > 1) {
      if(!this.initialized) this.initChart()

      this.updateChart();
      // this.svg.selectAll("path.focusline").remove()
    }
    else {
      // this.svg.selectAll(".line").remove()
      // this.svg.selectAll(".bar").remove()
      // this.svg.selectAll("path.focusline").remove()
    }
  }

  redrawChanged() {
    if (this.data.length > 1) {
      this.updateHighlight();
    }
  }

  resetChanged() {
    if(this.initialized) {
      this.svg.remove();
      this.initialized = false;
    }

    // this.initChart();
    // this.updateChart();
  }

  unbind() {
    this.subscription.dispose();
  }

  cross(a, b) {
    var c = [], n = a.length, m = b.length, i, j;
    for (i = -1; ++i < n;) for (j = -1; ++j < m;) c.push({x: a[i], i: i, y: b[j], j: j});
    return c;
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

  // resolve_brushing(dim) {
  //   let out = new Map()
  //   let temp = new Map()
  //
  //   this.data.forEach(d => {
  //     if(d.data[this.selected_time][dim] >= this.center-this.weight &&
  //     d.data[this.selected_time][dim] <= this.center+this.weight) {
  //       if(d.data[this.selected_time][dim] < this.center) {
  //         temp.set(
  //           d["id"],
  //           this.weight_to_highlight(d.data[this.selected_time][dim] - (this.center - this.weight))
  //         )
  //       }
  //       else {
  //         temp.set(
  //           d["id"],
  //           this.weight_to_highlight(Math.abs(d.data[this.selected_time][dim] - (this.center + this.weight)))
  //         )
  //       }
  //     }
  //     else {
  //       temp.set(
  //         d["id"],
  //         0
  //       )
  //     }
  //   })
  //
  //   this.filters.set(dim, temp)
  //
  //   // Update average filter
  //   this.filters.forEach((v, k) => {
  //     if(v.size > 0) {
  //       v.forEach((iv, ik) => {
  //         if(out.has(ik)) {
  //           let value = out.get(ik)
  //
  //           out.set(ik, (value + iv)/2)
  //         }
  //         else {
  //           out.set(ik, iv)
  //         }
  //       })
  //     }
  //   })
  //
  //   this.brushing = out;
  // }


  initChart() {
    let self = this;

    this.svg = d3.select(this.element).append("svg")
        .attr("width", this.width)
        .attr("height", this.width)
      .append("g")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    this.color_viridis = d3.scaleSequential(d3.interpolateViridis)
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
      .range([0.1, 0.35, 0.7, 0.9, 1]);

    this.initialized = true;
  }

  updateHighlight() {
    let self = this;

    self.svg.selectAll(".cell")
      .each(function(p) {
        var cell = d3.select(this);

        cell.selectAll("circle")
            .style("fill", function(d) {
              if(d["highlight"] <= 0) return "white"
              else return d["color"];
            });
      });
  }

  updateChart() {
      let self = this;
      let traits = d3.keys(this.data[0]["params"])
      let n = traits.length;

      traits.forEach(function(trait) {
        self.domainByTrait[trait] = d3.extent(self.data, function(d) { return d["params"][trait]; });
      });

      this.size = (this.width - ((n-1) * this.margin.padding)) / n;

      this.x = d3.scaleLinear()
          .range([this.margin.padding / 2, this.size - this.margin.padding / 2]);

      this.y = d3.scaleLinear()
          .range([this.size - this.margin.padding / 2, this.margin.padding / 2]);

      // Clear the previously-active brush, if any.
      function brushstart(p) {
        if (self.brushCell !== this) {
          d3.select(self.brushCell).call(self.brush.move, null);
          self.brushCell = this;
        self.x.domain(self.domainByTrait[p.x]);
        self.y.domain(self.domainByTrait[p.y]);
        }
      }

      // Highlight the selected circles.
      function brushmove(p) {
        var e = d3.brushSelection(this);
        self.svg.selectAll("circle").classed("hidden", function(d) {
          return !e
            ? false
            : (
              e[0][0] > self.x(+d[p.x]) || self.x(+d[p.x]) > e[1][0]
              || e[0][1] > self.y(+d[p.y]) || self.y(+d[p.y]) > e[1][1]
            );
        });
      }

      // If the brush is empty, select all circles.
      function brushend() {
        var e = d3.brushSelection(this);
        if (e === null) this.svg.selectAll(".hidden").classed("hidden", false);
      }

      this.brush = d3.brush()
          .on("start", brushstart)
          .on("brush", brushmove)
          .on("end", brushend)
          .extent([[0,0],[this.size,this.size]]);

      var xAxis = d3.axisBottom(this.x)
          .ticks(6);

      var yAxis = d3.axisLeft(this.y)
          .ticks(6);

      xAxis.tickSize(this.size * n);
      yAxis.tickSize(-this.size * n);

      this.svg.selectAll(".x.axis")
          .data(traits)
        .enter().append("g")
          .attr("class", "x axis")
          .attr("transform", function(d, i) { return "translate(" + (n - i - 1) * self.size + ",0)"; })
          .each(function(d) { self.x.domain(self.domainByTrait[d]); d3.select(this).call(xAxis); });

      this.svg.selectAll(".y.axis")
          .data(traits)
        .enter().append("g")
          .attr("class", "y axis")
          .attr("transform", function(d, i) { return "translate(0," + i * self.size + ")"; })
          .each(function(d) { self.y.domain(self.domainByTrait[d]); d3.select(this).call(yAxis); });

      var cell = self.svg.selectAll(".cell")
          .data(self.cross(traits, traits))
        .enter().append("g")
          .attr("class", "cell")
          .attr("transform", function(d) { return "translate(" + (n - d.i - 1) * self.size + "," + d.j * self.size + ")"; })
          .each(function(p) {
            var cell = d3.select(this);

            self.x.domain(self.domainByTrait[p.x]);
            self.y.domain(self.domainByTrait[p.y]);

            cell.append("rect")
                .attr("class", "frame")
                .attr("x", self.margin.padding / 2)
                .attr("y", self.margin.padding / 2)
                .attr("width", self.size - self.margin.padding)
                .attr("height", self.size - self.margin.padding);

            cell.selectAll("circle")
                .data(self.data)
              .enter().append("circle")
                .attr("cx", function(d) { return self.x(d["params"][p.x]); })
                .attr("cy", function(d) { return self.y(d["params"][p.y]); })
                .attr("r", 3)
                .style("fill", function(d) { return "steelblue"; });
          });

      // Titles for the diagonal.
      cell.filter(function(d) { return d.i === d.j; }).append("text")
          .attr("x", self.margin.padding)
          .attr("y", self.margin.padding)
          .attr("dy", ".71em")
          .text(function(d) { return d.x; });

      cell.call(self.brush);
  }
}
