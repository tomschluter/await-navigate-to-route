import { autoinject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';

@autoinject(Router)
export class Faq {

  constructor(private router: Router) {}

  async activate() {
    // This doesn't work.. this will cause the application to hang
    await this.router.navigateToRoute('Contact');
  }
}
