class CookiesNotification {
  acceptCookies() {
    cy.get("[part='cookie-button']")
    .click()
    .log('Accepted cookies');
  }
}

export default new CookiesNotification();