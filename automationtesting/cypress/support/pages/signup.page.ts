import BasePage from "./base.page";
import { url } from "../utils/commons"

@url('/?modal=%2Fen%2Faccount%2Fsign-up')
class SignupPage extends BasePage{

    private email = 'input[type=email]'
    private password = 'input[type=password]'
    private continue = '[data-v-test-id=step1-submit]'
    private firstName = '[name=firstName]'
    private lastName = '[name=lastName]'
    private male = '[name=male]'
    private female = '[name=female]'
    private day = '[placeholder=Day]'
    private month = '[placeholder=Month]'
    private year = '[placeholder=Year]'
    private address = '[name=adress]'
    private postCode = '[name=postcode]'
    private phone = "[placeholder='Mobile number']"
    private agree = '#agreeAllCheckbox'
    private submit = 'data-v-test-id=step2-submit'


    private get wrapper(){
        return cy.get('magic-ui-modal')
    }

    get emailField(){
        return this.wrapper.find(this.email)
    }

    get passwordField(){
        return this.wrapper.find(this.password)
    }

    get continueButton(){
        cy.wait(1000)
        return this.wrapper.find(this.continue)
    }

    performSignup(data){
        Object.entries(data).forEach(([k,v]) =>{
            this.wrapper.find(this[k]).then( el =>{
                if (v === 'click'){
                    el[0].click()
                } else if (v === 'check'){
                    el[0].check()
                }else{
                    el[0].type
                }
            }).type(v as string)
        })
    }
}

export default new SignupPage()