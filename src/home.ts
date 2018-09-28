import { autoinject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';

@autoinject(Router)
export class Home {

  constructor(private router: Router) {}

  moveToContact() {
    this.router.navigateToRoute('Contact');
  }

  // Here the await works just fine..
  async moveToContactWithAwait(): Promise<void> {
    await this.router.navigateToRoute('Contact');
  }

  moveToFaq() {
    this.router.navigateToRoute('Faq');
  }
}
