import * as d3 from "d3";
import * as _ from 'lodash';
import { inject, noView, bindable, bindingMode, BindingEngine } from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class parallelCoordinatesGauss {
  // One-Way
  @bindable margin = { top: 60, right: 20, bottom: 30, left: 40 };
  @bindable redraw = 0;

  // Two-Way
  @bindable({ defaultBindingMode: bindingMode.twoWay }) brushing;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) selected;

  // Observed Variables
  @bindable data = [];

  // Aurelia variables
  private element;
  private subscription;

  // D3 variables
  private svg;
  private x = {};
  private y;
  private dimensions = <any>[];
  private line;
  private background;
  private foreground;

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

    // Draw the graph
    this.initChart()
    this.updateChart();
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

  // Remove the watcher after disposing the class
  unbind() {
    this.subscription.dispose();
  }

  // D3 functions

  // Draw the lines
  private path(d) {
    return this.line(this.dimensions.map((p) => {
      return [this.x[p](d[p]), this.y(p)];
    }));
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
      .append("g")
      .attr("transform",
      "translate(" + this.margin.left + "," + this.margin.top + ")");

    // set the x range
    this.y = d3.scalePoint()
      .range([0, this.height]);

    // Basic initialization
    this.line = d3.line()
      .curve(d3.curveMonotoneY);
  }

  updateHighlight() {
    this.svg.selectAll(".line")
      .attr("opacity", function(d) {
        return d["highlight"]
      })
  }

  updateChart() {
    // Get current dataset dimensions: Keys of the map
    if (this.data.length > 0) {
      this.dimensions = d3.keys(this.data[0]["data"]).filter((d) => {
        return d != "name"
      });
    }

    // Create corresponding y axis
    // Currently only linear values
    this.dimensions.map((dim) => {
      let ext = <any>d3.extent(this.data, (data) => {
        return data["data"][dim];
      })

      // Extend domain if its only one point
      if (ext[0] == ext[1]) {
        ext[0] -= ext[0] * 0.1;
        ext[1] += ext[1] * 0.1;
      }

      this.x[dim] = d3.scaleLinear()
        .range([this.width, 0])
        .domain([ext[1], ext[0]])
    });

    // Create the y axis
    this.y.domain(this.dimensions);

    // Draw lines
    this.background = this.svg.append("g")
      .selectAll("path")
      .data(this.data)
      .enter().append("path")
      .attr("class", "line")
      .classed("highlight", function(this, d) {
        if (d["highlight"] == 1) { return true; }
        else { return false; }
      })
      .classed("background", function(this, d) {
        if (d["highlight"] == 2) { return true; }
        else { return false; }
      })
      .attr("d", (d) => { return this.path(d["data"]) })
      // .on("click", (d) => {
      //   this.selected = d["id"]
      // });

    // Create local versions of class variables
    // This is necessary due to the nature of TS and D3

    let width = this.width
    let x = this.x;
    let dat = this.data
    let getBrushing = this.getBrushing;

    // Create drawing area
    let g = this.svg.selectAll(".dimension")
      .data(this.dimensions)
      .enter().append("g")
      .attr("class", "dimension")
      .attr("transform", (d) => {
        return "translate(0," + this.y(d) + ")";
      });

    // Add axis
    g.append("g")
      .each(function(this, d) {
        let ext = x[d].domain()

        // Set custom tick amount if the values are too small
        let tick_multiplier = 1;

        if(ext[0] - ext[1] < 0.0001) {
          tick_multiplier = 0.6;
        }
        else if(ext[0] - ext[1] < 0.001) {
          tick_multiplier = 0.7;
        }
        else if(ext[0] - ext[1] < 0.01) {
          tick_multiplier = 0.8;
        }

        let ticks = x[d].ticks().length

        d3.select(this).call(d3.axisTop(x[d]).ticks(Math.ceil(ticks * tick_multiplier)));
      });

    // Add titles for the axis
    g.append("text")
      .style("text-anchor", "middle")
      .attr("y", -9)
      .attr("transform", "rotate(-90)")
      .text((d) => { return d; });

    // Add and store a brush for each axis.
    g.append("g")
      .attr("class", "brush")
      .each(function(this, d) {
        d3.select(this).call(d3.brushX()
          .extent([[0, -9], [width, 9]])
          .on("brush", () => {
            if (!d3.event.sourceEvent) return; // Only transition after input.

            getBrushing(g, x, dat)
          })
          .on("end", () => {
            if (!d3.event.sourceEvent) return; // Only transition after input.

            getBrushing(g, x, dat)
          })
        );
      })
  }
}
