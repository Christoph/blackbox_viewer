import {Router, RouterConfiguration} from "aurelia-router"

export class App {
  router = Router;

  configureRouter(config: RouterConfiguration, router) {
      config.title = "Improve";
      config.map([
        { route: "", moduleId: "gauss/gauss", nav: true, title: "Blackbox Viewer", name: "viewer" },
      ]);

      this.router = router;
  }
}
