import { config } from "chai";
import CookiesNotification from "./components/cookiesNotification";

export default abstract class BasePage {

  private url: string = '/';

  /**
   * Custom command to initialize the page
   * @param options - Options for the visit command
   * @example cy.init('https://example.com', { auth: { username: 'user', password: 'pass' } })
   */
  init(options?: Cypress.VisitOptions) {
    options = options || {} as Cypress.VisitOptions;
    options.url = this.url;
    cy.visit(options).then(() => {
        CookiesNotification.acceptCookies();
    });
  }

  visit() {
    cy.visit(this.url)
  }

}