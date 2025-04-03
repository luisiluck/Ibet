class ShopItem {
    private buyButton: string = 'button'

    private wrappedElement: Cypress.Chainable;

    constructor(wrappedElement: Cypress.Chainable) {
        this.wrappedElement = wrappedElement;
    }

    select() {
        this.wrappedElement.find(this.buyButton).click();
    }
}
export default ShopItem;