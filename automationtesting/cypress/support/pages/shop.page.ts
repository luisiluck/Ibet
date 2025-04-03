import { url } from '../utils/commons';
import BasePage from './base.page';
import ShopItem from './components/shopItem';

@url('/shop')
class ShopPage extends BasePage {

    private shopItem : string = 'magic-shop-item';
    private shopModal : string = 'magic-shop-details-modal';

    getShopItem(index: number): ShopItem {
        return new ShopItem(cy.get(this.shopItem).eq(index));
    }

    buySelectedItem(){
        cy.get(this.shopModal).find('magic-ui-button').click()
    }
}
export default new ShopPage();
