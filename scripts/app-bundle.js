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
            var _this = this;
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
            this.updateBars = function (dim) {
                var y_max = d3.max(_this.data, function (array) { return d3.max(array["data"], function (d) { return d[dim]; }); });
                var y_min = d3.min(_this.data, function (array) { return d3.min(array["data"], function (d) { return d[dim]; }); });
                var focus_data = [];
                _this.data.forEach(function (d) {
                    focus_data.push(d["data"][_this.selected_time][dim]);
                });
                _this.bins = d3.histogram()
                    .domain(_this.y.get(dim).domain())
                    .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 20))(focus_data);
                _this.focus_x.get(dim).domain([0, d3.max(_this.bins, function (d) { return d.length; })]);
                _this.charts.get(dim).focus.selectAll(".xAxis")
                    .call(d3.axisBottom(_this.focus_x.get(dim)).ticks(2));
                _this.charts.get(dim).focus.selectAll(".bar").remove();
                var focus_chart = _this.charts.get(dim).focus.selectAll("rect.bars")
                    .data(_this.bins);
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
                if (_this.filters.get(dim).size > 0) {
                    _this.updateGauss(dim);
                    var new_filter_1 = new Map();
                    _this.data.forEach(function (d) {
                        new_filter_1.set(d["id"], _this.gradientColor(_this.gaussian(_this.gauss_y.get(dim).invert(d.data[_this.selected_time][dim]), _this.gauss_y.get(dim).invert(_this.center), _this.gauss_sigma(_this.weight))));
                    });
                    _this.resolve_brushing(dim, new_filter_1);
                    _this.updateHighlight(dim);
                }
            };
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
                    self.updateGauss(dim);
                    var new_filter = new Map();
                    self.data.forEach(function (d) {
                        new_filter.set(d["id"], self.gradientColor(self.gaussian(self.gauss_y.get(dim).invert(d.data[self.selected_time][dim]), self.gauss_y.get(dim).invert(self.center), self.gauss_sigma(self.weight))));
                    });
                    self.resolve_brushing(dim, new_filter);
                    self.mouse_event = d3.select(this)
                        .on("mousemove", function (d) {
                        self.center = self.y.get(dim).invert(d3.mouse(this)[1]);
                        self.weight = d3.mouse(this)[0];
                        self.updateGauss(dim);
                        var new_filter = new Map();
                        self.data.forEach(function (d) {
                            new_filter.set(d["id"], self.gradientColor(self.gaussian(self.gauss_y.get(dim).invert(d.data[self.selected_time][dim]), self.gauss_y.get(dim).invert(self.center), self.gauss_sigma(self.weight))));
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
                var drag = d3.drag()
                    .on("start", function () { d3.select(this).classed('active', true); })
                    .on("drag", function (d) {
                    if (d3.event.x >= 0 && d3.event.x <= self.lc_width) {
                        d3.select(this).select("line")
                            .raise()
                            .attr("x1", d3.event.x)
                            .attr("x2", d3.event.x);
                        d3.select(this).select("circle")
                            .raise()
                            .attr("cx", d3.event.x);
                    }
                    var closest = self.x_values.reduce(function (prev, curr) {
                        return (Math.abs(curr - self.x.invert(d3.event.x)) < Math.abs(prev - self.x.invert(d3.event.x)) ? curr : prev);
                    });
                    self.selected_time = closest;
                    self.updateBars(dim);
                })
                    .on('end', function () { d3.select(this).classed('active', false); });
                var selector = linechart
                    .append("g")
                    .attr("class", "time-selector")
                    .attr("width", _this.lc_width)
                    .attr("height", _this.lc_width)
                    .call(drag);
                selector.append("line")
                    .attr("stroke", "black")
                    .attr("x1", _this.lc_width)
                    .attr("y1", 0)
                    .attr("x2", _this.lc_width)
                    .attr("y2", _this.lc_height);
                selector.append("circle")
                    .attr("fill", "black")
                    .attr("cx", _this.lc_width)
                    .attr("cy", 0)
                    .attr("r", 10);
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
                    var value = d["data"][self.selected_time][dim];
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
            this.x_values = this.data[0]["data"].map(function (d) {
                return d[_this.x_attribute];
            });
            this.dimensions.map(function (dim) {
                var y_max = d3.max(_this.data, function (array) { return d3.max(array["data"], function (d) { return d[dim]; }); });
                var y_min = d3.min(_this.data, function (array) { return d3.min(array["data"], function (d) { return d[dim]; }); });
                _this.selected_time = x_max;
                var focus_data = [];
                _this.data.forEach(function (d) {
                    focus_data.push(d["data"][_this.selected_time][dim]);
                });
                _this.y.get(dim).domain([y_min, y_max]);
                _this.gauss_y.get(dim).range(_this.y.get(dim).domain());
                _this.bins = d3.histogram()
                    .domain(_this.y.get(dim).domain())
                    .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 20))(focus_data);
                _this.focus_x.get(dim).domain([0, d3.max(_this.bins, function (d) { return d.length; })]);
                _this.charts.get(dim).linechart.selectAll("path.line").remove();
                var chart = _this.charts.get(dim).linechart.selectAll("path.line")
                    .data(_this.data);
                _this.charts.get(dim).focus.selectAll(".bar").remove();
                var focus_chart = _this.charts.get(dim).focus.selectAll("rect.bars")
                    .data(_this.bins);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMzQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUVsQixLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUE7Z0JBRzlCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUU7cUJBQ3RCLENBQUMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUEzQixDQUEyQixDQUFDO3FCQUNyQyxDQUFDLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO2dCQUVyQyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUE7Z0JBRWxDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUU7cUJBQ3RCLENBQUMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQztxQkFDckQsQ0FBQyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO2dCQUU1RCxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUE7Z0JBR2xDLFNB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QUFTLENBQUMsV0FBVyxDQUFDO3FCQUNoRSxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUdsQixLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztxQkFDL0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO3FCQUMvQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXRDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO3FCQUMzQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO3FCQUMzQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUd2RCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRXRCLEtBQUssQ0FBQyxLQUFLLEVBQUU7cUJBQ1YsTUFBTSxDQUFDLE1BQU0sQ0FBQztxQkFDZCxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztxQkFDckIsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7Z0JBSXhELFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFHNUIsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7cUJBQy9CLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO3FCQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBQztvQkFDbkIsTUFBTSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUN0RCxDQUFDLENBQUM7cUJBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUM7b0JBQ2YsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFBQyxDQUFDLENBQUM7cUJBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDO29CQUNoQixNQUFNLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNELENBQUMsQ0FBQztxQkFDRCxVQUFVLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUF2bkJTO1lBQVQsNEJBQVE7O2tEQUEwRTtRQUN6RTtZQUFULDRCQUFROzt1REFBbUI7UUFDbEI7WUFBVCw0QkFBUTs7bURBQWtCO1FBQ2pCO1lBQVQsNEJBQVE7O2tEQUFZO1FBQ1g7WUFBVCw0QkFBUTs7aURBQVc7UUFHa0M7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O29EQUFVO1FBR3JEO1lBQVQsNEJBQVE7O2dEQUFXO1FBWlQsVUFBVTtZQUZ0QiwwQkFBTSxDQUFDLE9BQU8sRUFBRSxpQ0FBYSxDQUFDO1lBQzlCLDBCQUFNLEVBQUU7O1dBQ0ksVUFBVSxDQTBuQnRCO1FBQUQsaUJBQUM7S0ExbkJELEFBMG5CQyxJQUFBO0lBMW5CWSxnQ0FBVSIsImZpbGUiOiJjaGFydHMvbGluZS1jaGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IGluamVjdCwgbm9WaWV3LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIEJpbmRpbmdFbmdpbmUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbkBub1ZpZXcoKVxuZXhwb3J0IGNsYXNzIExpbmVDaGFydHMge1xuICAvLyBPbmUtV2F5XG4gIEBiaW5kYWJsZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA0MCwgYm90dG9tOiAzNSwgbGVmdDogNDAsIG1pZGRsZTogMjAsIHk6IDM1IH07XG4gIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwieFwiO1xuICBAYmluZGFibGUgeF9sYWJlbCA9IFwiZGF5c1wiO1xuICBAYmluZGFibGUgcmVkcmF3ID0gMDtcbiAgQGJpbmRhYmxlIHJlc2V0ID0gMDtcblxuICAvLyBUd28tV2F5XG4gIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIGJydXNoaW5nO1xuXG4gIC8vIE9ic2VydmVkIFZhcmlhYmxlc1xuICBAYmluZGFibGUgZGF0YSA9IFtdO1xuXG4gIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gIHByaXZhdGUgZWxlbWVudDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG5cbiAgLy8gRDMgdmFyaWFibGVzXG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBtb3VzZV9ldmVudDtcbiAgcHJpdmF0ZSBzdmc7XG4gIHByaXZhdGUgZGltZW5zaW9ucztcbiAgcHJpdmF0ZSBjaGFydHM7XG4gIHByaXZhdGUgeDtcbiAgcHJpdmF0ZSB5ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIGZvY3VzX3ggPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgZ2F1c3NfeDtcbiAgcHJpdmF0ZSBnYXVzc195ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIGdhdXNzX3NpZ21hO1xuICBwcml2YXRlIGdhdXNzX21heF9zaWdtYTtcbiAgcHJpdmF0ZSBncmFkaWVudENvbG9yO1xuICBwcml2YXRlIHZhbHVlbGluZSA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSBmb2N1c2xpbmUgPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgZmlsdGVycyA9IG5ldyBNYXAoKVxuICBwcml2YXRlIGZvY3VzX2RhdGE7XG4gIHByaXZhdGUgaGlzdG9ncmFtO1xuICBwcml2YXRlIGJydXNoO1xuICBwcml2YXRlIGNlbnRlciA9IDEuMDtcbiAgcHJpdmF0ZSB3ZWlnaHQgPSAxLjA7XG4gIHByaXZhdGUgc2VsZWN0ZWRfdGltZTtcbiAgcHJpdmF0ZSBiaW5zO1xuICBwcml2YXRlIHhfdmFsdWVzO1xuXG4gIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgcHJpdmF0ZSB3aWR0aDtcbiAgcHJpdmF0ZSBoZWlnaHQ7XG4gIHByaXZhdGUgeF9zaXplID0gOTAwO1xuICBwcml2YXRlIHlfc2l6ZSA9IDUwMDtcbiAgcHJpdmF0ZSBsY193aWR0aCA9IDUwO1xuICBwcml2YXRlIGxjX2hlaWdodCA9IDUwMDtcbiAgcHJpdmF0ZSBmb2N1c193aWR0aCA9IDUwO1xuICBwcml2YXRlIGZvY3VzX2hlaWdodCA9IDUwMDtcbiAgcHJpdmF0ZSBmb2N1c19vZmZzZXQgPSAxMDA7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJpdmF0ZSBiaW5kaW5nRW5naW5lKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGJpbmRpbmcgYXR0cmlidXRlc1xuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgICAuY29sbGVjdGlvbk9ic2VydmVyKHRoaXMuZGF0YSlcbiAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgIH1cblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICB0aGlzLnhfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMueV9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgIHRoaXMubGNfd2lkdGggPSB0aGlzLndpZHRoICogMC44O1xuICAgIHRoaXMuZm9jdXNfd2lkdGggPSB0aGlzLndpZHRoICogMC4yIC0gdGhpcy5tYXJnaW4ubGVmdDtcblxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHRoaXMuaW5pdENoYXJ0KClcblxuICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwicGF0aC5mb2N1c2xpbmVcIikucmVtb3ZlKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZVwiKS5yZW1vdmUoKVxuICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmJhclwiKS5yZW1vdmUoKVxuICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwicGF0aC5mb2N1c2xpbmVcIikucmVtb3ZlKClcbiAgICB9XG4gIH1cblxuICByZWRyYXdDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5kaW1lbnNpb25zLmZvckVhY2goKGRpbSkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUhpZ2hsaWdodChkaW0pO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXNldENoYW5nZWQoKSB7XG4gICAgaWYodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5zdmcucmVtb3ZlKClcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICB9XG5cbiAgZ2V0R2F1c3NpYW4oZGltKSB7XG4gICAgbGV0IGRhdGEgPSBbXTtcbiAgICBsZXQgcm5kID0gZDMucmFuZG9tVW5pZm9ybSgtNSwgNSk7XG5cbiAgICAvLyBsb29wIHRvIHBvcHVsYXRlIGRhdGEgYXJyYXkgd2l0aFxuICAgIC8vIHByb2JhYmlsaXR5IC0gcXVhbnRpbGUgcGFpcnNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDAwOyBpKyspIHtcbiAgICAgIGxldCBxID0gcm5kKCkgLy8gY2FsYyByYW5kb20gZHJhdyBmcm9tIHVuaWZvcm0gZGlzdFxuICAgICAgbGV0IHAgPSB0aGlzLmdhdXNzaWFuKHEsIHRoaXMuZ2F1c3NfeS5nZXQoZGltKS5pbnZlcnQodGhpcy5jZW50ZXIpLCB0aGlzLmdhdXNzX3NpZ21hKHRoaXMud2VpZ2h0KSkgLy8gY2FsYyBwcm9iIG9mIHJhbmQgZHJhd1xuXG4gICAgICAvLyBTZXQgdmVyeSBsb3cgcHJvYmFiaWxpdHkgdG8gemVyb1xuICAgICAgaWYocCA8IDAuMDAwMSkgcCA9IDA7XG5cbiAgICAgIGxldCBlbCA9IHtcbiAgICAgICAgXCJ5XCI6IHEsXG4gICAgICAgIFwieFwiOiBwXG4gICAgICB9XG4gICAgICBkYXRhLnB1c2goZWwpXG4gICAgfTtcblxuICAgIHRoaXMuZ3JhZGllbnRDb2xvci5kb21haW4oWzAsIGQzLm1heChkYXRhLCB4ID0+IHhbXCJ4XCJdKV0pXG4gICAgLy8gbmVlZCB0byBzb3J0IGZvciBwbG90dGluZ1xuICAgIGRhdGEuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiAoYS55ID4gYi55KSA/IDEgOiAoKGIueSA+IGEueSkgPyAtMSA6IDApOyB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8vdGFrZW4gZnJvbSBKYXNvbiBEYXZpZXMgc2NpZW5jZSBsaWJyYXJ5XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbmRhdmllcy9zY2llbmNlLmpzL1xuICBnYXVzc2lhbih4LCBtZWFuLCBzaWdtYSkge1xuICAgIGxldCBnYXVzc2lhbkNvbnN0YW50ID0gMSAvIE1hdGguc3FydCgyICogTWF0aC5QSSk7XG5cbiAgICB4ID0gKHggLSBtZWFuKSAvIHNpZ21hO1xuICAgIGxldCBnID0gZ2F1c3NpYW5Db25zdGFudCAqIE1hdGguZXhwKC0uNSAqIHggKiB4KSAvIHNpZ21hO1xuXG4gICAgaWYgKGcgPCAwKSB7XG4gICAgICBnID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZztcbiAgfVxuXG4gIHJlc2V0RmlsdGVyKGRpbSkge1xuICAgIHRoaXMuY2hhcnRzLmdldChkaW0pLmZvY3VzLnNlbGVjdEFsbChcInBhdGguZm9jdXNsaW5lXCIpLnJlbW92ZSgpO1xuICAgIGxldCBvdXQgPSBuZXcgTWFwKClcbiAgICB0aGlzLmZpbHRlcnMuc2V0KGRpbSwgbmV3IE1hcCgpKVxuXG4gICAgLy8gVXBkYXRlIGF2ZXJhZ2UgZmlsdGVyXG4gICAgdGhpcy5maWx0ZXJzLmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgIGlmKHYuc2l6ZSA+IDApIHtcbiAgICAgICAgdi5mb3JFYWNoKChpdiwgaWspID0+IHtcbiAgICAgICAgICBpZihvdXQuaGFzKGlrKSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gb3V0LmdldChpaylcblxuICAgICAgICAgICAgb3V0LnNldChpaywgKHZhbHVlICsgaXYpLzIpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3V0LnNldChpaywgaXYpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmJydXNoaW5nID0gb3V0O1xuICB9XG5cbiAgcmVzb2x2ZV9icnVzaGluZyhkaW0sIG5ld19maWx0ZXIpIHtcbiAgICBsZXQgb3V0ID0gbmV3IE1hcCgpXG5cbiAgICB0aGlzLmZpbHRlcnMuc2V0KGRpbSwgbmV3X2ZpbHRlcilcblxuICAgIC8vIFVwZGF0ZSBhdmVyYWdlIGZpbHRlclxuICAgIG5ld19maWx0ZXIuZm9yRWFjaCgodiwgaykgPT4ge1xuICAgICAgbGV0IHRlbXAgPSAwO1xuICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gICAgICB0aGlzLmZpbHRlcnMuZm9yRWFjaCgoaXYsIGlrKSA9PiB7XG4gICAgICAgIGlmIChpdi5zaXplID4gMCkge1xuICAgICAgICAgIHRlbXAgPSB0ZW1wICsgaXYuZ2V0KGspO1xuICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgdGVtcCA9IHRlbXAgLyBjb3VudGVyO1xuXG4gICAgICBvdXQuc2V0KGssIHRlbXApXG4gICAgfSlcblxuICAgIHRoaXMuYnJ1c2hpbmcgPSBvdXQ7XG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gQ29tcGxldGUgZHJhd2luZyBhcmVhXG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QodGhpcy5lbGVtZW50KVxuICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pO1xuXG4gICAgLy8gR2V0IHkgdmFsdWVzXG4gICAgdGhpcy5kaW1lbnNpb25zID0gZDMua2V5cyh0aGlzLmRhdGFbMF1bXCJkYXRhXCJdWzBdKS5maWx0ZXIoKGQpID0+IHtcbiAgICAgIHJldHVybiBkICE9IHRoaXMueF9hdHRyaWJ1dGVcbiAgICB9KTtcblxuICAgIC8vIFNldCBoZWlnaHQgdmFsdWVcbiAgICB0aGlzLmxjX2hlaWdodCA9ICh0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbSAtICgodGhpcy5kaW1lbnNpb25zLmxlbmd0aC0xKSAqIHRoaXMubWFyZ2luLnkpKS90aGlzLmRpbWVuc2lvbnMubGVuZ3RoO1xuICAgIHRoaXMuZm9jdXNfaGVpZ2h0ID0gdGhpcy5sY19oZWlnaHRcblxuICAgIHRoaXMuZm9jdXNfb2Zmc2V0ID0gdGhpcy5sY193aWR0aCArIHRoaXMubWFyZ2luLm1pZGRsZSArIHRoaXMubWFyZ2luLmxlZnQ7XG5cbiAgICAvLyBSZXNldCBjaGFydHMgbWFwXG4gICAgdGhpcy5jaGFydHMgPSBuZXcgTWFwKCk7XG5cbiAgICAvLyBDcmVhdGUgaW5pdGlhbCBjaGFydCBhcmVhc1xuICAgIGxldCBtYXJnaW5faXRlcmF0b3IgPSAwO1xuICAgIHRoaXMuZGltZW5zaW9ucy5tYXAoKGRpbSkgPT4ge1xuICAgICAgLy8gTGluZWNoYXJ0IGFyZWFcbiAgICAgIGxldCBsaW5lY2hhcnQgPSB0aGlzLnN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMubGNfd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMubGNfaGVpZ2h0KVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIiwgXCIgKyAodGhpcy5tYXJnaW4udG9wICsgKHRoaXMuZm9jdXNfaGVpZ2h0ICsgdGhpcy5tYXJnaW4ueSkgKiBtYXJnaW5faXRlcmF0b3IpICsgXCIpXCIpXG4gICAgICAgIC5vbihcImNsaWNrXCIsIChkKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNldEZpbHRlcihkaW0pO1xuICAgICAgICB9KTtcblxuICAgICAgbGV0IGZvY3VzID0gdGhpcy5zdmdcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLmZvY3VzX29mZnNldCArIFwiLCBcIiArICh0aGlzLm1hcmdpbi50b3AgKyAodGhpcy5mb2N1c19oZWlnaHQgKyB0aGlzLm1hcmdpbi55KSAqIG1hcmdpbl9pdGVyYXRvcikgKyBcIilcIilcblxuICAgICAgbWFyZ2luX2l0ZXJhdG9yKys7XG5cbiAgICAgIGZvY3VzXG4gICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy5mb2N1c193aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5mb2N1c19oZWlnaHQpXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcbiAgICAgICAgLm9uKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBzZWxmLmNlbnRlciA9IHNlbGYueS5nZXQoZGltKS5pbnZlcnQoZDMubW91c2UodGhpcylbMV0pO1xuICAgICAgICAgIHNlbGYud2VpZ2h0ID0gZDMubW91c2UodGhpcylbMF07XG4gICAgICAgICAgc2VsZi5jcmVhdGVHYXVzcyhkaW0pO1xuICAgICAgICAgIHNlbGYudXBkYXRlR2F1c3MoZGltKTtcblxuICAgICAgICAgIGxldCBuZXdfZmlsdGVyID0gbmV3IE1hcCgpXG4gICAgICAgICAgc2VsZi5kYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICBuZXdfZmlsdGVyLnNldChcbiAgICAgICAgICAgICAgZFtcImlkXCJdLFxuICAgICAgICAgICAgICBzZWxmLmdyYWRpZW50Q29sb3Ioc2VsZi5nYXVzc2lhbihzZWxmLmdhdXNzX3kuZ2V0KGRpbSkuaW52ZXJ0KGQuZGF0YVtzZWxmLnNlbGVjdGVkX3RpbWVdW2RpbV0pLCBzZWxmLmdhdXNzX3kuZ2V0KGRpbSkuaW52ZXJ0KHNlbGYuY2VudGVyKSwgc2VsZi5nYXVzc19zaWdtYShzZWxmLndlaWdodCkpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzZWxmLnJlc29sdmVfYnJ1c2hpbmcoZGltLCBuZXdfZmlsdGVyKTtcblxuICAgICAgICAgIHNlbGYubW91c2VfZXZlbnQgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHNlbGYuY2VudGVyID0gc2VsZi55LmdldChkaW0pLmludmVydChkMy5tb3VzZSh0aGlzKVsxXSk7XG5cbiAgICAgICAgICAgICAgc2VsZi53ZWlnaHQgPSBkMy5tb3VzZSh0aGlzKVswXTtcbiAgICAgICAgICAgICAgc2VsZi51cGRhdGVHYXVzcyhkaW0pO1xuXG4gICAgICAgICAgICAgIGxldCBuZXdfZmlsdGVyID0gbmV3IE1hcCgpXG5cbiAgICAgICAgICAgICAgc2VsZi5kYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICAgICAgbmV3X2ZpbHRlci5zZXQoXG4gICAgICAgICAgICAgICAgICBkW1wiaWRcIl0sXG4gICAgICAgICAgICAgICAgICBzZWxmLmdyYWRpZW50Q29sb3Ioc2VsZi5nYXVzc2lhbihzZWxmLmdhdXNzX3kuZ2V0KGRpbSkuaW52ZXJ0KGQuZGF0YVtzZWxmLnNlbGVjdGVkX3RpbWVdW2RpbV0pLCBzZWxmLmdhdXNzX3kuZ2V0KGRpbSkuaW52ZXJ0KHNlbGYuY2VudGVyKSwgc2VsZi5nYXVzc19zaWdtYShzZWxmLndlaWdodCkpKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICBzZWxmLnJlc29sdmVfYnJ1c2hpbmcoZGltLCBuZXdfZmlsdGVyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgc2VsZi5tb3VzZV9ldmVudC5vbihcIm1vdXNlbW92ZVwiLCBudWxsKS5vbihcIm1vdXNldXBcIiwgbnVsbCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAubW92ZVRvRnJvbnQoKVxuXG4gICAgICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgICAgIGxpbmVjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMubGNfaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhBeGlzXCIpO1xuXG4gICAgICAgIC8vIHggYXhpcyBsYWJlbFxuICAgICAgICBsaW5lY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIHRoaXMubGNfaGVpZ2h0ICsgMjYpXG4gICAgICAgICAgLmF0dHIoXCJ4XCIsIHRoaXMubGNfd2lkdGggLyAyKVxuICAgICAgICAgIC50ZXh0KHRoaXMueF9hdHRyaWJ1dGUpO1xuXG4gICAgICAgIGxldCBkcmFnID0gZDMuZHJhZygpXG4gICAgICAgICAgLm9uKFwic3RhcnRcIiwgZnVuY3Rpb24oKSB7IGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKCdhY3RpdmUnLHRydWUpOyB9KVxuICAgICAgICAgIC5vbihcImRyYWdcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgaWYoZDMuZXZlbnQueCA+PSAwICYmIGQzLmV2ZW50LnggPD0gc2VsZi5sY193aWR0aCkge1xuICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuc2VsZWN0KFwibGluZVwiKVxuICAgICAgICAgICAgICAgIC5yYWlzZSgpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLCBkMy5ldmVudC54KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieDJcIiwgZDMuZXZlbnQueClcblxuICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuc2VsZWN0KFwiY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgLnJhaXNlKClcbiAgICAgICAgICAgICAgICAuYXR0cihcImN4XCIsIGQzLmV2ZW50LngpXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgY2xvc2VzdCA9IHNlbGYueF92YWx1ZXMucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKE1hdGguYWJzKGN1cnIgLSBzZWxmLnguaW52ZXJ0KGQzLmV2ZW50LngpKSA8IE1hdGguYWJzKHByZXYgLSBzZWxmLnguaW52ZXJ0KGQzLmV2ZW50LngpKSA/IGN1cnIgOiBwcmV2KTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZF90aW1lID0gY2xvc2VzdFxuXG4gICAgICAgICAgICAgIHNlbGYudXBkYXRlQmFycyhkaW0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbigpIHsgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoJ2FjdGl2ZScsZmFsc2UpOyB9KTtcblxuICAgICAgICAvLyBBZGQgdGltZSBzZWxlY3Rpb24gbGluZVxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBsaW5lY2hhcnRcbiAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aW1lLXNlbGVjdG9yXCIpXG4gICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLmxjX3dpZHRoKVxuICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMubGNfd2lkdGgpXG4gICAgICAgICAgLmNhbGwoZHJhZylcblxuICAgICAgICBzZWxlY3Rvci5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgICAgICAgIC5hdHRyKFwieDFcIiwgdGhpcy5sY193aWR0aClcbiAgICAgICAgICAuYXR0cihcInkxXCIsIDApXG4gICAgICAgICAgLmF0dHIoXCJ4MlwiLCB0aGlzLmxjX3dpZHRoKVxuICAgICAgICAgIC5hdHRyKFwieTJcIiwgdGhpcy5sY19oZWlnaHQpO1xuXG4gICAgICAgIHNlbGVjdG9yLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcImJsYWNrXCIpXG4gICAgICAgICAgLmF0dHIoXCJjeFwiLCB0aGlzLmxjX3dpZHRoKVxuICAgICAgICAgIC5hdHRyKFwiY3lcIiwgMClcbiAgICAgICAgICAuYXR0cihcInJcIiwgMTApXG5cbiAgICAgICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICAgICAgZm9jdXMuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmxjX2hlaWdodCArIFwiKVwiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4QXhpc1wiKTtcblxuICAgICAgICAvLyB4IGF4aXMgbGFiZWxcbiAgICAgICAgLy8gZm9jdXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAvLyAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC8vICAgLmF0dHIoXCJ5XCIsIHRoaXMuaGVpZ2h0ICsgMjYpXG4gICAgICAgIC8vICAgLmF0dHIoXCJ4XCIsIHRoaXMud2lkdGggLyAyKVxuICAgICAgICAvLyAgIC50ZXh0KFwiZGF5XCIpO1xuXG4gICAgICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgICAgIGxpbmVjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgICAgLy8geSBheGlzIGxhYmVsXG4gICAgICAgIGxpbmVjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAuYXR0cihcInlcIiwgLTQpXG4gICAgICAgICAgLnRleHQoZGltKTtcblxuICAgICAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgICAgICBmb2N1cy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLmZvY3VzX3dpZHRoICsgXCIsIDApXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgICAgLy8geSBheGlzIGxhYmVsXG4gICAgICAgIGZvY3VzLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgIC5hdHRyKFwieVwiLCAtNClcbiAgICAgICAgICAuYXR0cihcInhcIiwgdGhpcy5mb2N1c193aWR0aClcbiAgICAgICAgICAudGV4dChkaW0pO1xuXG4gICAgICAgIC8vIGZvciBhbGwgY2hhcnRzXG4gICAgICAgIHRoaXMueCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAucmFuZ2UoWzAsIHRoaXMubGNfd2lkdGhdKTtcblxuICAgICAgICB0aGlzLmdhdXNzX3ggPSBkMy5zY2FsZUxpbmVhcigpXG5cbiAgICAgICAgdGhpcy5nYXVzc19zaWdtYSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAucmFuZ2UoWzAuMDAxLCAzXSlcbiAgICAgICAgICAuZG9tYWluKFswLCB0aGlzLmZvY3VzX3dpZHRoXSlcblxuICAgICAgICB0aGlzLmdyYWRpZW50Q29sb3IgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgLnJhbmdlKFswLCAxXSlcblxuICAgICAgICAvLyBmb3IgZWFjaCBjaGFydFxuICAgICAgICBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAucmFuZ2UoW3RoaXMubGNfaGVpZ2h0LCAwXSk7XG5cbiAgICAgICAgdGhpcy55LnNldChkaW0sIHkpXG5cbiAgICAgICAgbGV0IGZvY3VzX3ggPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgLnJhbmdlKFswLCB0aGlzLmZvY3VzX3dpZHRoXSk7XG5cbiAgICAgICAgdGhpcy5mb2N1c194LnNldChkaW0gLCBmb2N1c194KVxuXG4gICAgICAgIGxldCBnYXVzc195ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgIC5kb21haW4oWy01LCA1XSlcblxuICAgICAgICB0aGlzLmdhdXNzX3kuc2V0KGRpbSwgZ2F1c3NfeSlcblxuICAgICAgICAvLyBkZWZpbmUgdGhlIGxpbmVcbiAgICAgICAgbGV0IHZhbHVlbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgIC54KChkKSA9PiB0aGlzLngoZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgICAgICAgLnkoKGQpID0+IHRoaXMueS5nZXQoZGltKShkW2RpbV0pKTtcblxuICAgICAgICB0aGlzLnZhbHVlbGluZS5zZXQoZGltLCB2YWx1ZWxpbmUpXG5cbiAgICAgICAgbGV0IGZvY3VzbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgIC54KChkKSA9PiB0aGlzLmZvY3VzX3guZ2V0KGRpbSkodGhpcy5nYXVzc194KGRbXCJ4XCJdKSkpXG4gICAgICAgICAgLnkoKGQpID0+IHRoaXMueS5nZXQoZGltKSh0aGlzLmdhdXNzX3kuZ2V0KGRpbSkoZFtcInlcIl0pKSk7XG5cbiAgICAgICAgdGhpcy5mb2N1c2xpbmUuc2V0KGRpbSwgZm9jdXNsaW5lKVxuXG4gICAgICAgIC8vIFVwZGF0ZSBheGlzXG4gICAgICAgIGxpbmVjaGFydC5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkpO1xuICAgICAgICBsaW5lY2hhcnQuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55LmdldChkaW0pKSk7XG5cbiAgICAgICAgZm9jdXMuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAgICAgLmNhbGwoZDMuYXhpc1JpZ2h0KHRoaXMueS5nZXQoZGltKSkpO1xuICAgICAgICBmb2N1cy5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMuZm9jdXNfeC5nZXQoZGltKSkudGlja3MoMikpO1xuXG4gICAgICAgIHRoaXMuY2hhcnRzLnNldChkaW0sIHtsaW5lY2hhcnQ6IGxpbmVjaGFydCwgZm9jdXM6IGZvY3VzfSlcblxuICAgICAgICB0aGlzLmZpbHRlcnMuc2V0KGRpbSwgbmV3IE1hcCgpKVxuICAgIH0pXG5cbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZUJhcnMgPSAoZGltKSA9PiB7XG4gICAgbGV0IHlfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5tYXg8YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbZGltXSkpXG4gICAgbGV0IHlfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5taW48YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbZGltXSkpXG5cbiAgICBsZXQgZm9jdXNfZGF0YSA9IDxhbnk+W107XG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGQ6IGFueVtdKSA9PiB7XG4gICAgICBmb2N1c19kYXRhLnB1c2goZFtcImRhdGFcIl1bdGhpcy5zZWxlY3RlZF90aW1lXVtkaW1dKVxuICAgIH0pXG5cbiAgICB0aGlzLmJpbnMgPSBkMy5oaXN0b2dyYW0oKVxuICAgICAgLmRvbWFpbih0aGlzLnkuZ2V0KGRpbSkuZG9tYWluKCkpXG4gICAgICAudGhyZXNob2xkcyhkMy5yYW5nZSh5X21pbiwgeV9tYXgsICh5X21heCAtIHlfbWluKSAvIDIwKSlcbiAgICAgIChmb2N1c19kYXRhKTtcblxuICAgIHRoaXMuZm9jdXNfeC5nZXQoZGltKS5kb21haW4oWzAsIGQzLm1heCh0aGlzLmJpbnMsIChkOiBhbnlbXSkgPT4gZC5sZW5ndGgpXSk7XG5cbiAgICB0aGlzLmNoYXJ0cy5nZXQoZGltKS5mb2N1cy5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy5mb2N1c194LmdldChkaW0pKS50aWNrcygyKSk7XG5cbiAgICB0aGlzLmNoYXJ0cy5nZXQoZGltKS5mb2N1cy5zZWxlY3RBbGwoXCIuYmFyXCIpLnJlbW92ZSgpO1xuICAgIGxldCBmb2N1c19jaGFydCA9IHRoaXMuY2hhcnRzLmdldChkaW0pLmZvY3VzLnNlbGVjdEFsbChcInJlY3QuYmFyc1wiKVxuICAgICAgLmRhdGEodGhpcy5iaW5zKVxuXG4gICAgLy8gUmVtb3ZlIGJhcnNcbiAgICBmb2N1c19jaGFydC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAvLyBBZGQgYmFyc1xuICAgIGZvY3VzX2NoYXJ0LmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQpID0+IHtcbiAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLnkuZ2V0KGRpbSkoZC54MSkgKyBcIilcIjtcbiAgICAgIH0pXG4gICAgICAuYXR0cihcIndpZHRoXCIsIChkKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvY3VzX3guZ2V0KGRpbSkoZC5sZW5ndGgpOyB9KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMueS5nZXQoZGltKShkLngwKSAtIHRoaXMueS5nZXQoZGltKShkLngxKSAtIDE7XG4gICAgICB9KVxuICAgICAgLm1vdmVUb0JhY2soKTtcblxuICAgICAgaWYodGhpcy5maWx0ZXJzLmdldChkaW0pLnNpemUgPiAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlR2F1c3MoZGltKTtcblxuICAgICAgICBsZXQgbmV3X2ZpbHRlciA9IG5ldyBNYXAoKVxuXG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgIG5ld19maWx0ZXIuc2V0KFxuICAgICAgICAgICAgZFtcImlkXCJdLFxuICAgICAgICAgICAgdGhpcy5ncmFkaWVudENvbG9yKHRoaXMuZ2F1c3NpYW4odGhpcy5nYXVzc195LmdldChkaW0pLmludmVydChkLmRhdGFbdGhpcy5zZWxlY3RlZF90aW1lXVtkaW1dKSwgdGhpcy5nYXVzc195LmdldChkaW0pLmludmVydCh0aGlzLmNlbnRlciksIHRoaXMuZ2F1c3Nfc2lnbWEodGhpcy53ZWlnaHQpKSlcbiAgICAgICAgICApXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5yZXNvbHZlX2JydXNoaW5nKGRpbSwgbmV3X2ZpbHRlcik7XG5cbiAgICAgICAgdGhpcy51cGRhdGVIaWdobGlnaHQoZGltKVxuICAgICAgfVxuICB9XG5cbiAgdXBkYXRlSGlnaGxpZ2h0KGRpbSkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuY2hhcnRzLmdldChkaW0pLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIilcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkW1wiaGlnaGxpZ2h0XCJdXG4gICAgICB9KVxuXG4gICAgdGhpcy5jaGFydHMuZ2V0KGRpbSkuZm9jdXMuc2VsZWN0QWxsKFwicmVjdC5iYXJcIilcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBmdW5jdGlvbihiKSB7XG4gICAgICAgIGxldCBvcGFjaXR5ID0gMDtcblxuICAgICAgICBzZWxmLmRhdGEuZm9yRWFjaCgoZDogYW55W10pID0+IHtcbiAgICAgICAgICBsZXQgdmFsdWUgPSBkW1wiZGF0YVwiXVtzZWxmLnNlbGVjdGVkX3RpbWVdW2RpbV07XG5cbiAgICAgICAgICBpZih2YWx1ZSA+IGIueDAgJiYgdmFsdWUgPCBiLngxKSB7XG4gICAgICAgICAgICBvcGFjaXR5ICs9IGRbXCJoaWdobGlnaHRcIl1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoYi5sZW5ndGggPCAxKSByZXR1cm4gMDtcblxuICAgICAgICByZXR1cm4gb3BhY2l0eSAvIGIubGVuZ3RoXG4gICAgICB9KVxuICB9XG5cbiAgY3JlYXRlR2F1c3MoZGltKSB7XG4gICAgbGV0IGxpbmVfZGF0YSA9IHRoaXMuZ2V0R2F1c3NpYW4oZGltKTtcbiAgICB0aGlzLmdhdXNzX3gucmFuZ2UodGhpcy5mb2N1c194LmdldChkaW0pLmRvbWFpbigpKS5kb21haW4oZDMuZXh0ZW50KGxpbmVfZGF0YSwgZCA9PiBkW1wieFwiXSkpXG5cbiAgICB0aGlzLmNoYXJ0cy5nZXQoZGltKS5mb2N1cy5zZWxlY3RBbGwoXCJwYXRoLmZvY3VzbGluZVwiKS5yZW1vdmUoKTtcbiAgICBsZXQgZm9jdXNfbGluZSA9IHRoaXMuY2hhcnRzLmdldChkaW0pLmZvY3VzLnNlbGVjdEFsbChcInBhdGguZm9jdXNsaW5lXCIpXG4gICAgICAuZGF0YShbbGluZV9kYXRhXSlcblxuICAgIC8vIERpc3RyaWJ1dGlvbiBsaW5lXG4gICAgZm9jdXNfbGluZS5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImZvY3VzbGluZVwiKVxuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB7dGhpcy5mb2N1c2xpbmUuZ2V0KGRpbSkoZCl9KVxuICAgICAgLm1vdmVUb0Zyb250KCk7XG4gIH1cblxuICB1cGRhdGVHYXVzcyhkaW0pIHtcbiAgICBsZXQgbGluZV9kYXRhID0gdGhpcy5nZXRHYXVzc2lhbihkaW0pO1xuXG4gICAgLy8gVXBkYXRlIHggYXhpcyBkb21haW5cbiAgICB0aGlzLmdhdXNzX3gucmFuZ2UodGhpcy5mb2N1c194LmdldChkaW0pLmRvbWFpbigpKS5kb21haW4oZDMuZXh0ZW50KGxpbmVfZGF0YSwgZCA9PiBkW1wieFwiXSkpXG5cbiAgICAvLyBVcGRhdGUgbGluZVxuICAgIHRoaXMuY2hhcnRzLmdldChkaW0pLmZvY3VzLnNlbGVjdEFsbChcInBhdGguZm9jdXNsaW5lXCIpXG4gICAgICAuZGF0YShbbGluZV9kYXRhXSlcbiAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4gdGhpcy5mb2N1c2xpbmUuZ2V0KGRpbSkoZCkpXG4gICAgICAubW92ZVRvRnJvbnQoKTtcbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0KCkge1xuICAgIC8vIFVwZGF0ZSBkb21haW5zXG4gICAgbGV0IHhfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5tYXg8YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgIGxldCB4X21pbiA9IGQzLm1pbih0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWluPGFueSwgYW55PihhcnJheVtcImRhdGFcIl0sIChkKSA9PiBkW3RoaXMueF9hdHRyaWJ1dGVdKSlcbiAgICB0aGlzLnguZG9tYWluKFt4X21pbiwgeF9tYXhdKTtcblxuICAgIHRoaXMueF92YWx1ZXMgPSB0aGlzLmRhdGFbMF1bXCJkYXRhXCJdLm1hcCgoZCkgPT4ge1xuICAgICAgcmV0dXJuIGRbdGhpcy54X2F0dHJpYnV0ZV1cbiAgICB9KVxuXG4gICAgdGhpcy5kaW1lbnNpb25zLm1hcCgoZGltKSA9PiB7XG4gICAgICBsZXQgeV9tYXggPSBkMy5tYXgodGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1heDxhbnksIGFueT4oYXJyYXlbXCJkYXRhXCJdLCAoZCkgPT4gZFtkaW1dKSlcbiAgICAgIGxldCB5X21pbiA9IGQzLm1pbih0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWluPGFueSwgYW55PihhcnJheVtcImRhdGFcIl0sIChkKSA9PiBkW2RpbV0pKVxuXG4gICAgdGhpcy5zZWxlY3RlZF90aW1lID0geF9tYXg7XG5cbiAgICAgIGxldCBmb2N1c19kYXRhID0gPGFueT5bXTtcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChkOiBhbnlbXSkgPT4ge1xuICAgICAgICBmb2N1c19kYXRhLnB1c2goZFtcImRhdGFcIl1bdGhpcy5zZWxlY3RlZF90aW1lXVtkaW1dKVxuICAgICAgfSlcblxuICAgICAgdGhpcy55LmdldChkaW0pLmRvbWFpbihbeV9taW4sIHlfbWF4XSk7XG4gICAgICB0aGlzLmdhdXNzX3kuZ2V0KGRpbSkucmFuZ2UodGhpcy55LmdldChkaW0pLmRvbWFpbigpKVxuXG4gICAgICB0aGlzLmJpbnMgPSBkMy5oaXN0b2dyYW0oKVxuICAgICAgICAuZG9tYWluKHRoaXMueS5nZXQoZGltKS5kb21haW4oKSlcbiAgICAgICAgLnRocmVzaG9sZHMoZDMucmFuZ2UoeV9taW4sIHlfbWF4LCAoeV9tYXggLSB5X21pbikgLyAyMCkpXG4gICAgICAgIChmb2N1c19kYXRhKTtcblxuICAgICAgdGhpcy5mb2N1c194LmdldChkaW0pLmRvbWFpbihbMCwgZDMubWF4KHRoaXMuYmlucywgKGQ6IGFueVtdKSA9PiBkLmxlbmd0aCldKTtcblxuICAgICAgLy8gU2VsZWN0IGNoYXJ0XG4gICAgICB0aGlzLmNoYXJ0cy5nZXQoZGltKS5saW5lY2hhcnQuc2VsZWN0QWxsKFwicGF0aC5saW5lXCIpLnJlbW92ZSgpO1xuICAgICAgbGV0IGNoYXJ0ID0gdGhpcy5jaGFydHMuZ2V0KGRpbSkubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZVwiKVxuICAgICAgICAuZGF0YSh0aGlzLmRhdGEpXG5cbiAgICAgIHRoaXMuY2hhcnRzLmdldChkaW0pLmZvY3VzLnNlbGVjdEFsbChcIi5iYXJcIikucmVtb3ZlKCk7XG4gICAgICBsZXQgZm9jdXNfY2hhcnQgPSB0aGlzLmNoYXJ0cy5nZXQoZGltKS5mb2N1cy5zZWxlY3RBbGwoXCJyZWN0LmJhcnNcIilcbiAgICAgICAgLmRhdGEodGhpcy5iaW5zKVxuXG4gICAgICAvLyBVcGRhdGUgYXhpc1xuICAgICAgdGhpcy5jaGFydHMuZ2V0KGRpbSkubGluZWNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkpO1xuICAgICAgdGhpcy5jaGFydHMuZ2V0KGRpbSkubGluZWNoYXJ0LnNlbGVjdEFsbChcIi55QXhpc1wiKVxuICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnkuZ2V0KGRpbSkpKTtcblxuICAgICAgdGhpcy5jaGFydHMuZ2V0KGRpbSkuZm9jdXMuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNSaWdodCh0aGlzLnkuZ2V0KGRpbSkpKTtcbiAgICAgIHRoaXMuY2hhcnRzLmdldChkaW0pLmZvY3VzLnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMuZm9jdXNfeC5nZXQoZGltKSkudGlja3MoMikpO1xuXG4gICAgICAvLyBMaW5lY2hhcnRcbiAgICAgIGNoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgY2hhcnQuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAuYXR0cihcImRcIiwgKGQpID0+IHRoaXMudmFsdWVsaW5lLmdldChkaW0pKGRbXCJkYXRhXCJdKSk7XG5cbiAgICAgIC8vIEJhcmNoYXJ0XG4gICAgICAvLyBSZW1vdmUgYmFyc1xuICAgICAgZm9jdXNfY2hhcnQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBBZGQgYmFyc1xuICAgICAgZm9jdXNfY2hhcnQuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMueS5nZXQoZGltKShkLngxKSArIFwiKVwiO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIChkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZm9jdXNfeC5nZXQoZGltKShkLmxlbmd0aCk7IH0pXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMueS5nZXQoZGltKShkLngwKSAtIHRoaXMueS5nZXQoZGltKShkLngxKSAtIDE7XG4gICAgICAgIH0pXG4gICAgICAgIC5tb3ZlVG9CYWNrKCk7XG4gICAgfSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
        Gauss.prototype.loadExample = function () {
            var _this = this;
            fetch("../../data.json").then(function (r) { return r.json(); })
                .then(function (data) {
                _this.data = data;
                _this.load();
            })
                .catch(function (e) { return console.log("Error"); });
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
                    this.selected_dim = this.dimensions[0];
                    this.dim_not_selected = false;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDO3dCQUMxRCxNQUFNLENBQUMsQ0FBQyxDQUFBO29CQUNWLENBQUMsQ0FBQyxDQUFDO29CQUVILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztvQkFFOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQXpLVztZQUFYLDhCQUFVOzt3REFBbUI7UUFHbEI7WUFBWCw4QkFBVTs7cURBQWdCO1FBWGhCLEtBQUs7WUFEakIsOEJBQVU7V0FDRSxLQUFLLENBa0xqQjtRQUFELFlBQUM7S0FsTEQsQUFrTEMsSUFBQTtJQWxMWSxzQkFBSyIsImZpbGUiOiJnYXVzcy9nYXVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QsIG9ic2VydmFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIEdhdXNzIHtcbiAgZmlsZTtcbiAgZGF0YTtcbiAgZGltZW5zaW9ucyA9IFtdO1xuICBzZWxlY3RlZF9kaW0gPSBcIlwiO1xuICBkaW1fbm90X3NlbGVjdGVkID0gdHJ1ZTtcbiAgZGF0YV9ub3RfbG9hZGVkID0gdHJ1ZTtcblxuICBAb2JzZXJ2YWJsZSBicnVzaGluZ19wYXJhbGxlbDtcbiAgcmVkcmF3X3BhcmFsbGVsO1xuXG4gIEBvYnNlcnZhYmxlIGJydXNoaW5nX2xpbmVzO1xuICByZWRyYXdfbGluZXM7XG5cbiAgcmVzZXRDaGFydDtcblxuICBpbkZpbHRlciA9IFtdXG5cbiAgZGF0YV9wYXJhbGxlbCA9IDxhbnlbXT5bXVxuICBkYXRhX2xpbmVzID0gPGFueVtdPltdXG4gIGRhdGFfbGluZXNfb3JpZ2luYWwgPSA8YW55W10+W11cbiAgZGF0YV9sZW5ndGggPSAwO1xuXG4gIGN1cnJlbnRfZmlsdGVyID0gbmV3IFNldCgpO1xuXG4gIHBvc2l0aW9uID0gJ3JpZ2h0JztcbiAgdHJpZ2dlciA9ICdtb3VzZW92ZXInO1xuXG4gIHRvZ2dsZWQob3Blbikge1xuICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb3BlbmVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbG9zZWQnKTtcbiAgICAgIH1cbiAgfVxuXG4gIGZpbGVTZWxlY3RlZCgpIHtcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBsZXQgZmlsZSA9IHRoaXMuZmlsZVswXTtcblxuICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgIHRoaXMubG9hZCgpXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICB9XG5cbiAgbG9hZEV4YW1wbGUoKSB7XG4gICAgZmV0Y2goXCIuLi8uLi9kYXRhLmpzb25cIikudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICAgICAgdGhpcy5sb2FkKClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhcIkVycm9yXCIpKVxuICB9XG5cbiAgc2VsZWN0RGltKGRpbSkge1xuICAgIHRoaXMuc2VsZWN0ZWRfZGltID0gZGltO1xuICAgIHRoaXMuZGltX25vdF9zZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmlzdWFsaXplKCkge1xuICAgIHRoaXMucmVzZXRDaGFydCA9IHRoaXMucmVzZXRDaGFydCA9PSAwID8gMSA6IDA7XG5cbiAgICB0aGlzLmRhdGFfcGFyYWxsZWwubGVuZ3RoID0gMFxuICAgIHRoaXMuZGF0YV9saW5lc19vcmlnaW5hbC5sZW5ndGggPSAwXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGQgPSB0aGlzLmRhdGFbaV1cblxuICAgICAgdGhpcy5kYXRhX3BhcmFsbGVsLnB1c2goe1xuICAgICAgICBcImlkXCI6IGksXG4gICAgICAgIFwiaGlnaGxpZ2h0XCI6IDAsXG4gICAgICAgIFwiZGF0YVwiOiBkLnBhcmFtc1xuICAgICAgfSlcblxuICAgICAgdGhpcy5kYXRhX2xpbmVzX29yaWdpbmFsLnB1c2goe1xuICAgICAgICBcImlkXCI6IGksXG4gICAgICAgIFwiaGlnaGxpZ2h0XCI6IDAsXG4gICAgICAgIFwiZGF0YVwiOiBkLmRhdGFcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5kYXRhX2xlbmd0aCA9IHRoaXMuZGF0YV9saW5lc19vcmlnaW5hbC5sZW5ndGg7XG4gICAgdGhpcy5maWx0ZXJPdXREYXRhKFtdKVxuICB9XG5cbiAgYnJ1c2hpbmdfbGluZXNDaGFuZ2VkKCkge1xuICAgIHRoaXMudXBkYXRlT3V0RGF0YSh0aGlzLmJydXNoaW5nX2xpbmVzKTtcbiAgICB0aGlzLnVwZGF0ZUluRGF0YSh0aGlzLmJydXNoaW5nX2xpbmVzKTtcbiAgfVxuXG4gIGJydXNoaW5nX3BhcmFsbGVsQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnVwZGF0ZVBhcmFsbGVsRGF0YSh0aGlzLmJydXNoaW5nX3BhcmFsbGVsKTtcbiAgICB0aGlzLmZpbHRlck91dERhdGEodGhpcy5icnVzaGluZ19wYXJhbGxlbCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU91dERhdGEobWFwcGluZykge1xuICAgIC8vIFNldCBoaWdobGlnaHQgY29sb3JzXG4gICAgdGhpcy5kYXRhX2xpbmVzLmZvckVhY2goeCA9PiB7XG4gICAgICB4W1wiaGlnaGxpZ2h0XCJdID0gbWFwcGluZy5nZXQoeFtcImlkXCJdKVxuICAgIH0pXG5cbiAgICB0aGlzLnJlZHJhd19saW5lcyA9IHRoaXMucmVkcmF3X2xpbmVzID09IDAgPyAxIDogMDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSW5EYXRhKG1hcHBpbmcpIHtcbiAgICBpZiAodGhpcy5pbkZpbHRlci5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmRhdGFfcGFyYWxsZWxcbiAgICAgICAgLmZpbHRlcih4ID0+IHRoaXMuaW5GaWx0ZXIuaW5jbHVkZXMoeFtcImlkXCJdKSlcbiAgICAgICAgLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IG1hcHBpbmcuZ2V0KHhbXCJpZFwiXSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmRhdGFfcGFyYWxsZWxcbiAgICAgICAgLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IG1hcHBpbmcuZ2V0KHhbXCJpZFwiXSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZHJhd19wYXJhbGxlbCA9IHRoaXMucmVkcmF3X3BhcmFsbGVsID09IDAgPyAxIDogMDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUGFyYWxsZWxEYXRhKGlkcykge1xuICAgIHRoaXMuaW5GaWx0ZXIgPSBpZHM7XG5cbiAgICBpZiAoaWRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbC5mb3JFYWNoKHggPT4ge1xuICAgICAgICBpZiAoaWRzLmluY2x1ZGVzKHhbXCJpZFwiXSkpIHtcbiAgICAgICAgICB4W1wiaGlnaGxpZ2h0XCJdID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB4W1wiaGlnaGxpZ2h0XCJdID0gMDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmRhdGFfcGFyYWxsZWwuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IDE7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVkcmF3X3BhcmFsbGVsID0gdGhpcy5yZWRyYXdfcGFyYWxsZWwgPT0gMCA/IDEgOiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJPdXREYXRhKGlkcykge1xuICAgIGlmIChpZHMubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IGhpZ2hsaWdodF9saXN0ID0gbmV3IFNldChpZHMpO1xuXG4gICAgICB0aGlzLmRhdGFfbGluZXMubGVuZ3RoID0gMFxuXG4gICAgICB0aGlzLmRhdGFfbGluZXMucHVzaCguLi50aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwuZmlsdGVyKHggPT4gaGlnaGxpZ2h0X2xpc3QuaGFzKHhbXCJpZFwiXSkpKVxuXG4gICAgICAvLyBTYXZlIGN1cnJlbnQgZmlsdGVyXG4gICAgICB0aGlzLmN1cnJlbnRfZmlsdGVyID0gaGlnaGxpZ2h0X2xpc3Q7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kYXRhX2xpbmVzLmxlbmd0aCA9IDBcbiAgICAgIHRoaXMuZGF0YV9saW5lcy5wdXNoKC4uLnRoaXMuZGF0YV9saW5lc19vcmlnaW5hbClcbiAgICB9XG4gIH1cblxuICBsb2FkKCkge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKFwicGFyYW1zXCIgaW4gdGhpcy5kYXRhWzBdICYmIFwiZGF0YVwiIGluIHRoaXMuZGF0YVswXSkge1xuICAgICAgICAvLyBHZXQgeSB2YWx1ZXNcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZDMua2V5cyh0aGlzLmRhdGFbMF1bXCJkYXRhXCJdWzBdKS5maWx0ZXIoKGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gZFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkX2RpbSA9IHRoaXMuZGltZW5zaW9uc1swXTtcbiAgICAgICAgdGhpcy5kaW1fbm90X3NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kYXRhX25vdF9sb2FkZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"ion-rangeslider/css/ion.rangeSlider.css\"></require><require from=\"ion-rangeslider/css/ion.rangeSlider.skinHTML5.css\"></require><require from=\"./app.css\"></require><div class=\"container\" style=\"width:100%\"><router-view></router-view></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "/* body { padding-top: 70px; } */\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n  margin: 20px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n"; });
define('text!gauss/gauss.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/line-chart-gauss\"></require><require from=\"../charts/line-charts\"></require><require from=\"../charts/parallel-coordinates-gauss\"></require><h2>Analyze Input-Output Models</h2><span>Brush and link input parameters and output values.</span><hr><div class=\"row\"><div class=\"col-md-4\"><div class=\"btn-group\"><button style=\"height:35px\" class=\"btn btn-default\" aubs-popover=\"title: Data Format;\n                                                        body:[{\n                                                          data: [{<br/>\n                                                            x: 0,<br/>\n                                                            y1: 1,<br/>\n                                                            y2: 3,<br/>\n                                                            ...<br/>\n                                                          }, {}, ...]<br/>\n                                                          params: {<br/>\n                                                            a: 1,<br/>\n                                                            b: 2,<br/>\n                                                            ...<br/>\n                                                          }\n                                                        }, {}, ...];\n                                                        position.bind: position;\n                                                        trigger.bind: trigger;\n                                                        on-toggle.call:toggled(open)\"><i class=\"fas fa-info-circle fa-lg\"></i></button> <input style=\"height:35px\" class=\"btn btn-default\" type=\"file\" accept=\"*.json\" change.delegate=\"fileSelected()\" files.bind=\"file\"> <button click.delegate=\"loadExample()\" style=\"height:35px\" class=\"btn btn-default\" aubs-popover=\"title: Load Example Dataset;\n                                                        body: SIR - Model;\n                                                        position.bind: position;\n                                                        trigger.bind: trigger;\n                                                        on-toggle.call:toggled(open)\"><i class=\"fas fa-database fa-lg\"></i></button></div><br><div class=\"btn-group dropdown\" aubs-dropdown=\"auto-close: 'Always'; on-toggle.call: toggled(state)\"><button disabled.bind=\"data_not_loaded\" class=\"btn btn-default dropdown-toggle\" aubs-dropdown-toggle>X-Axis: ${selected_dim} <span class=\"caret\"></span></button><ul class=\"dropdown-menu dropdown-menu-left\"><li repeat.for=\"dim of dimensions\"><a click.delegate=\"selectDim(dim)\">${dim}</a></li></ul></div><button disabled.bind=\"dim_not_selected\" class=\"btn btn-success\" click.delegate=\"visualize()\">Visualize</button><div style=\"width:100%;height:500px\"><parallel-coordinates-gauss brushing.bind=\"brushing_parallel\" redraw.bind=\"redraw_parallel\" reset.bind=\"resetChart\" data.bind=\"data_parallel\"></parallel-coordinates-gauss></div></div><div class=\"col-md-8\"><div class=\"col-md-6\" style=\"width:100%;height:800px\"><line-charts x_attribute.bind=\"selected_dim\" brushing.bind=\"brushing_lines\" redraw.bind=\"redraw_lines\" reset.bind=\"resetChart\" data.bind=\"data_lines\"></line-charts></div></div></div><div></div></template>"; });
define('text!gauss/chart.css', ['module'], function(module) { module.exports = ".background path {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.foreground path {\n  fill: none;\n  stroke: steelblue;\n}\n\n.brush .extent {\n  fill-opacity: .3;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.time-selector {\n  cursor: all-scroll;\n}\n\n.time-selector:hover {\n  stroke: steelblue;\n  stroke-width: 2px;\n}\n\n\n.axis line,\n.axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.axis text {\n  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 1.5px;\n  shape-rendering: crispEdges;\n}\n\n.focusline {\n  fill: none;\n  stroke: black;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n}\n\n.line.highlight {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n}\n\n.line.background {\n  fill: none;\n  stroke: #ddd;\n  stroke-width: 2px;\n  opacity: 0.5;\n  shape-rendering: crispEdges;\n}\n\n.focus_element {\n  fill: steelblue;\n  opacity: 0.1;\n}\n\nrect.bar {\n  fill: steelblue;\n  outline-width: thin;\n  outline-style: solid;\n  outline-color: #c7c7c7;\n}\n"; });
//# sourceMappingURL=app-bundle.js.map