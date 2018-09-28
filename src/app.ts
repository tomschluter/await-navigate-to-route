import {Router, RouterConfiguration} from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Index';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('home'), title: 'Home' },
      { route: 'contact', moduleId: PLATFORM.moduleName('contact'), name: 'Contact' },
      { route: 'faq', moduleId: PLATFORM.moduleName('faq'), name: 'Faq' }
    ]);

    this.router = router;
  }
}
