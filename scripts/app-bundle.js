define('app',["require", "exports", "aurelia-router"], function (require, exports, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.router = aurelia_router_1.Router;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Improve";
            config.map([
                { route: "", moduleId: "gauss/gauss", nav: true, title: "SIR - New Brushing", name: "sir" },
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1lBQ0UsV0FBTSxHQUFHLHVCQUFNLENBQUM7UUFvQmxCLENBQUM7UUFsQkMsNkJBQWUsR0FBZixVQUFnQixNQUEyQixFQUFFLE1BQU07WUFDL0MsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDekIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFLVCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO2FBTzVGLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7UUFDSCxVQUFDO0lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtJQXJCWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlciwgUm91dGVyQ29uZmlndXJhdGlvbn0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCJcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHJvdXRlciA9IFJvdXRlcjtcblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXIpIHtcbiAgICAgIGNvbmZpZy50aXRsZSA9IFwiSW1wcm92ZVwiO1xuICAgICAgY29uZmlnLm1hcChbXG4gICAgICAgICAgLy8geyByb3V0ZTogXCJcIiwgbW9kdWxlSWQ6IFwiZW1wdHkvbm8tc2VsZWN0aW9uXCIsIG5hdjogdHJ1ZSwgdGl0bGU6IFwiU2VsZWN0XCIgfSxcbiAgICAgICAgICAvLyB7IHJvdXRlOiBcImFiYi9cIiwgbW9kdWxlSWQ6IFwiYWJidmllL2FiYlwiLCBuYXY6IGZhbHNlLCB0aXRsZTogXCJBYmJcIiwgbmFtZTogXCJhYmJcIiB9LFxuICAgICAgICAgIC8vIHsgcm91dGU6IFwiZGV0L1wiLCBtb2R1bGVJZDogXCJkZXRhaWxzL2RldGFpbHNcIiwgbmF2OiBmYWxzZSwgdGl0bGU6IFwiRGV0YWlsc1wiLCBuYW1lOiBcImRldFwiIH0sXG4gICAgICAgICAgLy8geyByb3V0ZTogXCJ2cHNhL1wiLCBtb2R1bGVJZDogXCJ2cHNhL3Zwc2FcIiwgbmF2OiB0cnVlLCB0aXRsZTogXCJTSVIgLSBDbGFzc2ljIEJydXNoaW5nXCIsIG5hbWU6IFwidnBzYVwiIH0sXG4gICAgICAgIHsgcm91dGU6IFwiXCIsIG1vZHVsZUlkOiBcImdhdXNzL2dhdXNzXCIsIG5hdjogdHJ1ZSwgdGl0bGU6IFwiU0lSIC0gTmV3IEJydXNoaW5nXCIsIG5hbWU6IFwic2lyXCIgfSxcbiAgICAgICAgLy8geyByb3V0ZTogXCJzaXJfaGlzdC9cIiwgbW9kdWxlSWQ6IFwiZ2F1c3NfaGlzdC9nYXVzc1wiLCBuYXY6IHRydWUsIHRpdGxlOiBcIlNJUiAtIE5ldyBCcnVzaGluZyAtIEhpc3RvZ3JhbVwiLCBuYW1lOiBcInNpclwiIH0sXG4gICAgICAgIC8vIHsgcm91dGU6IFwic3BhdGlhbHNpcmNsYXNzaWMvXCIsIG1vZHVsZUlkOiBcInNwYXRpYWxfY2xhc3NpYy9lcGlkZW1pY3NcIiwgbmF2OiB0cnVlLCB0aXRsZTogXCJTcGF0aWFsIFNJUiAtIENsYXNzaWMgQnJ1c2hpbmdcIiwgbmFtZTogXCJzaXJcIiB9LFxuICAgICAgICAvLyB7IHJvdXRlOiBcInNwYXRpYWxzaXIvXCIsIG1vZHVsZUlkOiBcInNwYXRpYWxfc2lyL2VwaWRlbWljc1wiLCBuYXY6IHRydWUsIHRpdGxlOiBcIlNwYXRpYWwgU0lSIC0gTmV3IEJydXNoaW5nXCIsIG5hbWU6IFwic2lyXCIgfSxcbiAgICAgICAgLy8geyByb3V0ZTogXCJzcGF0aWFsc2lyY29sb3IvXCIsIG1vZHVsZUlkOiBcImNvbG9ybWFwL2VwaWRlbWljc1wiLCBuYXY6IHRydWUsIHRpdGxlOiBcIlNwYXRpYWwgU0lSIC0gQ29sb3JtYXBcIiwgbmFtZTogXCJzaXJcIiB9LFxuICAgICAgICAvLyAgIHsgcm91dGU6IFwiZHJpZnQvXCIsIG1vZHVsZUlkOiBcImRyaWZ0L2RyaWZ0XCIsIG5hdjogdHJ1ZSwgdGl0bGU6IFwiR2VuZXRpYyBEcmlmdFwiLCBuYW1lOiBcImRyaWZ0XCIgfSxcbiAgICAgICAgLy8gICB7IHJvdXRlOiBcIm1pZ3JhdGlvbi9cIiwgbW9kdWxlSWQ6IFwic3BhdGlhbF9taWdyYXRpb24vbWlncmF0aW9uXCIsIG5hdjogdHJ1ZSwgdGl0bGU6IFwiU3BhdGlhbCBNaWdyYXRpb25cIiwgbmFtZTogXCJtaWdyYXRpb25cIiB9LFxuICAgICAgXSk7XG5cbiAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin("aurelia-computed")
            .plugin("d3-extended")
            .plugin("d3-random")
            .plugin("aurelia-bootstrap")
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsTUFBTSxDQUFDLGtCQUFrQixDQUFDO2FBQzFCLE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDckIsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixNQUFNLENBQUMsbUJBQW1CLENBQUM7YUFDM0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBbEJELDhCQWtCQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLnBsdWdpbihcImF1cmVsaWEtY29tcHV0ZWRcIilcbiAgICAucGx1Z2luKFwiZDMtZXh0ZW5kZWRcIilcbiAgICAucGx1Z2luKFwiZDMtcmFuZG9tXCIpXG4gICAgLnBsdWdpbihcImF1cmVsaWEtYm9vdHN0cmFwXCIpXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpO1xuXG4gIGlmIChlbnZpcm9ubWVudC5kZWJ1Zykge1xuICAgIGF1cmVsaWEudXNlLmRldmVsb3BtZW50TG9nZ2luZygpO1xuICB9XG5cbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtdGVzdGluZycpO1xuICB9XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/line-chart-gauss',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineChartGauss = (function () {
        function LineChartGauss(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.x_label = "days";
            this.y_label = "y";
            this.redraw = 0;
            this.data = [];
            this.center = 1.0;
            this.weight = 1.0;
            this.x_size = 900;
            this.y_size = 500;
            this.lc_width = 50;
            this.lc_height = 500;
            this.focus_width = 50;
            this.focus_height = 500;
            this.focus_offset = 100;
            this.element = element;
        }
        LineChartGauss.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.lc_width = this.width * 0.8;
            this.focus_width = this.width * 0.2 - this.margin.left;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.lc_height = this.y_size - this.margin.top - this.margin.bottom;
            this.focus_height = this.y_size - this.margin.top - this.margin.bottom;
            this.focus_offset = this.lc_width + this.margin.middle + this.margin.left;
            this.initChart();
        };
        LineChartGauss.prototype.dataMutated = function (splices) {
            if (this.data.length > 1) {
                this.updateChart();
                this.focus.selectAll("path.focusline").remove();
            }
            else {
                this.svg.selectAll(".line").remove();
                this.focus.selectAll(".bar").remove();
                this.focus.selectAll("path.focusline").remove();
            }
        };
        LineChartGauss.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateHighlight();
            }
        };
        LineChartGauss.prototype.unbind = function () {
            this.subscription.dispose();
        };
        LineChartGauss.prototype.getGaussian = function () {
            var data = [];
            var rnd = d3.randomUniform(-5, 5);
            for (var i = 0; i < 10000; i++) {
                var q = rnd();
                var p = this.gaussian(q, this.gauss_y.invert(this.center), this.gauss_sigma(this.weight));
                if (p < 0.0001)
                    p = 0;
                var el = {
                    "y": q,
                    "x": p
                };
                data.push(el);
            }
            ;
            this.gradientColor.domain([0, d3.max(data, function (x) { return x["x"]; })]);
            data.sort(function (a, b) { return (a.y > b.y) ? 1 : ((b.y > a.y) ? -1 : 0); });
            return data;
        };
        ;
        LineChartGauss.prototype.gaussian = function (x, mean, sigma) {
            var gaussianConstant = 1 / Math.sqrt(2 * Math.PI);
            x = (x - mean) / sigma;
            var g = gaussianConstant * Math.exp(-.5 * x * x) / sigma;
            if (g < 0) {
                g = 0;
            }
            return g;
        };
        LineChartGauss.prototype.initChart = function () {
            var _this = this;
            var self = this;
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.linechart = this.svg
                .append("g")
                .attr("width", this.lc_width)
                .attr("height", this.lc_height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")")
                .on("click", function (d) {
                _this.resetFilter();
            });
            this.focus = this.svg
                .append("g")
                .attr("transform", "translate(" + this.focus_offset + ", " + this.margin.top + ")");
            this.focus
                .append("rect")
                .attr("width", this.focus_width)
                .attr("height", this.focus_height)
                .style("opacity", 0)
                .on("mousedown", function (d) {
                var out = new Map();
                self.center = self.y.invert(d3.mouse(this)[1]);
                self.weight = d3.mouse(this)[0];
                self.createGauss();
                self.data.forEach(function (d) {
                    out.set(d["id"], self.gradientColor(self.gaussian(self.gauss_y.invert(d.data[d.data.length - 1][self.y_attribute]), self.gauss_y.invert(self.center), self.gauss_sigma(self.weight))));
                });
                self.brushing = out;
                self.updateHighlight();
                self.mouse_event = d3.select(this)
                    .on("mousemove", function (d) {
                    var out = new Map();
                    self.center = self.y.invert(d3.mouse(this)[1]);
                    self.weight = d3.mouse(this)[0];
                    self.updateGauss();
                    self.data.forEach(function (d) {
                        out.set(d["id"], self.gradientColor(self.gaussian(self.gauss_y.invert(d.data[d.data.length - 1][self.y_attribute]), self.gauss_y.invert(self.center), self.gauss_sigma(self.weight))));
                    });
                    self.brushing = out;
                    self.updateHighlight();
                })
                    .on("mouseup", function (d) {
                    self.mouse_event.on("mousemove", null).on("mouseup", null);
                });
            })
                .moveToFront();
            this.x = d3.scaleLinear()
                .range([0, this.lc_width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.focus_x = d3.scaleLinear()
                .range([0, this.focus_width]);
            this.gauss_x = d3.scaleLinear();
            this.gauss_y = d3.scaleLinear()
                .domain([-5, 5]);
            this.gauss_sigma = d3.scaleLinear()
                .range([0.001, 3])
                .domain([0, this.focus_width]);
            this.gradientColor = d3.scaleLinear()
                .range([0, 1]);
            this.linechart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text(this.x_label);
            this.focus.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.focus.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text("day");
            this.linechart.append("g")
                .attr("class", "yAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text(this.y_label);
            this.focus.append("g")
                .attr("transform", "translate(" + this.focus_width + ", 0)")
                .attr("class", "yAxis");
            this.focus.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .attr("x", this.focus_width)
                .text(function (d) { return _this.y_attribute; });
            this.valueline = d3.line()
                .x(function (d) { return _this.x(d[_this.x_attribute]); })
                .y(function (d) { return _this.y(d[_this.y_attribute]); });
            this.focusline = d3.line()
                .x(function (d) { return _this.focus_x(_this.gauss_x(d["x"])); })
                .y(function (d) { return _this.y(_this.gauss_y(d["y"])); });
            var y_attribute = this.y_attribute;
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            this.focus.selectAll(".yAxis")
                .call(d3.axisRight(this.y));
            this.focus.selectAll(".xAxis")
                .call(d3.axisBottom(this.focus_x).ticks(2));
        };
        LineChartGauss.prototype.updateHighlight = function () {
            var self = this;
            this.linechart.selectAll("path.line")
                .attr("opacity", function (d) {
                return d["highlight"];
            });
            this.focus.selectAll("rect.bar")
                .attr("opacity", function (b) {
                var opacity = 0;
                self.data.forEach(function (d) {
                    var value = d["data"][d["data"].length - 1][self.y_attribute];
                    if (value > b.x0 && value < b.x1) {
                        opacity += d["highlight"];
                    }
                });
                if (b.length < 1)
                    return 0;
                return opacity / b.length;
            });
        };
        LineChartGauss.prototype.resetFilter = function () {
            this.focus.selectAll("path.focusline").remove();
            this.brushing = new Map();
            this.updateHighlight();
        };
        LineChartGauss.prototype.createGauss = function () {
            var _this = this;
            var line_data = this.getGaussian();
            this.gauss_x.range(this.focus_x.domain()).domain(d3.extent(line_data, function (d) { return d["x"]; }));
            this.focus.selectAll("path.focusline").remove();
            var focus_line = this.focus.selectAll("path.focusline")
                .data([line_data]);
            focus_line.enter()
                .append("path")
                .attr("class", "focusline")
                .attr("d", function (d) { return _this.focusline(d); })
                .moveToFront();
        };
        LineChartGauss.prototype.updateGauss = function () {
            var _this = this;
            var line_data = this.getGaussian();
            this.gauss_x.range(this.focus_x.domain()).domain(d3.extent(line_data, function (d) { return d["x"]; }));
            this.focus.selectAll("path.focusline")
                .data([line_data])
                .attr("d", function (d) { return _this.focusline(d); })
                .moveToFront();
        };
        LineChartGauss.prototype.updateChart = function () {
            var _this = this;
            var x_max = d3.max(this.data, function (array) { return d3.max(array["data"], function (d) { return d[_this.x_attribute]; }); });
            var y_max = d3.max(this.data, function (array) { return d3.max(array["data"], function (d) { return d[_this.y_attribute]; }); });
            var x_min = d3.min(this.data, function (array) { return d3.min(array["data"], function (d) { return d[_this.x_attribute]; }); });
            var y_min = d3.min(this.data, function (array) { return d3.min(array["data"], function (d) { return d[_this.y_attribute]; }); });
            this.focus_data = [];
            this.data.forEach(function (d) {
                _this.focus_data.push(d["data"][d["data"].length - 1]);
            });
            this.x.domain([x_min, x_max]);
            this.y.domain([y_min, y_max]);
            this.gauss_y.range(this.y.domain());
            var bins = d3.histogram()
                .value(function (d) { return d[_this.y_attribute]; })
                .domain(this.y.domain())
                .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 20))(this.focus_data);
            this.focus_x.domain([0, d3.max(bins, function (d) { return d.length; })]);
            this.linechart.selectAll("path.line").remove();
            var chart = this.linechart.selectAll("path.line")
                .data(this.data);
            this.focus.selectAll(".bar").remove();
            var focus_chart = this.focus.selectAll("rect.bars")
                .data(bins);
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            this.focus.selectAll(".yAxis")
                .call(d3.axisRight(this.y));
            this.focus.selectAll(".xAxis")
                .call(d3.axisBottom(this.focus_x).ticks(2));
            chart.exit().remove();
            chart.enter()
                .append("path")
                .attr("class", "line")
                .attr("d", function (d) { return _this.valueline(d["data"]); });
            focus_chart.exit().remove();
            focus_chart.enter().append("rect")
                .attr("class", "bar")
                .attr("transform", function (d) {
                return "translate(0," + _this.y(d.x1) + ")";
            })
                .attr("width", function (d) { return _this.focus_x(d.length); })
                .attr("height", function (d) {
                return _this.y(d.x0) - _this.y(d.x1) - 1;
            })
                .moveToBack();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "x_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "y_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "data", void 0);
        LineChartGauss = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], LineChartGauss);
        return LineChartGauss;
    }());
    exports.LineChartGauss = LineChartGauss;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9saW5lLWNoYXJ0LWdhdXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBO1FBbURFLHdCQUFZLE9BQU8sRUFBVSxhQUFhO1lBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7WUFqRGhDLFdBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xFLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLFlBQU8sR0FBRyxNQUFNLENBQUM7WUFDakIsWUFBTyxHQUFHLEdBQUcsQ0FBQztZQUNkLFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBd0JaLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBS2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixhQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2QsY0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztZQUNqQixpQkFBWSxHQUFHLEdBQUcsQ0FBQztZQUNuQixpQkFBWSxHQUFHLEdBQUcsQ0FBQztZQUd6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO1FBR0QsaUNBQVEsR0FBUjtZQUFBLGlCQXVCQztZQXRCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhO3FCQUNuQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUks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QUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN4RCxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQztnQkFDaEIsTUFBTSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUM7aUJBQ0QsVUFBVSxFQUFFLENBQUM7UUFFbEIsQ0FBQztRQTdiUztZQUFULDRCQUFROztzREFBbUU7UUFDbEU7WUFBVCw0QkFBUTs7MkRBQW1CO1FBQ2xCO1lBQVQsNEJBQVE7OzJEQUFtQjtRQUNsQjtZQUFULDRCQUFROzt1REFBa0I7UUFDakI7WUFBVCw0QkFBUTs7dURBQWU7UUFDZDtZQUFULDRCQUFROztzREFBWTtRQUdpQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7d0RBQVU7UUFHckQ7WUFBVCw0QkFBUTs7b0RBQVc7UUFiVCxjQUFjO1lBRjFCLDBCQUFNLENBQUMsT0FBTyxFQUFFLGlDQUFhLENBQUM7WUFDOUIsMEJBQU0sRUFBRTs7V0FDSSxjQUFjLENBZ2MxQjtRQUFELHFCQUFDO0tBaGNELEFBZ2NDLElBQUE7SUFoY1ksd0NBQWMiLCJmaWxlIjoiY2hhcnRzL2xpbmUtY2hhcnQtZ2F1c3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IGluamVjdCwgbm9WaWV3LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIEJpbmRpbmdFbmdpbmUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbkBub1ZpZXcoKVxuZXhwb3J0IGNsYXNzIExpbmVDaGFydEdhdXNzIHtcbiAgLy8gT25lLVdheVxuICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogNjAsIGJvdHRvbTogMzUsIGxlZnQ6IDYwLCBtaWRkbGU6IDIwIH07XG4gIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwieFwiO1xuICBAYmluZGFibGUgeV9hdHRyaWJ1dGUgPSBcInlcIjtcbiAgQGJpbmRhYmxlIHhfbGFiZWwgPSBcImRheXNcIjtcbiAgQGJpbmRhYmxlIHlfbGFiZWwgPSBcInlcIjtcbiAgQGJpbmRhYmxlIHJlZHJhdyA9IDA7XG5cbiAgLy8gVHdvLVdheVxuICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBicnVzaGluZztcblxuICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAvLyBBdXJlbGlhIHZhcmlhYmxlc1xuICBwcml2YXRlIGVsZW1lbnQ7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuXG4gIC8vIEQzIHZhcmlhYmxlc1xuICBwcml2YXRlIG1vdXNlX2V2ZW50O1xuICBwcml2YXRlIHN2ZztcbiAgcHJpdmF0ZSBsaW5lY2hhcnQ7XG4gIHByaXZhdGUgZm9jdXM7XG4gIHByaXZhdGUgeDtcbiAgcHJpdmF0ZSB5O1xuICBwcml2YXRlIGZvY3VzX3g7XG4gIHByaXZhdGUgZ2F1c3NfeDtcbiAgcHJpdmF0ZSBnYXVzc195O1xuICBwcml2YXRlIGdhdXNzX3NpZ21hO1xuICBwcml2YXRlIGdhdXNzX21heF9zaWdtYTtcbiAgcHJpdmF0ZSBncmFkaWVudENvbG9yO1xuICBwcml2YXRlIHZhbHVlbGluZTtcbiAgcHJpdmF0ZSBmb2N1c2xpbmU7XG4gIHByaXZhdGUgZm9jdXNfZGF0YTtcbiAgcHJpdmF0ZSBoaXN0b2dyYW07XG4gIHByaXZhdGUgYnJ1c2g7XG4gIHByaXZhdGUgY2VudGVyID0gMS4wO1xuICBwcml2YXRlIHdlaWdodCA9IDEuMDtcblxuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gIHByaXZhdGUgd2lkdGg7XG4gIHByaXZhdGUgaGVpZ2h0O1xuICBwcml2YXRlIHhfc2l6ZSA9IDkwMDtcbiAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG4gIHByaXZhdGUgbGNfd2lkdGggPSA1MDtcbiAgcHJpdmF0ZSBsY19oZWlnaHQgPSA1MDA7XG4gIHByaXZhdGUgZm9jdXNfd2lkdGggPSA1MDtcbiAgcHJpdmF0ZSBmb2N1c19oZWlnaHQgPSA1MDA7XG4gIHByaXZhdGUgZm9jdXNfb2Zmc2V0ID0gMTAwO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciBiaW5kaW5nIGF0dHJpYnV0ZXNcbiAgYXR0YWNoZWQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSBkYXRhIGFycmF5IGFuZCB3YXRjaCBmb3IgY2hhbmdlc1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoc3BsaWNlcyA9PiB0aGlzLmRhdGFNdXRhdGVkKHNwbGljZXMpKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gICAgdGhpcy54X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLnhfc2l6ZSAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcbiAgICB0aGlzLmxjX3dpZHRoID0gdGhpcy53aWR0aCAqIDAuODtcbiAgICB0aGlzLmZvY3VzX3dpZHRoID0gdGhpcy53aWR0aCAqIDAuMiAtIHRoaXMubWFyZ2luLmxlZnQ7XG5cbiAgICB0aGlzLmhlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuICAgIHRoaXMubGNfaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG4gICAgdGhpcy5mb2N1c19oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgIHRoaXMuZm9jdXNfb2Zmc2V0ID0gdGhpcy5sY193aWR0aCArIHRoaXMubWFyZ2luLm1pZGRsZSArIHRoaXMubWFyZ2luLmxlZnQ7XG5cbiAgICB0aGlzLmluaXRDaGFydCgpXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCJwYXRoLmZvY3VzbGluZVwiKS5yZW1vdmUoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG4gICAgICB0aGlzLmZvY3VzLnNlbGVjdEFsbChcIi5iYXJcIikucmVtb3ZlKClcbiAgICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwicGF0aC5mb2N1c2xpbmVcIikucmVtb3ZlKClcbiAgICB9XG4gIH1cblxuICByZWRyYXdDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy51cGRhdGVIaWdobGlnaHQoKTtcbiAgICB9XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICB9XG5cbiAgZ2V0R2F1c3NpYW4oKSB7XG4gICAgbGV0IGRhdGEgPSBbXTtcbiAgICBsZXQgcm5kID0gZDMucmFuZG9tVW5pZm9ybSgtNSwgNSk7XG5cbiAgICAvLyBsb29wIHRvIHBvcHVsYXRlIGRhdGEgYXJyYXkgd2l0aFxuICAgIC8vIHByb2JhYmlsaXR5IC0gcXVhbnRpbGUgcGFpcnNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDAwOyBpKyspIHtcbiAgICAgIGxldCBxID0gcm5kKCkgLy8gY2FsYyByYW5kb20gZHJhdyBmcm9tIHVuaWZvcm0gZGlzdFxuICAgICAgbGV0IHAgPSB0aGlzLmdhdXNzaWFuKHEsIHRoaXMuZ2F1c3NfeS5pbnZlcnQodGhpcy5jZW50ZXIpLCB0aGlzLmdhdXNzX3NpZ21hKHRoaXMud2VpZ2h0KSkgLy8gY2FsYyBwcm9iIG9mIHJhbmQgZHJhd1xuXG4gICAgICAvLyBTZXQgdmVyeSBsb3cgcHJvYmFiaWxpdHkgdG8gemVyb1xuICAgICAgaWYocCA8IDAuMDAwMSkgcCA9IDA7XG5cbiAgICAgIGxldCBlbCA9IHtcbiAgICAgICAgXCJ5XCI6IHEsXG4gICAgICAgIFwieFwiOiBwXG4gICAgICB9XG4gICAgICBkYXRhLnB1c2goZWwpXG4gICAgfTtcblxuICAgIHRoaXMuZ3JhZGllbnRDb2xvci5kb21haW4oWzAsIGQzLm1heChkYXRhLCB4ID0+IHhbXCJ4XCJdKV0pXG4gICAgLy8gbmVlZCB0byBzb3J0IGZvciBwbG90dGluZ1xuICAgIGRhdGEuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiAoYS55ID4gYi55KSA/IDEgOiAoKGIueSA+IGEueSkgPyAtMSA6IDApOyB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8vdGFrZW4gZnJvbSBKYXNvbiBEYXZpZXMgc2NpZW5jZSBsaWJyYXJ5XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbmRhdmllcy9zY2llbmNlLmpzL1xuICBnYXVzc2lhbih4LCBtZWFuLCBzaWdtYSkge1xuICAgIGxldCBnYXVzc2lhbkNvbnN0YW50ID0gMSAvIE1hdGguc3FydCgyICogTWF0aC5QSSk7XG5cbiAgICB4ID0gKHggLSBtZWFuKSAvIHNpZ21hO1xuICAgIGxldCBnID0gZ2F1c3NpYW5Db25zdGFudCAqIE1hdGguZXhwKC0uNSAqIHggKiB4KSAvIHNpZ21hO1xuXG4gICAgaWYgKGcgPCAwKSB7XG4gICAgICBnID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZztcbiAgfVxuXG4gIGluaXRDaGFydCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBDb21wbGV0ZSBkcmF3aW5nIGFyZWFcbiAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSk7XG5cbiAgICAvLyBMaW5lY2hhcnQgYXJlYVxuICAgIHRoaXMubGluZWNoYXJ0ID0gdGhpcy5zdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMubGNfd2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmxjX2hlaWdodClcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIiwgXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIilcbiAgICAgIC5vbihcImNsaWNrXCIsIChkKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRGaWx0ZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5mb2N1cyA9IHRoaXMuc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgIFwidHJhbnNsYXRlKFwiICsgdGhpcy5mb2N1c19vZmZzZXQgKyBcIiwgXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIilcblxuICAgIHRoaXMuZm9jdXNcbiAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMuZm9jdXNfd2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmZvY3VzX2hlaWdodClcbiAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcbiAgICAgIC5vbihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCBvdXQgPSBuZXcgTWFwKCk7XG4gICAgICAgIHNlbGYuY2VudGVyID0gc2VsZi55LmludmVydChkMy5tb3VzZSh0aGlzKVsxXSk7XG4gICAgICAgIHNlbGYud2VpZ2h0ID0gZDMubW91c2UodGhpcylbMF07XG4gICAgICAgIHNlbGYuY3JlYXRlR2F1c3MoKTtcblxuICAgICAgICBzZWxmLmRhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICBvdXQuc2V0KFxuICAgICAgICAgICAgZFtcImlkXCJdLFxuICAgICAgICAgICAgc2VsZi5ncmFkaWVudENvbG9yKHNlbGYuZ2F1c3NpYW4oc2VsZi5nYXVzc195LmludmVydChkLmRhdGFbZC5kYXRhLmxlbmd0aCAtIDFdW3NlbGYueV9hdHRyaWJ1dGVdKSwgc2VsZi5nYXVzc195LmludmVydChzZWxmLmNlbnRlciksIHNlbGYuZ2F1c3Nfc2lnbWEoc2VsZi53ZWlnaHQpKSlcbiAgICAgICAgICApXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5icnVzaGluZyA9IG91dDtcblxuICAgICAgICBzZWxmLnVwZGF0ZUhpZ2hsaWdodCgpO1xuXG4gICAgICAgIHNlbGYubW91c2VfZXZlbnQgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgbGV0IG91dCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHNlbGYuY2VudGVyID0gc2VsZi55LmludmVydChkMy5tb3VzZSh0aGlzKVsxXSk7XG5cbiAgICAgICAgICAgIHNlbGYud2VpZ2h0ID0gZDMubW91c2UodGhpcylbMF07XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZUdhdXNzKCk7XG5cbiAgICAgICAgICAgIHNlbGYuZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgICBvdXQuc2V0KFxuICAgICAgICAgICAgICAgIGRbXCJpZFwiXSxcbiAgICAgICAgICAgICAgICBzZWxmLmdyYWRpZW50Q29sb3Ioc2VsZi5nYXVzc2lhbihzZWxmLmdhdXNzX3kuaW52ZXJ0KGQuZGF0YVtkLmRhdGEubGVuZ3RoIC0gMV1bc2VsZi55X2F0dHJpYnV0ZV0pLCBzZWxmLmdhdXNzX3kuaW52ZXJ0KHNlbGYuY2VudGVyKSwgc2VsZi5nYXVzc19zaWdtYShzZWxmLndlaWdodCkpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzZWxmLmJydXNoaW5nID0gb3V0O1xuXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZUhpZ2hsaWdodCgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9uKFwibW91c2V1cFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICBzZWxmLm1vdXNlX2V2ZW50Lm9uKFwibW91c2Vtb3ZlXCIsIG51bGwpLm9uKFwibW91c2V1cFwiLCBudWxsKTtcbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5tb3ZlVG9Gcm9udCgpXG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHRoaXMueCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgdGhpcy5sY193aWR0aF0pO1xuICAgIHRoaXMueSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQsIDBdKTtcblxuICAgIHRoaXMuZm9jdXNfeCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgdGhpcy5mb2N1c193aWR0aF0pO1xuXG4gICAgdGhpcy5nYXVzc194ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgIHRoaXMuZ2F1c3NfeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWy01LCA1XSlcblxuICAgIHRoaXMuZ2F1c3Nfc2lnbWEgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoWzAuMDAxLCAzXSlcbiAgICAgIC5kb21haW4oWzAsIHRoaXMuZm9jdXNfd2lkdGhdKVxuXG4gICAgdGhpcy5ncmFkaWVudENvbG9yID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLCAxXSlcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAvLyB4IGF4aXMgbGFiZWxcbiAgICB0aGlzLmxpbmVjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIHRoaXMuaGVpZ2h0ICsgMjYpXG4gICAgICAuYXR0cihcInhcIiwgdGhpcy53aWR0aCAvIDIpXG4gICAgICAudGV4dCh0aGlzLnhfbGFiZWwpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmZvY3VzLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhBeGlzXCIpO1xuXG4gICAgLy8geCBheGlzIGxhYmVsXG4gICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIHRoaXMuaGVpZ2h0ICsgMjYpXG4gICAgICAuYXR0cihcInhcIiwgdGhpcy53aWR0aCAvIDIpXG4gICAgICAudGV4dChcImRheVwiKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAvLyB5IGF4aXMgbGFiZWxcbiAgICB0aGlzLmxpbmVjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgLnRleHQodGhpcy55X2xhYmVsKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHRoaXMuZm9jdXNfd2lkdGggKyBcIiwgMClcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc1wiKVxuXG4gICAgLy8geSBheGlzIGxhYmVsXG4gICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgLmF0dHIoXCJ4XCIsIHRoaXMuZm9jdXNfd2lkdGgpXG4gICAgICAudGV4dCgoZCkgPT4geyByZXR1cm4gdGhpcy55X2F0dHJpYnV0ZSB9KTtcblxuICAgIC8vIGRlZmluZSB0aGUgbGluZVxuICAgIHRoaXMudmFsdWVsaW5lID0gZDMubGluZSgpXG4gICAgICAueCgoZCkgPT4gdGhpcy54KGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgICAgLnkoKGQpID0+IHRoaXMueShkW3RoaXMueV9hdHRyaWJ1dGVdKSk7XG5cbiAgICB0aGlzLmZvY3VzbGluZSA9IGQzLmxpbmUoKVxuICAgICAgLngoKGQpID0+IHRoaXMuZm9jdXNfeCh0aGlzLmdhdXNzX3goZFtcInhcIl0pKSlcbiAgICAgIC55KChkKSA9PiB0aGlzLnkodGhpcy5nYXVzc195KGRbXCJ5XCJdKSkpO1xuXG4gICAgbGV0IHlfYXR0cmlidXRlID0gdGhpcy55X2F0dHJpYnV0ZVxuXG4gICAgLy8gVXBkYXRlIGF4aXNcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KSk7XG4gICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnkpKTtcblxuICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAuY2FsbChkMy5heGlzUmlnaHQodGhpcy55KSk7XG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy5mb2N1c194KS50aWNrcygyKSk7XG4gIH1cblxuICB1cGRhdGVIaWdobGlnaHQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwicGF0aC5saW5lXCIpXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZFtcImhpZ2hsaWdodFwiXVxuICAgICAgfSlcblxuICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwicmVjdC5iYXJcIilcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBmdW5jdGlvbihiKSB7XG4gICAgICAgIGxldCBvcGFjaXR5ID0gMDtcblxuICAgICAgICBzZWxmLmRhdGEuZm9yRWFjaCgoZDogYW55W10pID0+IHtcbiAgICAgICAgICBsZXQgdmFsdWUgPSBkW1wiZGF0YVwiXVtkW1wiZGF0YVwiXS5sZW5ndGggLSAxXVtzZWxmLnlfYXR0cmlidXRlXTtcblxuICAgICAgICAgIGlmKHZhbHVlID4gYi54MCAmJiB2YWx1ZSA8IGIueDEpIHtcbiAgICAgICAgICAgIG9wYWNpdHkgKz0gZFtcImhpZ2hsaWdodFwiXVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZihiLmxlbmd0aCA8IDEpIHJldHVybiAwO1xuXG4gICAgICAgIHJldHVybiBvcGFjaXR5IC8gYi5sZW5ndGhcbiAgICAgIH0pXG4gIH1cblxuICByZXNldEZpbHRlcigpIHtcbiAgICB0aGlzLmZvY3VzLnNlbGVjdEFsbChcInBhdGguZm9jdXNsaW5lXCIpLnJlbW92ZSgpO1xuICAgIHRoaXMuYnJ1c2hpbmcgPSBuZXcgTWFwKClcbiAgICB0aGlzLnVwZGF0ZUhpZ2hsaWdodCgpO1xuICB9XG5cbiAgY3JlYXRlR2F1c3MoKSB7XG4gICAgbGV0IGxpbmVfZGF0YSA9IHRoaXMuZ2V0R2F1c3NpYW4oKTtcbiAgICB0aGlzLmdhdXNzX3gucmFuZ2UodGhpcy5mb2N1c194LmRvbWFpbigpKS5kb21haW4oZDMuZXh0ZW50KGxpbmVfZGF0YSwgZCA9PiBkW1wieFwiXSkpXG5cbiAgICB0aGlzLmZvY3VzLnNlbGVjdEFsbChcInBhdGguZm9jdXNsaW5lXCIpLnJlbW92ZSgpO1xuICAgIGxldCBmb2N1c19saW5lID0gdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCJwYXRoLmZvY3VzbGluZVwiKVxuICAgICAgLmRhdGEoW2xpbmVfZGF0YV0pXG5cbiAgICAvLyBEaXN0cmlidXRpb24gbGluZVxuICAgIGZvY3VzX2xpbmUuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJmb2N1c2xpbmVcIilcbiAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4gdGhpcy5mb2N1c2xpbmUoZCkpXG4gICAgICAubW92ZVRvRnJvbnQoKTtcbiAgfVxuXG4gIHVwZGF0ZUdhdXNzKCkge1xuICAgIGxldCBsaW5lX2RhdGEgPSB0aGlzLmdldEdhdXNzaWFuKCk7XG5cbiAgICAvLyBVcGRhdGUgeCBheGlzIGRvbWFpblxuICAgIHRoaXMuZ2F1c3NfeC5yYW5nZSh0aGlzLmZvY3VzX3guZG9tYWluKCkpLmRvbWFpbihkMy5leHRlbnQobGluZV9kYXRhLCBkID0+IGRbXCJ4XCJdKSlcblxuICAgIC8vIFVwZGF0ZSBsaW5lXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCJwYXRoLmZvY3VzbGluZVwiKVxuICAgICAgLmRhdGEoW2xpbmVfZGF0YV0pXG4gICAgICAuYXR0cihcImRcIiwgKGQpID0+IHRoaXMuZm9jdXNsaW5lKGQpKVxuICAgICAgLm1vdmVUb0Zyb250KCk7XG4gIH1cblxuICB1cGRhdGVDaGFydCgpIHtcbiAgICAvLyBVcGRhdGUgZG9tYWluc1xuICAgIGxldCB4X21heCA9IGQzLm1heCh0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWF4PGFueSwgYW55PihhcnJheVtcImRhdGFcIl0sIChkKSA9PiBkW3RoaXMueF9hdHRyaWJ1dGVdKSlcbiAgICBsZXQgeV9tYXggPSBkMy5tYXgodGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1heDxhbnksIGFueT4oYXJyYXlbXCJkYXRhXCJdLCAoZCkgPT4gZFt0aGlzLnlfYXR0cmlidXRlXSkpXG4gICAgbGV0IHhfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5taW48YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgIGxldCB5X21pbiA9IGQzLm1pbih0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWluPGFueSwgYW55PihhcnJheVtcImRhdGFcIl0sIChkKSA9PiBkW3RoaXMueV9hdHRyaWJ1dGVdKSlcblxuICAgIHRoaXMuZm9jdXNfZGF0YSA9IDxhbnk+W107XG5cbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoZDogYW55W10pID0+IHtcbiAgICAgIHRoaXMuZm9jdXNfZGF0YS5wdXNoKGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aCAtIDFdKVxuICAgIH0pXG5cbiAgICB0aGlzLnguZG9tYWluKFt4X21pbiwgeF9tYXhdKTtcbiAgICB0aGlzLnkuZG9tYWluKFt5X21pbiwgeV9tYXhdKTtcblxuICAgIHRoaXMuZ2F1c3NfeS5yYW5nZSh0aGlzLnkuZG9tYWluKCkpXG5cbiAgICBsZXQgYmlucyA9IGQzLmhpc3RvZ3JhbSgpXG4gICAgICAudmFsdWUoKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pXG4gICAgICAuZG9tYWluKHRoaXMueS5kb21haW4oKSlcbiAgICAgIC50aHJlc2hvbGRzKGQzLnJhbmdlKHlfbWluLCB5X21heCwgKHlfbWF4IC0geV9taW4pIC8gMjApKVxuICAgICAgKHRoaXMuZm9jdXNfZGF0YSk7XG5cbiAgICB0aGlzLmZvY3VzX3guZG9tYWluKFswLCBkMy5tYXgoYmlucywgKGQ6IGFueVtdKSA9PiBkLmxlbmd0aCldKTtcblxuICAgIC8vIFNlbGVjdCBjaGFydFxuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZVwiKS5yZW1vdmUoKTtcbiAgICBsZXQgY2hhcnQgPSB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIilcbiAgICAgIC5kYXRhKHRoaXMuZGF0YSlcblxuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIuYmFyXCIpLnJlbW92ZSgpO1xuICAgIGxldCBmb2N1c19jaGFydCA9IHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwicmVjdC5iYXJzXCIpXG4gICAgICAuZGF0YShiaW5zKVxuXG4gICAgLy8gVXBkYXRlIGF4aXNcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KSk7XG4gICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnkpKTtcblxuICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAuY2FsbChkMy5heGlzUmlnaHQodGhpcy55KSk7XG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy5mb2N1c194KS50aWNrcygyKSk7XG5cbiAgICAvLyBMaW5lY2hhcnRcbiAgICBjaGFydC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBjaGFydC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgIC8vIC5jbGFzc2VkKFwiaGlnaGxpZ2h0XCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgIC8vICAgaWYgKGRbXCJoaWdobGlnaHRcIl0gPT0gMSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgLy8gICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAvLyB9KVxuICAgICAgLy8gLmNsYXNzZWQoXCJiYWNrZ3JvdW5kXCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgIC8vICAgaWYgKGRbXCJoaWdobGlnaHRcIl0gPT0gMikgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgLy8gICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAvLyB9KVxuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB0aGlzLnZhbHVlbGluZShkW1wiZGF0YVwiXSkpO1xuXG4gICAgLy8gQmFyY2hhcnRcbiAgICAvLyBSZW1vdmUgYmFyc1xuICAgIGZvY3VzX2NoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIC8vIEFkZCBiYXJzXG4gICAgZm9jdXNfY2hhcnQuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoZCkgPT4ge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMueShkLngxKSArIFwiKVwiO1xyXG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAoZCkgPT4geyByZXR1cm4gdGhpcy5mb2N1c194KGQubGVuZ3RoKTsgfSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnkoZC54MCkgLSB0aGlzLnkoZC54MSkgLSAxO1xuICAgICAgfSlcbiAgICAgIC5tb3ZlVG9CYWNrKCk7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/line-charts',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineCharts = (function () {
        function LineCharts(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 40, bottom: 35, left: 40, middle: 20, y: 35 };
            this.x_attribute = "x";
            this.x_label = "days";
            this.redraw = 0;
            this.reset = 0;
            this.data = [];
            this.initialized = false;
            this.y = new Map();
            this.focus_x = new Map();
            this.gauss_y = new Map();
            this.valueline = new Map();
            this.focusline = new Map();
            this.filters = new Map();
            this.center = 1.0;
            this.weight = 1.0;
            this.x_size = 900;
            this.y_size = 500;
            this.lc_width = 50;
            this.lc_height = 500;
            this.focus_width = 50;
            this.focus_height = 500;
            this.focus_offset = 100;
            this.element = element;
        }
        LineCharts.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.lc_width = this.width * 0.8;
            this.focus_width = this.width * 0.2 - this.margin.left;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
        };
        LineCharts.prototype.dataMutated = function (splices) {
            if (this.data.length > 1) {
                if (!this.initialized)
                    this.initChart();
                this.updateChart();
                this.svg.selectAll("path.focusline").remove();
            }
            else {
                this.svg.selectAll(".line").remove();
                this.svg.selectAll(".bar").remove();
                this.svg.selectAll("path.focusline").remove();
            }
        };
        LineCharts.prototype.redrawChanged = function () {
            var _this = this;
            if (this.data.length > 1) {
                this.dimensions.forEach(function (dim) {
                    _this.updateHighlight(dim);
                });
            }
        };
        LineCharts.prototype.resetChanged = function () {
            if (this.initialized) {
                this.svg.remove();
                this.initialized = false;
            }
        };
        LineCharts.prototype.unbind = function () {
            this.subscription.dispose();
        };
        LineCharts.prototype.getGaussian = function (dim) {
            var data = [];
            var rnd = d3.randomUniform(-5, 5);
            for (var i = 0; i < 10000; i++) {
                var q = rnd();
                var p = this.gaussian(q, this.gauss_y.get(dim).invert(this.center), this.gauss_sigma(this.weight));
                if (p < 0.0001)
                    p = 0;
                var el = {
                    "y": q,
                    "x": p
                };
                data.push(el);
            }
            ;
            this.gradientColor.domain([0, d3.max(data, function (x) { return x["x"]; })]);
            data.sort(function (a, b) { return (a.y > b.y) ? 1 : ((b.y > a.y) ? -1 : 0); });
            return data;
        };
        ;
        LineCharts.prototype.gaussian = function (x, mean, sigma) {
            var gaussianConstant = 1 / Math.sqrt(2 * Math.PI);
            x = (x - mean) / sigma;
            var g = gaussianConstant * Math.exp(-.5 * x * x) / sigma;
            if (g < 0) {
                g = 0;
            }
            return g;
        };
        LineCharts.prototype.resetFilter = function (dim) {
            this.charts.get(dim).focus.selectAll("path.focusline").remove();
            var out = new Map();
            this.filters.set(dim, new Map());
            this.filters.forEach(function (v, k) {
                if (v.size > 0) {
                    v.forEach(function (iv, ik) {
                        if (out.has(ik)) {
                            var value = out.get(ik);
                            out.set(ik, (value + iv) / 2);
                        }
                        else {
                            out.set(ik, iv);
                        }
                    });
                }
            });
            this.brushing = out;
        };
        LineCharts.prototype.resolve_brushing = function (dim, new_filter) {
            var _this = this;
            var out = new Map();
            this.filters.set(dim, new_filter);
            new_filter.forEach(function (v, k) {
                var temp = 0;
                var counter = 0;
                _this.filters.forEach(function (iv, ik) {
                    if (iv.size > 0) {
                        temp = temp + iv.get(k);
                        counter++;
                    }
                });
                temp = temp / counter;
                out.set(k, temp);
            });
            this.brushing = out;
        };
        LineCharts.prototype.initChart = function () {
            var _this = this;
            var self = this;
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.dimensions = d3.keys(this.data[0]["data"][0]).filter(function (d) {
                return d != _this.x_attribute;
            });
            this.lc_height = (this.y_size - this.margin.top - this.margin.bottom - ((this.dimensions.length - 1) * this.margin.y)) / this.dimensions.length;
            this.focus_height = this.lc_height;
            this.focus_offset = this.lc_width + this.margin.middle + this.margin.left;
            this.charts = new Map();
            var margin_iterator = 0;
            this.dimensions.map(function (dim) {
                var linechart = _this.svg
                    .append("g")
                    .attr("width", _this.lc_width)
                    .attr("height", _this.lc_height)
                    .attr("transform", "translate(" + _this.margin.left + ", " + (_this.margin.top + (_this.focus_height + _this.margin.y) * margin_iterator) + ")")
                    .on("click", function (d) {
                    _this.resetFilter(dim);
                });
                var focus = _this.svg
                    .append("g")
                    .attr("transform", "translate(" + _this.focus_offset + ", " + (_this.margin.top + (_this.focus_height + _this.margin.y) * margin_iterator) + ")");
                margin_iterator++;
                focus
                    .append("rect")
                    .attr("width", _this.focus_width)
                    .attr("height", _this.focus_height)
                    .style("opacity", 0)
                    .on("mousedown", function (d) {
                    self.center = self.y.get(dim).invert(d3.mouse(this)[1]);
                    self.weight = d3.mouse(this)[0];
                    self.createGauss(dim);
                    var new_filter = new Map();
                    self.data.forEach(function (d) {
                        new_filter.set(d["id"], self.gradientColor(self.gaussian(self.gauss_y.get(dim).invert(d.data[d.data.length - 1][dim]), self.gauss_y.get(dim).invert(self.center), self.gauss_sigma(self.weight))));
                    });
                    self.resolve_brushing(dim, new_filter);
                    self.mouse_event = d3.select(this)
                        .on("mousemove", function (d) {
                        self.center = self.y.get(dim).invert(d3.mouse(this)[1]);
                        self.weight = d3.mouse(this)[0];
                        self.updateGauss(dim);
                        var new_filter = new Map();
                        self.data.forEach(function (d) {
                            new_filter.set(d["id"], self.gradientColor(self.gaussian(self.gauss_y.get(dim).invert(d.data[d.data.length - 1][dim]), self.gauss_y.get(dim).invert(self.center), self.gauss_sigma(self.weight))));
                        });
                        self.resolve_brushing(dim, new_filter);
                    })
                        .on("mouseup", function (d) {
                        self.mouse_event.on("mousemove", null).on("mouseup", null);
                    });
                })
                    .moveToFront();
                linechart.append("g")
                    .attr("transform", "translate(0," + _this.lc_height + ")")
                    .attr("class", "xAxis");
                linechart.append("text")
                    .style("text-anchor", "middle")
                    .attr("y", _this.lc_height + 26)
                    .attr("x", _this.lc_width / 2)
                    .text(_this.x_attribute);
                focus.append("g")
                    .attr("transform", "translate(0," + _this.lc_height + ")")
                    .attr("class", "xAxis");
                linechart.append("g")
                    .attr("class", "yAxis");
                linechart.append("text")
                    .style("text-anchor", "middle")
                    .attr("y", -4)
                    .text(dim);
                focus.append("g")
                    .attr("transform", "translate(" + _this.focus_width + ", 0)")
                    .attr("class", "yAxis");
                focus.append("text")
                    .style("text-anchor", "middle")
                    .attr("y", -4)
                    .attr("x", _this.focus_width)
                    .text(dim);
                _this.x = d3.scaleLinear()
                    .range([0, _this.lc_width]);
                _this.gauss_x = d3.scaleLinear();
                _this.gauss_sigma = d3.scaleLinear()
                    .range([0.001, 3])
                    .domain([0, _this.focus_width]);
                _this.gradientColor = d3.scaleLinear()
                    .range([0, 1]);
                var y = d3.scaleLinear()
                    .range([_this.lc_height, 0]);
                _this.y.set(dim, y);
                var focus_x = d3.scaleLinear()
                    .range([0, _this.focus_width]);
                _this.focus_x.set(dim, focus_x);
                var gauss_y = d3.scaleLinear()
                    .domain([-5, 5]);
                _this.gauss_y.set(dim, gauss_y);
                var valueline = d3.line()
                    .x(function (d) { return _this.x(d[_this.x_attribute]); })
                    .y(function (d) { return _this.y.get(dim)(d[dim]); });
                _this.valueline.set(dim, valueline);
                var focusline = d3.line()
                    .x(function (d) { return _this.focus_x.get(dim)(_this.gauss_x(d["x"])); })
                    .y(function (d) { return _this.y.get(dim)(_this.gauss_y.get(dim)(d["y"])); });
                _this.focusline.set(dim, focusline);
                linechart.selectAll(".xAxis")
                    .call(d3.axisBottom(_this.x));
                linechart.selectAll(".yAxis")
                    .call(d3.axisLeft(_this.y.get(dim)));
                focus.selectAll(".yAxis")
                    .call(d3.axisRight(_this.y.get(dim)));
                focus.selectAll(".xAxis")
                    .call(d3.axisBottom(_this.focus_x.get(dim)).ticks(2));
                _this.charts.set(dim, { linechart: linechart, focus: focus });
                _this.filters.set(dim, new Map());
            });
            this.initialized = true;
        };
        LineCharts.prototype.updateHighlight = function (dim) {
            var self = this;
            this.charts.get(dim).linechart.selectAll("path.line")
                .attr("opacity", function (d) {
                return d["highlight"];
            });
            this.charts.get(dim).focus.selectAll("rect.bar")
                .attr("opacity", function (b) {
                var opacity = 0;
                self.data.forEach(function (d) {
                    var value = d["data"][d["data"].length - 1][dim];
                    if (value > b.x0 && value < b.x1) {
                        opacity += d["highlight"];
                    }
                });
                if (b.length < 1)
                    return 0;
                return opacity / b.length;
            });
        };
        LineCharts.prototype.createGauss = function (dim) {
            var _this = this;
            var line_data = this.getGaussian(dim);
            this.gauss_x.range(this.focus_x.get(dim).domain()).domain(d3.extent(line_data, function (d) { return d["x"]; }));
            this.charts.get(dim).focus.selectAll("path.focusline").remove();
            var focus_line = this.charts.get(dim).focus.selectAll("path.focusline")
                .data([line_data]);
            focus_line.enter()
                .append("path")
                .attr("class", "focusline")
                .attr("d", function (d) { _this.focusline.get(dim)(d); })
                .moveToFront();
        };
        LineCharts.prototype.updateGauss = function (dim) {
            var _this = this;
            var line_data = this.getGaussian(dim);
            this.gauss_x.range(this.focus_x.get(dim).domain()).domain(d3.extent(line_data, function (d) { return d["x"]; }));
            this.charts.get(dim).focus.selectAll("path.focusline")
                .data([line_data])
                .attr("d", function (d) { return _this.focusline.get(dim)(d); })
                .moveToFront();
        };
        LineCharts.prototype.updateChart = function () {
            var _this = this;
            var x_max = d3.max(this.data, function (array) { return d3.max(array["data"], function (d) { return d[_this.x_attribute]; }); });
            var x_min = d3.min(this.data, function (array) { return d3.min(array["data"], function (d) { return d[_this.x_attribute]; }); });
            this.x.domain([x_min, x_max]);
            this.dimensions.map(function (dim) {
                var y_max = d3.max(_this.data, function (array) { return d3.max(array["data"], function (d) { return d[dim]; }); });
                var y_min = d3.min(_this.data, function (array) { return d3.min(array["data"], function (d) { return d[dim]; }); });
                var focus_data = [];
                _this.data.forEach(function (d) {
                    focus_data.push(d["data"][d["data"].length - 1][dim]);
                });
                _this.y.get(dim).domain([y_min, y_max]);
                _this.gauss_y.get(dim).range(_this.y.get(dim).domain());
                var bins = d3.histogram()
                    .domain(_this.y.get(dim).domain())
                    .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 20))(focus_data);
                _this.focus_x.get(dim).domain([0, d3.max(bins, function (d) { return d.length; })]);
                _this.charts.get(dim).linechart.selectAll("path.line").remove();
                var chart = _this.charts.get(dim).linechart.selectAll("path.line")
                    .data(_this.data);
                _this.charts.get(dim).focus.selectAll(".bar").remove();
                var focus_chart = _this.charts.get(dim).focus.selectAll("rect.bars")
                    .data(bins);
                _this.charts.get(dim).linechart.selectAll(".xAxis")
                    .call(d3.axisBottom(_this.x));
                _this.charts.get(dim).linechart.selectAll(".yAxis")
                    .call(d3.axisLeft(_this.y.get(dim)));
                _this.charts.get(dim).focus.selectAll(".yAxis")
                    .call(d3.axisRight(_this.y.get(dim)));
                _this.charts.get(dim).focus.selectAll(".xAxis")
                    .call(d3.axisBottom(_this.focus_x.get(dim)).ticks(2));
                chart.exit().remove();
                chart.enter()
                    .append("path")
                    .attr("class", "line")
                    .attr("d", function (d) { return _this.valueline.get(dim)(d["data"]); });
                focus_chart.exit().remove();
                focus_chart.enter().append("rect")
                    .attr("class", "bar")
                    .attr("transform", function (d) {
                    return "translate(0," + _this.y.get(dim)(d.x1) + ")";
                })
                    .attr("width", function (d) {
                    return _this.focus_x.get(dim)(d.length);
                })
                    .attr("height", function (d) {
                    return _this.y.get(dim)(d.x0) - _this.y.get(dim)(d.x1) - 1;
                })
                    .moveToBack();
            });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineCharts.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineCharts.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineCharts.prototype, "x_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineCharts.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineCharts.prototype, "reset", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], LineCharts.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineCharts.prototype, "data", void 0);
        LineCharts = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], LineCharts);
        return LineCharts;
    }());
    exports.LineCharts = LineCharts;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFBQyxDQUFDLENBQUM7cUJBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDO29CQUNoQixNQUFNLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNELENBQUMsQ0FBQztxQkFDRCxVQUFVLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUF2Z0JTO1lBQVQsNEJBQVE7O2tEQUEwRTtRQUN6RTtZQUFULDRCQUFROzt1REFBbUI7UUFDbEI7WUFBVCw0QkFBUTs7bURBQWtCO1FBQ2pCO1lBQVQsNEJBQVE7O2tEQUFZO1FBQ1g7WUFBVCw0QkFBUTs7aURBQVc7UUFHa0M7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O29EQUFVO1FBR3JEO1lBQVQsNEJBQVE7O2dEQUFXO1FBWlQsVUFBVTtZQUZ0QiwwQkFBTSxDQUFDLE9BQU8sRUFBRSxpQ0FBYSxDQUFDO1lBQzlCLDBCQUFNLEVBQUU7O1dBQ0ksVUFBVSxDQTBnQnRCO1FBQUQsaUJBQUM7S0ExZ0JELEFBMGdCQyxJQUFBO0lBMWdCWSxnQ0FBVSIsImZpbGUiOiJjaGFydHMvbGluZS1jaGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IGluamVjdCwgbm9WaWV3LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIEJpbmRpbmdFbmdpbmUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbkBub1ZpZXcoKVxuZXhwb3J0IGNsYXNzIExpbmVDaGFydHMge1xuICAvLyBPbmUtV2F5XG4gIEBiaW5kYWJsZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA0MCwgYm90dG9tOiAzNSwgbGVmdDogNDAsIG1pZGRsZTogMjAsIHk6IDM1IH07XG4gIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwieFwiO1xuICBAYmluZGFibGUgeF9sYWJlbCA9IFwiZGF5c1wiO1xuICBAYmluZGFibGUgcmVkcmF3ID0gMDtcbiAgQGJpbmRhYmxlIHJlc2V0ID0gMDtcblxuICAvLyBUd28tV2F5XG4gIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIGJydXNoaW5nO1xuXG4gIC8vIE9ic2VydmVkIFZhcmlhYmxlc1xuICBAYmluZGFibGUgZGF0YSA9IFtdO1xuXG4gIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gIHByaXZhdGUgZWxlbWVudDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG5cbiAgLy8gRDMgdmFyaWFibGVzXG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBtb3VzZV9ldmVudDtcbiAgcHJpdmF0ZSBzdmc7XG4gIHByaXZhdGUgZGltZW5zaW9ucztcbiAgcHJpdmF0ZSBjaGFydHM7XG4gIHByaXZhdGUgeDtcbiAgcHJpdmF0ZSB5ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIGZvY3VzX3ggPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgZ2F1c3NfeDtcbiAgcHJpdmF0ZSBnYXVzc195ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIGdhdXNzX3NpZ21hO1xuICBwcml2YXRlIGdhdXNzX21heF9zaWdtYTtcbiAgcHJpdmF0ZSBncmFkaWVudENvbG9yO1xuICBwcml2YXRlIHZhbHVlbGluZSA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSBmb2N1c2xpbmUgPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgZmlsdGVycyA9IG5ldyBNYXAoKVxuICBwcml2YXRlIGZvY3VzX2RhdGE7XG4gIHByaXZhdGUgaGlzdG9ncmFtO1xuICBwcml2YXRlIGJydXNoO1xuICBwcml2YXRlIGNlbnRlciA9IDEuMDtcbiAgcHJpdmF0ZSB3ZWlnaHQgPSAxLjA7XG5cbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICBwcml2YXRlIHdpZHRoO1xuICBwcml2YXRlIGhlaWdodDtcbiAgcHJpdmF0ZSB4X3NpemUgPSA5MDA7XG4gIHByaXZhdGUgeV9zaXplID0gNTAwO1xuICBwcml2YXRlIGxjX3dpZHRoID0gNTA7XG4gIHByaXZhdGUgbGNfaGVpZ2h0ID0gNTAwO1xuICBwcml2YXRlIGZvY3VzX3dpZHRoID0gNTA7XG4gIHByaXZhdGUgZm9jdXNfaGVpZ2h0ID0gNTAwO1xuICBwcml2YXRlIGZvY3VzX29mZnNldCA9IDEwMDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwcml2YXRlIGJpbmRpbmdFbmdpbmUpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYmluZGluZyBhdHRyaWJ1dGVzXG4gIGF0dGFjaGVkKCkge1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIC8vIHN1YnNjcmliZSB0byB0aGUgZGF0YSBhcnJheSBhbmQgd2F0Y2ggZm9yIGNoYW5nZXNcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lXG4gICAgICAgIC5jb2xsZWN0aW9uT2JzZXJ2ZXIodGhpcy5kYXRhKVxuICAgICAgICAuc3Vic2NyaWJlKHNwbGljZXMgPT4gdGhpcy5kYXRhTXV0YXRlZChzcGxpY2VzKSk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy55X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgdGhpcy5sY193aWR0aCA9IHRoaXMud2lkdGggKiAwLjg7XG4gICAgdGhpcy5mb2N1c193aWR0aCA9IHRoaXMud2lkdGggKiAwLjIgLSB0aGlzLm1hcmdpbi5sZWZ0O1xuXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICBkYXRhTXV0YXRlZChzcGxpY2VzKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICBpZighdGhpcy5pbml0aWFsaXplZCkgdGhpcy5pbml0Q2hhcnQoKVxuXG4gICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCJwYXRoLmZvY3VzbGluZVwiKS5yZW1vdmUoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG4gICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIuYmFyXCIpLnJlbW92ZSgpXG4gICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCJwYXRoLmZvY3VzbGluZVwiKS5yZW1vdmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZHJhd0NoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLmRpbWVuc2lvbnMuZm9yRWFjaCgoZGltKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlSGlnaGxpZ2h0KGRpbSk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0Q2hhbmdlZCgpIHtcbiAgICBpZih0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLnN2Zy5yZW1vdmUoKVxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gIH1cblxuICBnZXRHYXVzc2lhbihkaW0pIHtcbiAgICBsZXQgZGF0YSA9IFtdO1xuICAgIGxldCBybmQgPSBkMy5yYW5kb21Vbmlmb3JtKC01LCA1KTtcblxuICAgIC8vIGxvb3AgdG8gcG9wdWxhdGUgZGF0YSBhcnJheSB3aXRoXG4gICAgLy8gcHJvYmFiaWxpdHkgLSBxdWFudGlsZSBwYWlyc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDA7IGkrKykge1xuICAgICAgbGV0IHEgPSBybmQoKSAvLyBjYWxjIHJhbmRvbSBkcmF3IGZyb20gdW5pZm9ybSBkaXN0XG4gICAgICBsZXQgcCA9IHRoaXMuZ2F1c3NpYW4ocSwgdGhpcy5nYXVzc195LmdldChkaW0pLmludmVydCh0aGlzLmNlbnRlciksIHRoaXMuZ2F1c3Nfc2lnbWEodGhpcy53ZWlnaHQpKSAvLyBjYWxjIHByb2Igb2YgcmFuZCBkcmF3XG5cbiAgICAgIC8vIFNldCB2ZXJ5IGxvdyBwcm9iYWJpbGl0eSB0byB6ZXJvXG4gICAgICBpZihwIDwgMC4wMDAxKSBwID0gMDtcblxuICAgICAgbGV0IGVsID0ge1xuICAgICAgICBcInlcIjogcSxcbiAgICAgICAgXCJ4XCI6IHBcbiAgICAgIH1cbiAgICAgIGRhdGEucHVzaChlbClcbiAgICB9O1xuXG4gICAgdGhpcy5ncmFkaWVudENvbG9yLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIHggPT4geFtcInhcIl0pXSlcbiAgICAvLyBuZWVkIHRvIHNvcnQgZm9yIHBsb3R0aW5nXG4gICAgZGF0YS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIChhLnkgPiBiLnkpID8gMSA6ICgoYi55ID4gYS55KSA/IC0xIDogMCk7IH0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLy90YWtlbiBmcm9tIEphc29uIERhdmllcyBzY2llbmNlIGxpYnJhcnlcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2phc29uZGF2aWVzL3NjaWVuY2UuanMvXG4gIGdhdXNzaWFuKHgsIG1lYW4sIHNpZ21hKSB7XG4gICAgbGV0IGdhdXNzaWFuQ29uc3RhbnQgPSAxIC8gTWF0aC5zcXJ0KDIgKiBNYXRoLlBJKTtcblxuICAgIHggPSAoeCAtIG1lYW4pIC8gc2lnbWE7XG4gICAgbGV0IGcgPSBnYXVzc2lhbkNvbnN0YW50ICogTWF0aC5leHAoLS41ICogeCAqIHgpIC8gc2lnbWE7XG5cbiAgICBpZiAoZyA8IDApIHtcbiAgICAgIGcgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBnO1xuICB9XG5cbiAgcmVzZXRGaWx0ZXIoZGltKSB7XG4gICAgdGhpcy5jaGFydHMuZ2V0KGRpbSkuZm9jdXMuc2VsZWN0QWxsKFwicGF0aC5mb2N1c2xpbmVcIikucmVtb3ZlKCk7XG4gICAgbGV0IG91dCA9IG5ldyBNYXAoKVxuICAgIHRoaXMuZmlsdGVycy5zZXQoZGltLCBuZXcgTWFwKCkpXG5cbiAgICAvLyBVcGRhdGUgYXZlcmFnZSBmaWx0ZXJcbiAgICB0aGlzLmZpbHRlcnMuZm9yRWFjaCgodiwgaykgPT4ge1xuICAgICAgaWYodi5zaXplID4gMCkge1xuICAgICAgICB2LmZvckVhY2goKGl2LCBpaykgPT4ge1xuICAgICAgICAgIGlmKG91dC5oYXMoaWspKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBvdXQuZ2V0KGlrKVxuXG4gICAgICAgICAgICBvdXQuc2V0KGlrLCAodmFsdWUgKyBpdikvMilcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvdXQuc2V0KGlrLCBpdilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYnJ1c2hpbmcgPSBvdXQ7XG4gIH1cblxuICByZXNvbHZlX2JydXNoaW5nKGRpbSwgbmV3X2ZpbHRlcikge1xuICAgIGxldCBvdXQgPSBuZXcgTWFwKClcblxuICAgIHRoaXMuZmlsdGVycy5zZXQoZGltLCBuZXdfZmlsdGVyKVxuXG4gICAgLy8gVXBkYXRlIGF2ZXJhZ2UgZmlsdGVyXG4gICAgbmV3X2ZpbHRlci5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gICAgICBsZXQgdGVtcCA9IDA7XG4gICAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICAgIHRoaXMuZmlsdGVycy5mb3JFYWNoKChpdiwgaWspID0+IHtcbiAgICAgICAgaWYgKGl2LnNpemUgPiAwKSB7XG4gICAgICAgICAgdGVtcCA9IHRlbXAgKyBpdi5nZXQoayk7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0ZW1wID0gdGVtcCAvIGNvdW50ZXI7XG5cbiAgICAgIG91dC5zZXQoaywgdGVtcClcbiAgICB9KVxuXG4gICAgdGhpcy5icnVzaGluZyA9IG91dDtcbiAgfVxuXG4gIGluaXRDaGFydCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBDb21wbGV0ZSBkcmF3aW5nIGFyZWFcbiAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSk7XG5cbiAgICAvLyBHZXQgeSB2YWx1ZXNcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSBkMy5rZXlzKHRoaXMuZGF0YVswXVtcImRhdGFcIl1bMF0pLmZpbHRlcigoZCkgPT4ge1xuICAgICAgcmV0dXJuIGQgIT0gdGhpcy54X2F0dHJpYnV0ZVxuICAgIH0pO1xuXG4gICAgLy8gU2V0IGhlaWdodCB2YWx1ZVxuICAgIHRoaXMubGNfaGVpZ2h0ID0gKHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tIC0gKCh0aGlzLmRpbWVuc2lvbnMubGVuZ3RoLTEpICogdGhpcy5tYXJnaW4ueSkpL3RoaXMuZGltZW5zaW9ucy5sZW5ndGg7XG4gICAgdGhpcy5mb2N1c19oZWlnaHQgPSB0aGlzLmxjX2hlaWdodFxuXG4gICAgdGhpcy5mb2N1c19vZmZzZXQgPSB0aGlzLmxjX3dpZHRoICsgdGhpcy5tYXJnaW4ubWlkZGxlICsgdGhpcy5tYXJnaW4ubGVmdDtcblxuICAgIC8vIFJlc2V0IGNoYXJ0cyBtYXBcbiAgICB0aGlzLmNoYXJ0cyA9IG5ldyBNYXAoKTtcblxuICAgIC8vIENyZWF0ZSBpbml0aWFsIGNoYXJ0IGFyZWFzXG4gICAgbGV0IG1hcmdpbl9pdGVyYXRvciA9IDA7XG4gICAgdGhpcy5kaW1lbnNpb25zLm1hcCgoZGltKSA9PiB7XG4gICAgICAvLyBMaW5lY2hhcnQgYXJlYVxuICAgICAgbGV0IGxpbmVjaGFydCA9IHRoaXMuc3ZnXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy5sY193aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5sY19oZWlnaHQpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICAgIFwidHJhbnNsYXRlKFwiICsgdGhpcy5tYXJnaW4ubGVmdCArIFwiLCBcIiArICh0aGlzLm1hcmdpbi50b3AgKyAodGhpcy5mb2N1c19oZWlnaHQgKyB0aGlzLm1hcmdpbi55KSAqIG1hcmdpbl9pdGVyYXRvcikgKyBcIilcIilcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgKGQpID0+IHtcbiAgICAgICAgICB0aGlzLnJlc2V0RmlsdGVyKGRpbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsZXQgZm9jdXMgPSB0aGlzLnN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMuZm9jdXNfb2Zmc2V0ICsgXCIsIFwiICsgKHRoaXMubWFyZ2luLnRvcCArICh0aGlzLmZvY3VzX2hlaWdodCArIHRoaXMubWFyZ2luLnkpICogbWFyZ2luX2l0ZXJhdG9yKSArIFwiKVwiKVxuXG4gICAgICBtYXJnaW5faXRlcmF0b3IrKztcblxuICAgICAgZm9jdXNcbiAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLmZvY3VzX3dpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmZvY3VzX2hlaWdodClcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuICAgICAgICAub24oXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHNlbGYuY2VudGVyID0gc2VsZi55LmdldChkaW0pLmludmVydChkMy5tb3VzZSh0aGlzKVsxXSk7XG4gICAgICAgICAgc2VsZi53ZWlnaHQgPSBkMy5tb3VzZSh0aGlzKVswXTtcbiAgICAgICAgICBzZWxmLmNyZWF0ZUdhdXNzKGRpbSk7XG5cbiAgICAgICAgICBsZXQgbmV3X2ZpbHRlciA9IG5ldyBNYXAoKVxuICAgICAgICAgIHNlbGYuZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgbmV3X2ZpbHRlci5zZXQoXG4gICAgICAgICAgICAgIGRbXCJpZFwiXSxcbiAgICAgICAgICAgICAgc2VsZi5ncmFkaWVudENvbG9yKHNlbGYuZ2F1c3NpYW4oc2VsZi5nYXVzc195LmdldChkaW0pLmludmVydChkLmRhdGFbZC5kYXRhLmxlbmd0aCAtIDFdW2RpbV0pLCBzZWxmLmdhdXNzX3kuZ2V0KGRpbSkuaW52ZXJ0KHNlbGYuY2VudGVyKSwgc2VsZi5nYXVzc19zaWdtYShzZWxmLndlaWdodCkpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzZWxmLnJlc29sdmVfYnJ1c2hpbmcoZGltLCBuZXdfZmlsdGVyKTtcblxuICAgICAgICAgIHNlbGYubW91c2VfZXZlbnQgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHNlbGYuY2VudGVyID0gc2VsZi55LmdldChkaW0pLmludmVydChkMy5tb3VzZSh0aGlzKVsxXSk7XG5cbiAgICAgICAgICAgICAgc2VsZi53ZWlnaHQgPSBkMy5tb3VzZSh0aGlzKVswXTtcbiAgICAgICAgICAgICAgc2VsZi51cGRhdGVHYXVzcyhkaW0pO1xuXG4gICAgICAgICAgICAgIGxldCBuZXdfZmlsdGVyID0gbmV3IE1hcCgpXG5cbiAgICAgICAgICAgICAgc2VsZi5kYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICAgICAgbmV3X2ZpbHRlci5zZXQoXG4gICAgICAgICAgICAgICAgICBkW1wiaWRcIl0sXG4gICAgICAgICAgICAgICAgICBzZWxmLmdyYWRpZW50Q29sb3Ioc2VsZi5nYXVzc2lhbihzZWxmLmdhdXNzX3kuZ2V0KGRpbSkuaW52ZXJ0KGQuZGF0YVtkLmRhdGEubGVuZ3RoIC0gMV1bZGltXSksIHNlbGYuZ2F1c3NfeS5nZXQoZGltKS5pbnZlcnQoc2VsZi5jZW50ZXIpLCBzZWxmLmdhdXNzX3NpZ21hKHNlbGYud2VpZ2h0KSkpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIHNlbGYucmVzb2x2ZV9icnVzaGluZyhkaW0sIG5ld19maWx0ZXIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNldXBcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICBzZWxmLm1vdXNlX2V2ZW50Lm9uKFwibW91c2Vtb3ZlXCIsIG51bGwpLm9uKFwibW91c2V1cFwiLCBudWxsKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5tb3ZlVG9Gcm9udCgpXG5cbiAgICAgICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICAgICAgbGluZWNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgdGhpcy5sY19oZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAgICAgLy8geCBheGlzIGxhYmVsXG4gICAgICAgIGxpbmVjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAuYXR0cihcInlcIiwgdGhpcy5sY19oZWlnaHQgKyAyNilcbiAgICAgICAgICAuYXR0cihcInhcIiwgdGhpcy5sY193aWR0aCAvIDIpXG4gICAgICAgICAgLnRleHQodGhpcy54X2F0dHJpYnV0ZSk7XG5cbiAgICAgICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICAgICAgZm9jdXMuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmxjX2hlaWdodCArIFwiKVwiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4QXhpc1wiKTtcblxuICAgICAgICAvLyB4IGF4aXMgbGFiZWxcbiAgICAgICAgLy8gZm9jdXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAvLyAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC8vICAgLmF0dHIoXCJ5XCIsIHRoaXMuaGVpZ2h0ICsgMjYpXG4gICAgICAgIC8vICAgLmF0dHIoXCJ4XCIsIHRoaXMud2lkdGggLyAyKVxuICAgICAgICAvLyAgIC50ZXh0KFwiZGF5XCIpO1xuXG4gICAgICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgICAgIGxpbmVjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgICAgLy8geSBheGlzIGxhYmVsXG4gICAgICAgIGxpbmVjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAuYXR0cihcInlcIiwgLTQpXG4gICAgICAgICAgLnRleHQoZGltKTtcblxuICAgICAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgICAgICBmb2N1cy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLmZvY3VzX3dpZHRoICsgXCIsIDApXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgICAgLy8geSBheGlzIGxhYmVsXG4gICAgICAgIGZvY3VzLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgIC5hdHRyKFwieVwiLCAtNClcbiAgICAgICAgICAuYXR0cihcInhcIiwgdGhpcy5mb2N1c193aWR0aClcbiAgICAgICAgICAudGV4dChkaW0pO1xuXG4gICAgICAgIC8vIGZvciBhbGwgY2hhcnRzXG4gICAgICAgIHRoaXMueCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAucmFuZ2UoWzAsIHRoaXMubGNfd2lkdGhdKTtcblxuICAgICAgICB0aGlzLmdhdXNzX3ggPSBkMy5zY2FsZUxpbmVhcigpXG5cbiAgICAgICAgdGhpcy5nYXVzc19zaWdtYSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAucmFuZ2UoWzAuMDAxLCAzXSlcbiAgICAgICAgICAuZG9tYWluKFswLCB0aGlzLmZvY3VzX3dpZHRoXSlcblxuICAgICAgICB0aGlzLmdyYWRpZW50Q29sb3IgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgLnJhbmdlKFswLCAxXSlcblxuICAgICAgICAvLyBmb3IgZWFjaCBjaGFydFxuICAgICAgICBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAucmFuZ2UoW3RoaXMubGNfaGVpZ2h0LCAwXSk7XG5cbiAgICAgICAgdGhpcy55LnNldChkaW0sIHkpXG5cbiAgICAgICAgbGV0IGZvY3VzX3ggPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgLnJhbmdlKFswLCB0aGlzLmZvY3VzX3dpZHRoXSk7XG5cbiAgICAgICAgdGhpcy5mb2N1c194LnNldChkaW0gLCBmb2N1c194KVxuXG4gICAgICAgIGxldCBnYXVzc195ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgIC5kb21haW4oWy01LCA1XSlcblxuICAgICAgICB0aGlzLmdhdXNzX3kuc2V0KGRpbSwgZ2F1c3NfeSlcblxuICAgICAgICAvLyBkZWZpbmUgdGhlIGxpbmVcbiAgICAgICAgbGV0IHZhbHVlbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgIC54KChkKSA9PiB0aGlzLngoZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgICAgICAgLnkoKGQpID0+IHRoaXMueS5nZXQoZGltKShkW2RpbV0pKTtcblxuICAgICAgICB0aGlzLnZhbHVlbGluZS5zZXQoZGltLCB2YWx1ZWxpbmUpXG5cbiAgICAgICAgbGV0IGZvY3VzbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgIC54KChkKSA9PiB0aGlzLmZvY3VzX3guZ2V0KGRpbSkodGhpcy5nYXVzc194KGRbXCJ4XCJdKSkpXG4gICAgICAgICAgLnkoKGQpID0+IHRoaXMueS5nZXQoZGltKSh0aGlzLmdhdXNzX3kuZ2V0KGRpbSkoZFtcInlcIl0pKSk7XG5cbiAgICAgICAgdGhpcy5mb2N1c2xpbmUuc2V0KGRpbSwgZm9jdXNsaW5lKVxuXG4gICAgICAgIC8vIFVwZGF0ZSBheGlzXG4gICAgICAgIGxpbmVjaGFydC5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkpO1xuICAgICAgICBsaW5lY2hhcnQuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55LmdldChkaW0pKSk7XG5cbiAgICAgICAgZm9jdXMuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAgICAgLmNhbGwoZDMuYXhpc1JpZ2h0KHRoaXMueS5nZXQoZGltKSkpO1xuICAgICAgICBmb2N1cy5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMuZm9jdXNfeC5nZXQoZGltKSkudGlja3MoMikpO1xuXG4gICAgICAgIHRoaXMuY2hhcnRzLnNldChkaW0sIHtsaW5lY2hhcnQ6IGxpbmVjaGFydCwgZm9jdXM6IGZvY3VzfSlcblxuICAgICAgICB0aGlzLmZpbHRlcnMuc2V0KGRpbSwgbmV3IE1hcCgpKVxuICAgIH0pXG5cbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZUhpZ2hsaWdodChkaW0pIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmNoYXJ0cy5nZXQoZGltKS5saW5lY2hhcnQuc2VsZWN0QWxsKFwicGF0aC5saW5lXCIpXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZFtcImhpZ2hsaWdodFwiXVxuICAgICAgfSlcblxuICAgIHRoaXMuY2hhcnRzLmdldChkaW0pLmZvY3VzLnNlbGVjdEFsbChcInJlY3QuYmFyXCIpXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgZnVuY3Rpb24oYikge1xuICAgICAgICBsZXQgb3BhY2l0eSA9IDA7XG5cbiAgICAgICAgc2VsZi5kYXRhLmZvckVhY2goKGQ6IGFueVtdKSA9PiB7XG4gICAgICAgICAgbGV0IHZhbHVlID0gZFtcImRhdGFcIl1bZFtcImRhdGFcIl0ubGVuZ3RoIC0gMV1bZGltXTtcblxuICAgICAgICAgIGlmKHZhbHVlID4gYi54MCAmJiB2YWx1ZSA8IGIueDEpIHtcbiAgICAgICAgICAgIG9wYWNpdHkgKz0gZFtcImhpZ2hsaWdodFwiXVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZihiLmxlbmd0aCA8IDEpIHJldHVybiAwO1xuXG4gICAgICAgIHJldHVybiBvcGFjaXR5IC8gYi5sZW5ndGhcbiAgICAgIH0pXG4gIH1cblxuICBjcmVhdGVHYXVzcyhkaW0pIHtcbiAgICBsZXQgbGluZV9kYXRhID0gdGhpcy5nZXRHYXVzc2lhbihkaW0pO1xuICAgIHRoaXMuZ2F1c3NfeC5yYW5nZSh0aGlzLmZvY3VzX3guZ2V0KGRpbSkuZG9tYWluKCkpLmRvbWFpbihkMy5leHRlbnQobGluZV9kYXRhLCBkID0+IGRbXCJ4XCJdKSlcblxuICAgIHRoaXMuY2hhcnRzLmdldChkaW0pLmZvY3VzLnNlbGVjdEFsbChcInBhdGguZm9jdXNsaW5lXCIpLnJlbW92ZSgpO1xuICAgIGxldCBmb2N1c19saW5lID0gdGhpcy5jaGFydHMuZ2V0KGRpbSkuZm9jdXMuc2VsZWN0QWxsKFwicGF0aC5mb2N1c2xpbmVcIilcbiAgICAgIC5kYXRhKFtsaW5lX2RhdGFdKVxuXG4gICAgLy8gRGlzdHJpYnV0aW9uIGxpbmVcbiAgICBmb2N1c19saW5lLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiZm9jdXNsaW5lXCIpXG4gICAgICAuYXR0cihcImRcIiwgKGQpID0+IHt0aGlzLmZvY3VzbGluZS5nZXQoZGltKShkKX0pXG4gICAgICAubW92ZVRvRnJvbnQoKTtcbiAgfVxuXG4gIHVwZGF0ZUdhdXNzKGRpbSkge1xuICAgIGxldCBsaW5lX2RhdGEgPSB0aGlzLmdldEdhdXNzaWFuKGRpbSk7XG5cbiAgICAvLyBVcGRhdGUgeCBheGlzIGRvbWFpblxuICAgIHRoaXMuZ2F1c3NfeC5yYW5nZSh0aGlzLmZvY3VzX3guZ2V0KGRpbSkuZG9tYWluKCkpLmRvbWFpbihkMy5leHRlbnQobGluZV9kYXRhLCBkID0+IGRbXCJ4XCJdKSlcblxuICAgIC8vIFVwZGF0ZSBsaW5lXG4gICAgdGhpcy5jaGFydHMuZ2V0KGRpbSkuZm9jdXMuc2VsZWN0QWxsKFwicGF0aC5mb2N1c2xpbmVcIilcbiAgICAgIC5kYXRhKFtsaW5lX2RhdGFdKVxuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB0aGlzLmZvY3VzbGluZS5nZXQoZGltKShkKSlcbiAgICAgIC5tb3ZlVG9Gcm9udCgpO1xuICB9XG5cbiAgdXBkYXRlQ2hhcnQoKSB7XG4gICAgLy8gVXBkYXRlIGRvbWFpbnNcbiAgICBsZXQgeF9tYXggPSBkMy5tYXgodGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1heDxhbnksIGFueT4oYXJyYXlbXCJkYXRhXCJdLCAoZCkgPT4gZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgbGV0IHhfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5taW48YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgIHRoaXMueC5kb21haW4oW3hfbWluLCB4X21heF0pO1xuXG4gICAgdGhpcy5kaW1lbnNpb25zLm1hcCgoZGltKSA9PiB7XG4gICAgICBsZXQgeV9tYXggPSBkMy5tYXgodGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1heDxhbnksIGFueT4oYXJyYXlbXCJkYXRhXCJdLCAoZCkgPT4gZFtkaW1dKSlcbiAgICAgIGxldCB5X21pbiA9IGQzLm1pbih0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWluPGFueSwgYW55PihhcnJheVtcImRhdGFcIl0sIChkKSA9PiBkW2RpbV0pKVxuXG4gICAgICBsZXQgZm9jdXNfZGF0YSA9IDxhbnk+W107XG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCgoZDogYW55W10pID0+IHtcbiAgICAgICAgZm9jdXNfZGF0YS5wdXNoKGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aCAtIDFdW2RpbV0pXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnkuZ2V0KGRpbSkuZG9tYWluKFt5X21pbiwgeV9tYXhdKTtcbiAgICAgIHRoaXMuZ2F1c3NfeS5nZXQoZGltKS5yYW5nZSh0aGlzLnkuZ2V0KGRpbSkuZG9tYWluKCkpXG5cbiAgICAgIGxldCBiaW5zID0gZDMuaGlzdG9ncmFtKClcbiAgICAgICAgLmRvbWFpbih0aGlzLnkuZ2V0KGRpbSkuZG9tYWluKCkpXG4gICAgICAgIC50aHJlc2hvbGRzKGQzLnJhbmdlKHlfbWluLCB5X21heCwgKHlfbWF4IC0geV9taW4pIC8gMjApKVxuICAgICAgICAoZm9jdXNfZGF0YSk7XG5cbiAgICAgIHRoaXMuZm9jdXNfeC5nZXQoZGltKS5kb21haW4oWzAsIGQzLm1heChiaW5zLCAoZDogYW55W10pID0+IGQubGVuZ3RoKV0pO1xuXG4gICAgICAvLyBTZWxlY3QgY2hhcnRcbiAgICAgIHRoaXMuY2hhcnRzLmdldChkaW0pLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIikucmVtb3ZlKCk7XG4gICAgICBsZXQgY2hhcnQgPSB0aGlzLmNoYXJ0cy5nZXQoZGltKS5saW5lY2hhcnQuc2VsZWN0QWxsKFwicGF0aC5saW5lXCIpXG4gICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcblxuICAgICAgdGhpcy5jaGFydHMuZ2V0KGRpbSkuZm9jdXMuc2VsZWN0QWxsKFwiLmJhclwiKS5yZW1vdmUoKTtcbiAgICAgIGxldCBmb2N1c19jaGFydCA9IHRoaXMuY2hhcnRzLmdldChkaW0pLmZvY3VzLnNlbGVjdEFsbChcInJlY3QuYmFyc1wiKVxuICAgICAgICAuZGF0YShiaW5zKVxuXG4gICAgICAvLyBVcGRhdGUgYXhpc1xuICAgICAgdGhpcy5jaGFydHMuZ2V0KGRpbSkubGluZWNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkpO1xuICAgICAgdGhpcy5jaGFydHMuZ2V0KGRpbSkubGluZWNoYXJ0LnNlbGVjdEFsbChcIi55QXhpc1wiKVxuICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnkuZ2V0KGRpbSkpKTtcblxuICAgICAgdGhpcy5jaGFydHMuZ2V0KGRpbSkuZm9jdXMuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNSaWdodCh0aGlzLnkuZ2V0KGRpbSkpKTtcbiAgICAgIHRoaXMuY2hhcnRzLmdldChkaW0pLmZvY3VzLnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMuZm9jdXNfeC5nZXQoZGltKSkudGlja3MoMikpO1xuXG4gICAgICAvLyBMaW5lY2hhcnRcbiAgICAgIGNoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgY2hhcnQuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAuYXR0cihcImRcIiwgKGQpID0+IHRoaXMudmFsdWVsaW5lLmdldChkaW0pKGRbXCJkYXRhXCJdKSk7XG5cbiAgICAgIC8vIEJhcmNoYXJ0XG4gICAgICAvLyBSZW1vdmUgYmFyc1xuICAgICAgZm9jdXNfY2hhcnQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBBZGQgYmFyc1xuICAgICAgZm9jdXNfY2hhcnQuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMueS5nZXQoZGltKShkLngxKSArIFwiKVwiO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIChkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZm9jdXNfeC5nZXQoZGltKShkLmxlbmd0aCk7IH0pXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMueS5nZXQoZGltKShkLngwKSAtIHRoaXMueS5nZXQoZGltKShkLngxKSAtIDE7XG4gICAgICAgIH0pXG4gICAgICAgIC5tb3ZlVG9CYWNrKCk7XG4gICAgfSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/parallel-coordinates-gauss',["require", "exports", "d3", "lodash", "aurelia-framework"], function (require, exports, d3, _, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var parallelCoordinatesGauss = (function () {
        function parallelCoordinatesGauss(element, bindingEngine) {
            var _this = this;
            this.bindingEngine = bindingEngine;
            this.margin = { top: 60, right: 20, bottom: 30, left: 40 };
            this.redraw = 0;
            this.reset = 0;
            this.data = [];
            this.initialized = false;
            this.x = {};
            this.dimensions = [];
            this.x_size = 500;
            this.y_size = 500;
            this.getBrushing = function (g, x, dat) {
                var temp = [];
                var brushes = new Map();
                g.selectAll(".brush")
                    .filter(function (d) {
                    return d3.brushSelection(this);
                })
                    .each(function (d) {
                    var brush_selection = d3.brushSelection(this);
                    var extent = [];
                    var selection = [];
                    if (brush_selection != null) {
                        extent = [x[d].invert(brush_selection[1]), x[d].invert(brush_selection[0])];
                    }
                    var brushed_elements = dat.filter(function (x) { return x["data"][d] >= extent[1] && x["data"][d] <= extent[0]; });
                    brushes.set(d, brushed_elements.map(function (x) { return x["id"]; }));
                });
                var brushed = _.intersection.apply(_, Array.from(brushes.values()));
                if (brushes.size > 0 && brushed.length == 0) {
                    brushed.push("x");
                }
                _this.brushing = brushed;
            };
            this.element = element;
        }
        parallelCoordinatesGauss.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
        };
        parallelCoordinatesGauss.prototype.dataMutated = function (splices) {
            if (!this.initialized)
                this.initChart();
            this.updateChart();
        };
        parallelCoordinatesGauss.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateHighlight();
            }
        };
        parallelCoordinatesGauss.prototype.resetChanged = function () {
            if (this.initialized) {
                this.svg.remove();
                this.dataMutated("");
                this.initialized = false;
            }
        };
        parallelCoordinatesGauss.prototype.unbind = function () {
            this.subscription.dispose();
        };
        parallelCoordinatesGauss.prototype.path = function (d) {
            var _this = this;
            return this.line(this.dimensions.map(function (p) {
                return [_this.x[p](d[p]), _this.y(p)];
            }));
        };
        parallelCoordinatesGauss.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.chart = this.svg
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
            this.y = d3.scalePoint()
                .range([0, this.height]);
            this.line = d3.line()
                .curve(d3.curveMonotoneY);
            this.initialized = true;
        };
        parallelCoordinatesGauss.prototype.updateHighlight = function () {
            this.svg.selectAll(".line")
                .attr("opacity", function (d) {
                return d["highlight"];
            });
        };
        parallelCoordinatesGauss.prototype.updateChart = function () {
            var _this = this;
            if (this.data.length > 0) {
                this.dimensions = d3.keys(this.data[0]["data"]).filter(function (d) {
                    return d != "name";
                });
            }
            this.dimensions.map(function (dim) {
                var ext = d3.extent(_this.data, function (data) {
                    return data["data"][dim];
                });
                if (ext[0] == ext[1]) {
                    ext[0] -= ext[0] * 0.1;
                    ext[1] += ext[1] * 0.1;
                }
                _this.x[dim] = d3.scaleLinear()
                    .range([_this.width, 0])
                    .domain([ext[1], ext[0]]);
            });
            this.y.domain(this.dimensions);
            this.background = this.chart.append("g")
                .selectAll("path")
                .data(this.data)
                .enter().append("path")
                .attr("class", "line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .attr("d", function (d) { return _this.path(d["data"]); });
            var width = this.width;
            var x = this.x;
            var dat = this.data;
            var getBrushing = this.getBrushing;
            var g = this.chart.selectAll(".dimension")
                .data(this.dimensions)
                .enter().append("g")
                .attr("class", "dimension")
                .attr("transform", function (d) {
                return "translate(0," + _this.y(d) + ")";
            });
            g.append("g")
                .each(function (d) {
                var ext = x[d].domain();
                var tick_multiplier = 1;
                if (ext[0] - ext[1] < 0.0001) {
                    tick_multiplier = 0.6;
                }
                else if (ext[0] - ext[1] < 0.001) {
                    tick_multiplier = 0.7;
                }
                else if (ext[0] - ext[1] < 0.01) {
                    tick_multiplier = 0.8;
                }
                var ticks = x[d].ticks().length;
                d3.select(this).call(d3.axisTop(x[d]).ticks(Math.ceil(ticks * tick_multiplier)));
            });
            g.append("text")
                .style("text-anchor", "middle")
                .attr("y", -9)
                .attr("transform", "rotate(-90)")
                .text(function (d) { return d; });
            g.append("g")
                .attr("class", "brush")
                .each(function (d) {
                d3.select(this).call(d3.brushX()
                    .extent([[0, -9], [width, 9]])
                    .on("brush", function () {
                    if (!d3.event.sourceEvent)
                        return;
                    getBrushing(g, x, dat);
                })
                    .on("end", function () {
                    if (!d3.event.sourceEvent)
                        return;
                    getBrushing(g, x, dat);
                }));
            });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "reset", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "selected", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "data", void 0);
        parallelCoordinatesGauss = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], parallelCoordinatesGauss);
        return parallelCoordinatesGauss;
    }());
    exports.parallelCoordinatesGauss = parallelCoordinatesGauss;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9wYXJhbGxlbC1jb29yZGluYXRlcy1nYXVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQWtDRSxrQ0FBWSxPQUFPLEVBQVUsYUFBYTtZQUExQyxpQkFFQztZQUY0QixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQWhDaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ3RELFdBQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1lBT1YsU0FBSSxHQUFHLEVBQUUsQ0FBQztZQUtaLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1lBS3BCLE1BQUMsR0FBRyxFQUFFLENBQUM7WUFFUCxlQUFVLEdBQVEsRUFBRSxDQUFDO1lBTXJCLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBNERiLGdCQUFXLEdBQUcsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7Z0JBQzlCLElBQUksSUFBSSxHQUFRLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFFeEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7cUJBQ2xCLE1BQU0sQ0FBQyxVQUFlLENBQUM7b0JBQ3RCLE1BQU0sQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLENBQUM7cUJBQ0QsSUFBSSxDQUFDLFVBQWUsQ0FBQztvQkFDcEIsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDN0MsSUFBSSxNQUFNLEdBQVEsRUFBRSxDQUFBO29CQUNwQixJQUFJLFNBQVMsR0FBUSxFQUFFLENBQUM7b0JBRXhCLEVBQUUsQ0FBQyxD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O1lBQVQsNEJBQVE7O2dFQUF1RDtRQUN0RDtZQUFULDRCQUFROztnRUFBWTtRQUNYO1lBQVQsNEJBQVE7OytEQUFXO1FBR2tDO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztrRUFBVTtRQUNUO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztrRUFBVTtRQUdyRDtZQUFULDRCQUFROzs4REFBVztRQVhULHdCQUF3QjtZQUZwQywwQkFBTSxDQUFDLE9BQU8sRUFBRSxpQ0FBYSxDQUFDO1lBQzlCLDBCQUFNLEVBQUU7O1dBQ0ksd0JBQXdCLENBNlFwQztRQUFELCtCQUFDO0tBN1FELEFBNlFDLElBQUE7SUE3UVksNERBQXdCIiwiZmlsZSI6ImNoYXJ0cy9wYXJhbGxlbC1jb29yZGluYXRlcy1nYXVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaW5qZWN0LCBub1ZpZXcsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgQmluZGluZ0VuZ2luZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3MgcGFyYWxsZWxDb29yZGluYXRlc0dhdXNzIHtcbiAgLy8gT25lLVdheVxuICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDYwLCByaWdodDogMjAsIGJvdHRvbTogMzAsIGxlZnQ6IDQwIH07XG4gIEBiaW5kYWJsZSByZWRyYXcgPSAwO1xuICBAYmluZGFibGUgcmVzZXQgPSAwO1xuXG4gIC8vIFR3by1XYXlcbiAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgYnJ1c2hpbmc7XG4gIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHNlbGVjdGVkO1xuXG4gIC8vIE9ic2VydmVkIFZhcmlhYmxlc1xuICBAYmluZGFibGUgZGF0YSA9IFtdO1xuXG4gIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gIHByaXZhdGUgZWxlbWVudDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAvLyBEMyB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBzdmc7XG4gIHByaXZhdGUgY2hhcnQ7XG4gIHByaXZhdGUgeCA9IHt9O1xuICBwcml2YXRlIHk7XG4gIHByaXZhdGUgZGltZW5zaW9ucyA9IDxhbnk+W107XG4gIHByaXZhdGUgbGluZTtcbiAgcHJpdmF0ZSBiYWNrZ3JvdW5kO1xuICBwcml2YXRlIGZvcmVncm91bmQ7XG5cbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICBwcml2YXRlIHhfc2l6ZSA9IDUwMDtcbiAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG4gIHByaXZhdGUgd2lkdGg7XG4gIHByaXZhdGUgaGVpZ2h0O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciBiaW5kaW5nIGF0dHJpYnV0ZXNcbiAgYXR0YWNoZWQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSBkYXRhIGFycmF5IGFuZCB3YXRjaCBmb3IgY2hhbmdlc1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoc3BsaWNlcyA9PiB0aGlzLmRhdGFNdXRhdGVkKHNwbGljZXMpKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gICAgdGhpcy54X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aFxuICAgIHRoaXMueV9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICBkYXRhTXV0YXRlZChzcGxpY2VzKSB7XG4gICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHRoaXMuaW5pdENoYXJ0KClcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICByZWRyYXdDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy51cGRhdGVIaWdobGlnaHQoKTtcbiAgICB9XG4gIH1cblxuICByZXNldENoYW5nZWQoKSB7XG4gICAgaWYodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5zdmcucmVtb3ZlKClcbiAgICAgIHRoaXMuZGF0YU11dGF0ZWQoXCJcIilcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHdhdGNoZXIgYWZ0ZXIgZGlzcG9zaW5nIHRoZSBjbGFzc1xuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICB9XG5cbiAgLy8gRDMgZnVuY3Rpb25zXG5cbiAgLy8gRHJhdyB0aGUgbGluZXNcbiAgcHJpdmF0ZSBwYXRoKGQpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lKHRoaXMuZGltZW5zaW9ucy5tYXAoKHApID0+IHtcbiAgICAgIHJldHVybiBbdGhpcy54W3BdKGRbcF0pLCB0aGlzLnkocCldO1xyXG4gICAgfSkpO1xuICB9XG5cbiAgLy8gVXBkYXRlIGV4dGVybmFsIHZhcmlhYmxlcyB3aXRoIGN1cnJlbnQgYnJ1c2hlc1xuICBwcml2YXRlIGdldEJydXNoaW5nID0gKGcsIHgsIGRhdCkgPT4ge1xuICAgIGxldCB0ZW1wID0gPGFueT5bXTtcbiAgICBsZXQgYnJ1c2hlcyA9IG5ldyBNYXAoKTtcblxuICAgIGcuc2VsZWN0QWxsKFwiLmJydXNoXCIpXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgcmV0dXJuIGQzLmJydXNoU2VsZWN0aW9uKHRoaXMpO1xuICAgICAgfSlcbiAgICAgIC5lYWNoKGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgbGV0IGJydXNoX3NlbGVjdGlvbiA9IGQzLmJydXNoU2VsZWN0aW9uKHRoaXMpXG4gICAgICAgIGxldCBleHRlbnQgPSA8YW55PltdXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSA8YW55PltdO1xuXG4gICAgICAgIGlmIChicnVzaF9zZWxlY3Rpb24gIT0gbnVsbCkge1xuICAgICAgICAgIGV4dGVudCA9IFt4W2RdLmludmVydChicnVzaF9zZWxlY3Rpb25bMV0pLCB4W2RdLmludmVydChicnVzaF9zZWxlY3Rpb25bMF0pXVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJydXNoZWRfZWxlbWVudHMgPSBkYXQuZmlsdGVyKHggPT4geFtcImRhdGFcIl1bZF0gPj0gZXh0ZW50WzFdICYmIHhbXCJkYXRhXCJdW2RdIDw9IGV4dGVudFswXSlcblxuICAgICAgICBicnVzaGVzLnNldChkLCBicnVzaGVkX2VsZW1lbnRzLm1hcCh4ID0+IHhbXCJpZFwiXSkpXG4gICAgICB9KTtcblxuICAgIGxldCBicnVzaGVkID0gXy5pbnRlcnNlY3Rpb24oLi4uQXJyYXkuZnJvbShicnVzaGVzLnZhbHVlcygpKSk7XG5cbiAgICAvLyBJZiBubyBlbGVtZW50IGlzIGJydXNoZWQgcmV0dXJuIGEgeCB0byBsZXQgdGhlIHN5c3RlbSBrbm93IHRoYXRcbiAgICAvLyB0aGVyZSBhcmUgYnJ1c2hlcyBhY3RpdmVcbiAgICBpZiAoYnJ1c2hlcy5zaXplID4gMCAmJiBicnVzaGVkLmxlbmd0aCA9PSAwKSB7XG4gICAgICBicnVzaGVkLnB1c2goXCJ4XCIpXG4gICAgfVxuXG4gICAgdGhpcy5icnVzaGluZyA9IGJydXNoZWQ7XG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgLy8gYXBwZW5kIHRoZSBzdmcgb2JqZWN0IHRvIHRoZSBjaGFydCBkaXYgb2YgdGhlIHBhZ2VcbiAgICAvLyBhcHBlbmQgYSAnZ3JvdXAnIGVsZW1lbnQgdG8gJ3N2ZydcbiAgICAvLyBtb3ZlcyB0aGUgJ2dyb3VwJyBlbGVtZW50IHRvIHRoZSB0b3AgbGVmdCBtYXJnaW5cbiAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcblxuICAgIHRoaXMuY2hhcnQgPSB0aGlzLnN2Z1xuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIixcIiArIHRoaXMubWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgIC8vIHNldCB0aGUgeCByYW5nZVxuICAgIHRoaXMueSA9IGQzLnNjYWxlUG9pbnQoKVxuICAgICAgLnJhbmdlKFswLCB0aGlzLmhlaWdodF0pO1xuXG4gICAgLy8gQmFzaWMgaW5pdGlhbGl6YXRpb25cbiAgICB0aGlzLmxpbmUgPSBkMy5saW5lKClcbiAgICAgIC5jdXJ2ZShkMy5jdXJ2ZU1vbm90b25lWSk7XG5cbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZUhpZ2hsaWdodCgpIHtcbiAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZVwiKVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGRbXCJoaWdobGlnaHRcIl1cbiAgICAgIH0pXG4gIH1cblxuICB1cGRhdGVDaGFydCgpIHtcbiAgICAvLyBHZXQgY3VycmVudCBkYXRhc2V0IGRpbWVuc2lvbnM6IEtleXMgb2YgdGhlIG1hcFxuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5kaW1lbnNpb25zID0gZDMua2V5cyh0aGlzLmRhdGFbMF1bXCJkYXRhXCJdKS5maWx0ZXIoKGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGQgIT0gXCJuYW1lXCJcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBjb3JyZXNwb25kaW5nIHkgYXhpc1xuICAgIC8vIEN1cnJlbnRseSBvbmx5IGxpbmVhciB2YWx1ZXNcbiAgICB0aGlzLmRpbWVuc2lvbnMubWFwKChkaW0pID0+IHtcbiAgICAgIGxldCBleHQgPSA8YW55PmQzLmV4dGVudCh0aGlzLmRhdGEsIChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhW1wiZGF0YVwiXVtkaW1dO1xuICAgICAgfSlcblxuICAgICAgLy8gRXh0ZW5kIGRvbWFpbiBpZiBpdHMgb25seSBvbmUgcG9pbnRcbiAgICAgIGlmIChleHRbMF0gPT0gZXh0WzFdKSB7XG4gICAgICAgIGV4dFswXSAtPSBleHRbMF0gKiAwLjE7XG4gICAgICAgIGV4dFsxXSArPSBleHRbMV0gKiAwLjE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMueFtkaW1dID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAucmFuZ2UoW3RoaXMud2lkdGgsIDBdKVxuICAgICAgICAuZG9tYWluKFtleHRbMV0sIGV4dFswXV0pXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHkgYXhpc1xuICAgIHRoaXMueS5kb21haW4odGhpcy5kaW1lbnNpb25zKTtcblxuICAgIC8vIERyYXcgbGluZXNcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAuZGF0YSh0aGlzLmRhdGEpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgLmNsYXNzZWQoXCJoaWdobGlnaHRcIiwgZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICBpZiAoZFtcImhpZ2hsaWdodFwiXSA9PSAxKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIH0pXG4gICAgICAuY2xhc3NlZChcImJhY2tncm91bmRcIiwgZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICBpZiAoZFtcImhpZ2hsaWdodFwiXSA9PSAyKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIH0pXG4gICAgICAuYXR0cihcImRcIiwgKGQpID0+IHsgcmV0dXJuIHRoaXMucGF0aChkW1wiZGF0YVwiXSkgfSlcbiAgICAgIC8vIC5vbihcImNsaWNrXCIsIChkKSA9PiB7XG4gICAgICAvLyAgIHRoaXMuc2VsZWN0ZWQgPSBkW1wiaWRcIl1cbiAgICAgIC8vIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGxvY2FsIHZlcnNpb25zIG9mIGNsYXNzIHZhcmlhYmxlc1xuICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IGR1ZSB0byB0aGUgbmF0dXJlIG9mIFRTIGFuZCBEM1xuXG4gICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aFxuICAgIGxldCB4ID0gdGhpcy54O1xuICAgIGxldCBkYXQgPSB0aGlzLmRhdGFcbiAgICBsZXQgZ2V0QnJ1c2hpbmcgPSB0aGlzLmdldEJydXNoaW5nO1xuXG4gICAgLy8gQ3JlYXRlIGRyYXdpbmcgYXJlYVxuICAgIGxldCBnID0gdGhpcy5jaGFydC5zZWxlY3RBbGwoXCIuZGltZW5zaW9uXCIpXG4gICAgICAuZGF0YSh0aGlzLmRpbWVuc2lvbnMpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiZGltZW5zaW9uXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoZCkgPT4ge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMueShkKSArIFwiKVwiO1xyXG4gICAgICB9KTtcblxuICAgIC8vIEFkZCBheGlzXG4gICAgZy5hcHBlbmQoXCJnXCIpXG4gICAgICAuZWFjaChmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgIGxldCBleHQgPSB4W2RdLmRvbWFpbigpXG5cbiAgICAgICAgLy8gU2V0IGN1c3RvbSB0aWNrIGFtb3VudCBpZiB0aGUgdmFsdWVzIGFyZSB0b28gc21hbGxcbiAgICAgICAgbGV0IHRpY2tfbXVsdGlwbGllciA9IDE7XG5cbiAgICAgICAgaWYoZXh0WzBdIC0gZXh0WzFdIDwgMC4wMDAxKSB7XG4gICAgICAgICAgdGlja19tdWx0aXBsaWVyID0gMC42O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXh0WzBdIC0gZXh0WzFdIDwgMC4wMDEpIHtcbiAgICAgICAgICB0aWNrX211bHRpcGxpZXIgPSAwLjc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihleHRbMF0gLSBleHRbMV0gPCAwLjAxKSB7XG4gICAgICAgICAgdGlja19tdWx0aXBsaWVyID0gMC44O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRpY2tzID0geFtkXS50aWNrcygpLmxlbmd0aFxuXG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jYWxsKGQzLmF4aXNUb3AoeFtkXSkudGlja3MoTWF0aC5jZWlsKHRpY2tzICogdGlja19tdWx0aXBsaWVyKSkpO1xuICAgICAgfSk7XG5cbiAgICAvLyBBZGQgdGl0bGVzIGZvciB0aGUgYXhpc1xuICAgIGcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC5hdHRyKFwieVwiLCAtOSlcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgIC50ZXh0KChkKSA9PiB7IHJldHVybiBkOyB9KTtcblxuICAgIC8vIEFkZCBhbmQgc3RvcmUgYSBicnVzaCBmb3IgZWFjaCBheGlzLlxuICAgIGcuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJydXNoXCIpXG4gICAgICAuZWFjaChmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jYWxsKGQzLmJydXNoWCgpXG4gICAgICAgICAgLmV4dGVudChbWzAsIC05XSwgW3dpZHRoLCA5XV0pXG4gICAgICAgICAgLm9uKFwiYnJ1c2hcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5zb3VyY2VFdmVudCkgcmV0dXJuOyAvLyBPbmx5IHRyYW5zaXRpb24gYWZ0ZXIgaW5wdXQuXG5cbiAgICAgICAgICAgIGdldEJydXNoaW5nKGcsIHgsIGRhdClcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vbihcImVuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWQzLmV2ZW50LnNvdXJjZUV2ZW50KSByZXR1cm47IC8vIE9ubHkgdHJhbnNpdGlvbiBhZnRlciBpbnB1dC5cblxuICAgICAgICAgICAgZ2V0QnJ1c2hpbmcoZywgeCwgZGF0KVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('gauss/gauss',["require", "exports", "aurelia-framework", "d3"], function (require, exports, aurelia_framework_1, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Gauss = (function () {
        function Gauss() {
            this.dimensions = [];
            this.selected_dim = "";
            this.dim_not_selected = true;
            this.data_not_loaded = true;
            this.inFilter = [];
            this.data_parallel = [];
            this.data_lines = [];
            this.data_lines_original = [];
            this.data_length = 0;
            this.current_filter = new Set();
            this.position = 'right';
            this.trigger = 'mouseover';
        }
        Gauss.prototype.toggled = function (open) {
            if (open) {
            }
            else {
            }
        };
        Gauss.prototype.fileSelected = function () {
            var _this = this;
            var reader = new FileReader();
            var file = this.file[0];
            reader.onload = function (event) {
                _this.data = JSON.parse(event.target.result);
                _this.load();
            };
            reader.readAsText(file);
        };
        Gauss.prototype.selectDim = function (dim) {
            this.selected_dim = dim;
            this.dim_not_selected = false;
        };
        Gauss.prototype.visualize = function () {
            this.resetChart = this.resetChart == 0 ? 1 : 0;
            this.data_parallel.length = 0;
            this.data_lines_original.length = 0;
            for (var i = 0; i < this.data.length; i++) {
                var d = this.data[i];
                this.data_parallel.push({
                    "id": i,
                    "highlight": 0,
                    "data": d.params
                });
                this.data_lines_original.push({
                    "id": i,
                    "highlight": 0,
                    "data": d.data
                });
            }
            this.data_length = this.data_lines_original.length;
            this.filterOutData([]);
        };
        Gauss.prototype.brushing_linesChanged = function () {
            this.updateOutData(this.brushing_lines);
            this.updateInData(this.brushing_lines);
        };
        Gauss.prototype.brushing_parallelChanged = function () {
            this.updateParallelData(this.brushing_parallel);
            this.filterOutData(this.brushing_parallel);
        };
        Gauss.prototype.updateOutData = function (mapping) {
            this.data_lines.forEach(function (x) {
                x["highlight"] = mapping.get(x["id"]);
            });
            this.redraw_lines = this.redraw_lines == 0 ? 1 : 0;
        };
        Gauss.prototype.updateInData = function (mapping) {
            var _this = this;
            if (this.inFilter.length > 0) {
                this.data_parallel
                    .filter(function (x) { return _this.inFilter.includes(x["id"]); })
                    .forEach(function (x) {
                    x["highlight"] = mapping.get(x["id"]);
                });
            }
            else {
                this.data_parallel
                    .forEach(function (x) {
                    x["highlight"] = mapping.get(x["id"]);
                });
            }
            this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
        };
        Gauss.prototype.updateParallelData = function (ids) {
            this.inFilter = ids;
            if (ids.length > 0) {
                this.data_parallel.forEach(function (x) {
                    if (ids.includes(x["id"])) {
                        x["highlight"] = 1;
                    }
                    else {
                        x["highlight"] = 0;
                    }
                });
            }
            else {
                this.data_parallel.forEach(function (x) {
                    x["highlight"] = 1;
                });
            }
            this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
        };
        Gauss.prototype.filterOutData = function (ids) {
            if (ids.length > 1) {
                var highlight_list_1 = new Set(ids);
                this.data_lines.length = 0;
                (_a = this.data_lines).push.apply(_a, this.data_lines_original.filter(function (x) { return highlight_list_1.has(x["id"]); }));
                this.current_filter = highlight_list_1;
            }
            else {
                this.data_lines.length = 0;
                (_b = this.data_lines).push.apply(_b, this.data_lines_original);
            }
            var _a, _b;
        };
        Gauss.prototype.load = function () {
            if (this.data.length > 0) {
                if ("params" in this.data[0] && "data" in this.data[0]) {
                    this.dimensions = d3.keys(this.data[0]["data"][0]).filter(function (d) {
                        return d;
                    });
                    this.data_not_loaded = false;
                }
            }
        };
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Gauss.prototype, "brushing_parallel", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Gauss.prototype, "brushing_lines", void 0);
        Gauss = __decorate([
            aurelia_framework_1.autoinject
        ], Gauss);
        return Gauss;
    }());
    exports.Gauss = Gauss;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUVILElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUE3Slc7WUFBWCw4QkFBVTs7d0RBQW1CO1FBR2xCO1lBQVgsOEJBQVU7O3FEQUFnQjtRQVhoQixLQUFLO1lBRGpCLDhCQUFVO1dBQ0UsS0FBSyxDQXNLakI7UUFBRCxZQUFDO0tBdEtELEFBc0tDLElBQUE7SUF0S1ksc0JBQUsiLCJmaWxlIjoiZ2F1c3MvZ2F1c3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0LCBvYnNlcnZhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBHYXVzcyB7XG4gIGZpbGU7XG4gIGRhdGE7XG4gIGRpbWVuc2lvbnMgPSBbXTtcbiAgc2VsZWN0ZWRfZGltID0gXCJcIjtcbiAgZGltX25vdF9zZWxlY3RlZCA9IHRydWU7XG4gIGRhdGFfbm90X2xvYWRlZCA9IHRydWU7XG5cbiAgQG9ic2VydmFibGUgYnJ1c2hpbmdfcGFyYWxsZWw7XG4gIHJlZHJhd19wYXJhbGxlbDtcblxuICBAb2JzZXJ2YWJsZSBicnVzaGluZ19saW5lcztcbiAgcmVkcmF3X2xpbmVzO1xuXG4gIHJlc2V0Q2hhcnQ7XG5cbiAgaW5GaWx0ZXIgPSBbXVxuXG4gIGRhdGFfcGFyYWxsZWwgPSA8YW55W10+W11cbiAgZGF0YV9saW5lcyA9IDxhbnlbXT5bXVxuICBkYXRhX2xpbmVzX29yaWdpbmFsID0gPGFueVtdPltdXG4gIGRhdGFfbGVuZ3RoID0gMDtcblxuICBjdXJyZW50X2ZpbHRlciA9IG5ldyBTZXQoKTtcblxuICBwb3NpdGlvbiA9ICdyaWdodCc7XG4gIHRyaWdnZXIgPSAnbW91c2VvdmVyJztcblxuICB0b2dnbGVkKG9wZW4pIHtcbiAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ29wZW5lZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xvc2VkJyk7XG4gICAgICB9XG4gIH1cblxuICBmaWxlU2VsZWN0ZWQoKSB7XG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgbGV0IGZpbGUgPSB0aGlzLmZpbGVbMF07XG5cbiAgICByZWFkZXIub25sb2FkID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICB0aGlzLmxvYWQoKVxuICAgIH1cbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgfVxuXG4gIHNlbGVjdERpbShkaW0pIHtcbiAgICB0aGlzLnNlbGVjdGVkX2RpbSA9IGRpbTtcbiAgICB0aGlzLmRpbV9ub3Rfc2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZpc3VhbGl6ZSgpIHtcbiAgICB0aGlzLnJlc2V0Q2hhcnQgPSB0aGlzLnJlc2V0Q2hhcnQgPT0gMCA/IDEgOiAwO1xuXG4gICAgdGhpcy5kYXRhX3BhcmFsbGVsLmxlbmd0aCA9IDBcbiAgICB0aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwubGVuZ3RoID0gMFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkID0gdGhpcy5kYXRhW2ldXG5cbiAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbC5wdXNoKHtcbiAgICAgICAgXCJpZFwiOiBpLFxuICAgICAgICBcImhpZ2hsaWdodFwiOiAwLFxuICAgICAgICBcImRhdGFcIjogZC5wYXJhbXNcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuZGF0YV9saW5lc19vcmlnaW5hbC5wdXNoKHtcbiAgICAgICAgXCJpZFwiOiBpLFxuICAgICAgICBcImhpZ2hsaWdodFwiOiAwLFxuICAgICAgICBcImRhdGFcIjogZC5kYXRhXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuZGF0YV9sZW5ndGggPSB0aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwubGVuZ3RoO1xuICAgIHRoaXMuZmlsdGVyT3V0RGF0YShbXSlcbiAgfVxuXG4gIGJydXNoaW5nX2xpbmVzQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnVwZGF0ZU91dERhdGEodGhpcy5icnVzaGluZ19saW5lcyk7XG4gICAgdGhpcy51cGRhdGVJbkRhdGEodGhpcy5icnVzaGluZ19saW5lcyk7XG4gIH1cblxuICBicnVzaGluZ19wYXJhbGxlbENoYW5nZWQoKSB7XG4gICAgdGhpcy51cGRhdGVQYXJhbGxlbERhdGEodGhpcy5icnVzaGluZ19wYXJhbGxlbCk7XG4gICAgdGhpcy5maWx0ZXJPdXREYXRhKHRoaXMuYnJ1c2hpbmdfcGFyYWxsZWwpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVPdXREYXRhKG1hcHBpbmcpIHtcbiAgICAvLyBTZXQgaGlnaGxpZ2h0IGNvbG9yc1xuICAgIHRoaXMuZGF0YV9saW5lcy5mb3JFYWNoKHggPT4ge1xuICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IG1hcHBpbmcuZ2V0KHhbXCJpZFwiXSlcbiAgICB9KVxuXG4gICAgdGhpcy5yZWRyYXdfbGluZXMgPSB0aGlzLnJlZHJhd19saW5lcyA9PSAwID8gMSA6IDA7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUluRGF0YShtYXBwaW5nKSB7XG4gICAgaWYgKHRoaXMuaW5GaWx0ZXIubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5kYXRhX3BhcmFsbGVsXG4gICAgICAgIC5maWx0ZXIoeCA9PiB0aGlzLmluRmlsdGVyLmluY2x1ZGVzKHhbXCJpZFwiXSkpXG4gICAgICAgIC5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSBtYXBwaW5nLmdldCh4W1wiaWRcIl0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kYXRhX3BhcmFsbGVsXG4gICAgICAgIC5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSBtYXBwaW5nLmdldCh4W1wiaWRcIl0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWRyYXdfcGFyYWxsZWwgPSB0aGlzLnJlZHJhd19wYXJhbGxlbCA9PSAwID8gMSA6IDA7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBhcmFsbGVsRGF0YShpZHMpIHtcbiAgICB0aGlzLmluRmlsdGVyID0gaWRzO1xuXG4gICAgaWYgKGlkcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmRhdGFfcGFyYWxsZWwuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgaWYgKGlkcy5pbmNsdWRlcyh4W1wiaWRcIl0pKSB7XG4gICAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kYXRhX3BhcmFsbGVsLmZvckVhY2goeCA9PiB7XG4gICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSAxO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZHJhd19wYXJhbGxlbCA9IHRoaXMucmVkcmF3X3BhcmFsbGVsID09IDAgPyAxIDogMDtcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyT3V0RGF0YShpZHMpIHtcbiAgICBpZiAoaWRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBoaWdobGlnaHRfbGlzdCA9IG5ldyBTZXQoaWRzKTtcblxuICAgICAgdGhpcy5kYXRhX2xpbmVzLmxlbmd0aCA9IDBcblxuICAgICAgdGhpcy5kYXRhX2xpbmVzLnB1c2goLi4udGhpcy5kYXRhX2xpbmVzX29yaWdpbmFsLmZpbHRlcih4ID0+IGhpZ2hsaWdodF9saXN0Lmhhcyh4W1wiaWRcIl0pKSlcblxuICAgICAgLy8gU2F2ZSBjdXJyZW50IGZpbHRlclxuICAgICAgdGhpcy5jdXJyZW50X2ZpbHRlciA9IGhpZ2hsaWdodF9saXN0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YV9saW5lcy5sZW5ndGggPSAwXG4gICAgICB0aGlzLmRhdGFfbGluZXMucHVzaCguLi50aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwpXG4gICAgfVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChcInBhcmFtc1wiIGluIHRoaXMuZGF0YVswXSAmJiBcImRhdGFcIiBpbiB0aGlzLmRhdGFbMF0pIHtcbiAgICAgICAgLy8gR2V0IHkgdmFsdWVzXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGQzLmtleXModGhpcy5kYXRhWzBdW1wiZGF0YVwiXVswXSkuZmlsdGVyKChkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kYXRhX25vdF9sb2FkZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"ion-rangeslider/css/ion.rangeSlider.css\"></require><require from=\"ion-rangeslider/css/ion.rangeSlider.skinHTML5.css\"></require><require from=\"./app.css\"></require><div class=\"container\" style=\"width:100%\"><router-view></router-view></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "/* body { padding-top: 70px; } */\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n  margin: 20px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n"; });
define('text!gauss/gauss.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/line-chart-gauss\"></require><require from=\"../charts/line-charts\"></require><require from=\"../charts/parallel-coordinates-gauss\"></require><h2>Analyze Input-Output Models</h2><span>Brush and link input parameters and output values.</span><hr><div class=\"row\"><div class=\"col-md-4\"><div class=\"btn-group\"><button style=\"height:35px\" class=\"btn btn-default\" aubs-popover=\"title: Data Format;\n                                                        body:[{\n                                                          data: [{<br/>\n                                                            x: 0,<br/>\n                                                            y1: 1,<br/>\n                                                            y2: 3,<br/>\n                                                            ...<br/>\n                                                          }, {}, ...]<br/>\n                                                          params: {<br/>\n                                                            a: 1,<br/>\n                                                            b: 2,<br/>\n                                                            ...<br/>\n                                                          }\n                                                        }, {}, ...];\n                                                        position.bind: position;\n                                                        trigger.bind: trigger;\n                                                        on-toggle.call:toggled(open)\"><i class=\"fas fa-info-circle fa-lg\"></i></button> <input style=\"height:35px\" class=\"btn btn-default\" type=\"file\" accept=\"*.json\" change.delegate=\"fileSelected()\" files.bind=\"file\"></div><br><div class=\"btn-group dropdown\" aubs-dropdown=\"auto-close: 'Always'; on-toggle.call: toggled(state)\"><button disabled.bind=\"data_not_loaded\" class=\"btn btn-default dropdown-toggle\" aubs-dropdown-toggle>X-Axis: ${selected_dim} <span class=\"caret\"></span></button><ul class=\"dropdown-menu dropdown-menu-left\"><li repeat.for=\"dim of dimensions\"><a click.delegate=\"selectDim(dim)\">${dim}</a></li></ul></div><button disabled.bind=\"dim_not_selected\" class=\"btn btn-success\" click.delegate=\"visualize()\">Visualize</button><div style=\"width:100%;height:500px\"><parallel-coordinates-gauss brushing.bind=\"brushing_parallel\" redraw.bind=\"redraw_parallel\" reset.bind=\"resetChart\" data.bind=\"data_parallel\"></parallel-coordinates-gauss></div></div><div class=\"col-md-8\"><div class=\"col-md-6\" style=\"width:100%;height:800px\"><line-charts x_attribute.bind=\"selected_dim\" brushing.bind=\"brushing_lines\" redraw.bind=\"redraw_lines\" reset.bind=\"resetChart\" data.bind=\"data_lines\"></line-charts></div></div></div><div></div></template>"; });
define('text!gauss/chart.css', ['module'], function(module) { module.exports = ".background path {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.foreground path {\n  fill: none;\n  stroke: steelblue;\n}\n\n.brush .extent {\n  fill-opacity: .3;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.axis line,\n.axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.axis text {\n  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 1.5px;\n  shape-rendering: crispEdges;\n}\n\n.focusline {\n  fill: none;\n  stroke: black;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n}\n\n.line.highlight {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n}\n\n.line.background {\n  fill: none;\n  stroke: #ddd;\n  stroke-width: 2px;\n  opacity: 0.5;\n  shape-rendering: crispEdges;\n}\n\n.focus_element {\n  fill: steelblue;\n  opacity: 0.1;\n}\n\nrect.bar {\n  fill: steelblue;\n  outline-width: thin;\n  outline-style: solid;\n  outline-color: #c7c7c7;\n}\n"; });
//# sourceMappingURL=app-bundle.js.map