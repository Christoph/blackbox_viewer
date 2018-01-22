import {Router, RouterConfiguration} from "aurelia-router"

export class App {
  router = Router;

  configureRouter(config: RouterConfiguration, router) {
      config.title = "Improve";
      config.map([
          // { route: "", moduleId: "empty/no-selection", nav: true, title: "Select" },
          // { route: "abb/", moduleId: "abbvie/abb", nav: false, title: "Abb", name: "abb" },
          // { route: "det/", moduleId: "details/details", nav: false, title: "Details", name: "det" },
          // { route: "vpsa/", moduleId: "vpsa/vpsa", nav: true, title: "SIR - Classic Brushing", name: "vpsa" },
        { route: "", moduleId: "gauss/gauss", nav: true, title: "SIR - New Brushing", name: "sir" },
        // { route: "sir_hist/", moduleId: "gauss_hist/gauss", nav: true, title: "SIR - New Brushing - Histogram", name: "sir" },
        // { route: "spatialsirclassic/", moduleId: "spatial_classic/epidemics", nav: true, title: "Spatial SIR - Classic Brushing", name: "sir" },
        // { route: "spatialsir/", moduleId: "spatial_sir/epidemics", nav: true, title: "Spatial SIR - New Brushing", name: "sir" },
        // { route: "spatialsircolor/", moduleId: "colormap/epidemics", nav: true, title: "Spatial SIR - Colormap", name: "sir" },
        //   { route: "drift/", moduleId: "drift/drift", nav: true, title: "Genetic Drift", name: "drift" },
        //   { route: "migration/", moduleId: "spatial_migration/migration", nav: true, title: "Spatial Migration", name: "migration" },
      ]);

      this.router = router;
  }
}
