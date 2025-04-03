import BasePage from "./base.page"

class HomePage extends BasePage {

    private get navbar() {
        return cy.get('.top-navigation');
    }
    
    get navPromotionsButton() {
        return this.navbar.find('a[href="/en/promotions"]');
    }
}

export default new HomePage();