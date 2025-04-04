import BasePage from "./base.page";
import { url } from "../utils/commons"
import 'cypress-wait-until';

@url('/?modal=%2Fen%2Faccount%2Fsign-up')
class SignupPage extends BasePage{

    private email = 'input[type=email]'
    private password = 'input[type=password]'
    private continue = '[data-v-test-id=step1-submit]:not([disabled])'
    private continueDisabled = '[data-v-test-id=step1-submit][disabled]'
    private firstName = 'input[name=firstName]'
    private lastName = 'input[name=lastName]'
    private male = 'input[name=male]'
    private female = 'input[name=female]'
    private day = 'input[placeholder=Day]'
    private month = 'input[placeholder=Month]'
    private year = 'input[placeholder=Year]'
    private address = 'input[name=address]'
    private city = 'input[name=city]'
    private postCode = 'input[name=postcode]'
    private phone = "input[placeholder='Mobile number']"
    private agree = 'input#agreeAllCheckbox'
    private submit = '[data-v-test-id=step2-submit]:not([disabled])'
    private submitDisabled = '[data-v-test-id=step2-submit][disabled]'


    private get wrapper(){
        return cy.get('magic-ui-modal')
    }

    get continueButtonDisabled(){
        return this.wrapper.find(this.continueDisabled, {timeout: 2000})
    }

    get continueButton(){
        return this.wrapper.find(this.continue, {timeout: 2000})
    }

    get submitButtonDisabled(){
        cy.scrollTo('top')
        return this.wrapper.find(this.submitDisabled, {timeout: 2000})
    }
    get submitButton(){
        return this.wrapper.find(this.submit, {timeout: 2000})
    }

    performSignup(data){
        Object.entries<string>(data).forEach(([k,v]) =>{
            if (k === 'gender'){
                k = v;
                v = 'check';
            }
            let el = this.wrapper.find(this[k])
            if (v === 'click'){
                el.click()
            } else if (v === 'check'){
                el.check()
            }else if (v){ 
                el.type(v as string)
            }
        })
    }
}

export default new SignupPage()