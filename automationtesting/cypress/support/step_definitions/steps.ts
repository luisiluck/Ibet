import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/login.page";
import shopPage from "../pages/shop.page";
import CreateLimitsPage from "../pages/createlimits.page";
import CookiesNotification from "../pages/components/cookiesNotification";
import signupPage from "../pages/signup.page";
import BasePage from "../pages/base.page";
const _ =  require('lodash');

Given("a logged in user", () => {
  const email = Cypress.env('LOGIN_EMAIL');
  const password = Cypress.env('LOGIN_PASSWORD');
  if (!email || !password) {
    throw new Error('email or password for user login are not set in environment variables');
  }
  LoginPage.visit();
  CookiesNotification.acceptCookies();
  LoginPage.login(email, password);
});

Given("the {string} page is open", (page: string) => {
  cy.wrap(require(`../pages/${page.toLowerCase()}.page.ts`).default).as('currentPage')
  cy.get<BasePage>('@currentPage').then(page => page.visit())
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
})

When("a signup is performed", (table: DataTable) => {
  CookiesNotification.acceptCookies()
  signupPage.performSignup(table.hashes()[0]);
})

Then("a notification should say", (message: string) => {
  cy.contains(message).should('be.visible');
})

Then("the {string} should {string}", (element: string, action: string) => {
  cy.get<BasePage>('@currentPage').then(page => {
    page[_.camelCase(element)].should(action);
  })
})