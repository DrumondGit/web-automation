import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage();
const dataPage = require("../pages/DataPage");

const email = dataPage.login.validEmail;
const password = dataPage.login.validPassword;
const invalidEmail = dataPage.login.invalidEmail;
const invalidPassword = dataPage.login.invalidPassword;


describe("Login", () => {
    context("Desktop", () => {
        beforeEach(function () {
            cy.viewport(Cypress.env("desktop"));
            cy.visit("/");
        });

        it('Test Case 1: Login - Verify if user can Log in with valid credentials"', () => {
            loginPage.enterYourEmailField().type(email)
            loginPage.enterYourPasswordField().type(password)
            loginPage.submitLoginButton().click()
            loginPage.validateLogin()
        });

        it('Test Case 2: Login - Verify if user can Log in with invalid credentials"', () => {
            loginPage.enterYourEmailField().type(invalidEmail)
            loginPage.enterYourPasswordField().type(invalidPassword)
            loginPage.submitLoginButton().click()
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 3: Login - Verify if user can Log in with password field empty"', () => {
            loginPage.enterYourEmailField().type(invalidEmail)
            loginPage.submitLoginButton().click()
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 4: Login - Verify if user can Log in with email field empty"', () => {
            loginPage.enterYourPasswordField().type(invalidPassword)
            loginPage.submitLoginButton().click()
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 5: Login - Verify if user can Log in all fields empty"', () => {
            loginPage.submitLoginButton().click()
            loginPage.authenticationFailedAlert().should('be.visible');
        });


    });

    context("Mobile", () => {

        beforeEach(function () {
            cy.viewport(Cypress.env("mobile"));
            cy.visit("/");
        });

        it('Test Case 1: Login - Verify if user can Log in with valid credentials"', () => {
            loginPage.enterYourEmailField().type(email)
            loginPage.enterYourPasswordField().type(password)
            loginPage.submitLoginButton().click()
            loginPage.validateLogin()
        });

        it('Test Case 2: Login - Verify if user can Log in with invalid credentials"', () => {
            loginPage.enterYourEmailField().type(invalidEmail)
            loginPage.enterYourPasswordField().type(invalidPassword)
            loginPage.submitLoginButton().click()
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 3: Login - Verify if user can Log in with password field empty"', () => {
            loginPage.enterYourEmailField().type(invalidEmail)
            loginPage.submitLoginButton().click()
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 4: Login - Verify if user can Log in with email field empty"', () => {
            loginPage.enterYourPasswordField().type(invalidPassword)
            loginPage.submitLoginButton().click()
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 5: Login - Verify if user can Log in all fields empty"', () => {
            loginPage.submitLoginButton().click()
            loginPage.authenticationFailedAlert().should('be.visible');
        });
        

    });
});