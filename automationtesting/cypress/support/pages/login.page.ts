import { url } from "../utils/commons";
import BasePage from "./base.page"

@url('/?modal=%2Fen%2Faccount%2Flogin')
class LoginPage extends BasePage {
  private usernameInput = '#email';
  private passwordInput = '[name=password]';
  private loginButton = '[test-id=login-form-submit]';

  constructor() {
    super();
  }

  public visitLoginPage(): void {
    cy.visit('/login');
  }

  public enterUsername(username: string): void {
    cy.get(this.usernameInput).type(username);
  }

  public enterPassword(password: string): void {
    cy.get(this.passwordInput).type(password);
  }

  public clickLoginButton(): void {
    cy.get(this.loginButton).click();
  }

    public login(username: string, password: string): void {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
        cy.get('.login.page').should('not.exist')
    }
}

export default new LoginPage();