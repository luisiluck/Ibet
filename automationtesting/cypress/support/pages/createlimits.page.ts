import BasePage from "./base.page";
import { url } from "../utils/commons";

@url('/account/responsible-gaming/create-limits')
class CreateLimitsPage extends BasePage{


    private get wrapper(){
        return cy.get('.create-limits')
    }
    
    limitTypeSelect(limitType: string) {
        this.wrapper.find('select').select(limitType)
    }

    periodSelect(period: string) {
        this.wrapper.contains(period).find('[type=radio]').check()
    }

    setAmout(amount: string) {
        this.wrapper.find('input[placeholder="Amount"]').type(amount)
    }

    submit() {
        this.wrapper.find('button').click()
    }
}
export default new CreateLimitsPage();