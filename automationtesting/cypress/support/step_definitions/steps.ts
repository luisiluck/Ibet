import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/login.page";
import shopPage from "../pages/shop.page";
import CreateLimitsPage from "../pages/createlimits.page";
import cookiesNotification from "../pages/components/cookiesNotification";
import signupPage from "../pages/signup.page";

Given("a logged in user", () => {
  const email = Cypress.env('LOGIN_EMAIL');
  const password = Cypress.env('LOGIN_PASSWORD');
  if (!email || !password) {
    throw new Error('email or password for user login are not set in environment variables');
  }
  LoginPage.init();
  LoginPage.login(email, password);
});

Given("the {string} page is open", (page: string) => {
  require(`../pages/${page.toLowerCase()}.page.ts`).default.visit();
})

When("a Shop item is bought", () => {
  shopPage.getShopItem(0).select();
  shopPage.buySelectedItem();
})

When("a Limit is set with next values", (table: DataTable) => {
  const data = table.hashes()[0]
  CreateLimitsPage.limitTypeSelect(data['typeLimit']);
  CreateLimitsPage.periodSelect(data['period']);
  CreateLimitsPage.setAmout(data['amount']);
  CreateLimitsPage.submit();
});

When("a signup is performed", function () {
  cookiesNotification.acceptCookies()
  signupPage.performSignup({email: 'a@b.co', password: '12345qQ!', continue: 'click'})
});

Then("a notification should say", (message: string) => {
  cy.contains(message).should('be.visible');
})