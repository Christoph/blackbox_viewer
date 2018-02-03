import {Aurelia} from 'aurelia-framework'
import environment from './environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin("aurelia-computed")
    .plugin("d3-extended")
    .plugin("d3-random")
    .plugin("d3-color")
    .plugin("d3-interpolate")
    .plugin("d3-scale-chromatic")
    .plugin("aurelia-bootstrap")
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
