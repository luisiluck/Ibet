export default abstract class BasePage {

  private url: string = '/';

  visit(options?: Cypress.VisitOptions) {
    cy.visit(this.url, options)
  }

}