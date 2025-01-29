import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage();

describe("Login", () => {
    beforeEach(function () {
        cy.fixture("loginData").then((data) => {
            this.data = data;
        });
    });

    context("Desktop", function () {
        beforeEach(function () {
            cy.viewport(Cypress.env("desktop"));
            cy.visit("/");
        });

        it('Test Case 1: Login - Verify if user can Log in with valid credentials"', function () {
            /*
                Given: User is on the login page
                When: User enters valid email and password and clicks login
                Then: User is successfully logged in
            */
            loginPage.enterYourEmailField().type(this.data.validEmail)
            loginPage.enterYourPasswordField().type(this.data.validPassword);
            loginPage.submitLoginButton().click();
            loginPage.validateLogin();
        });

        it('Test Case 2: Login - Verify if user can Log in with invalid credentials"', function () {
            /*
                Given: User is on the login page
                When: User enters valid email but invalid password and clicks login
                Then: Authentication failed alert is visible
            */
            loginPage.enterYourEmailField().type(this.data.validEmail);
            loginPage.enterYourPasswordField().type(this.data.invalidPassword);
            loginPage.submitLoginButton().click();
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 3: Login - Verify if user can Log in with password field empty"', function () {
            /*
                Given: User is on the login page
                When: User enters an email but leaves the password field empty and clicks login
                Then: Authentication failed alert is visible
            */
            loginPage.enterYourEmailField().type(this.data.invalidEmail);
            loginPage.submitLoginButton().click();
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 4: Login - Verify if user can Log in with email field empty"', function () {
            /*
                Given: User is on the login page
                When: User leaves the email field empty but enters a password and clicks login
                Then: Authentication failed alert is visible
            */
            loginPage.enterYourPasswordField().type(this.data.invalidPassword);
            loginPage.submitLoginButton().click();
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 5: Login - Verify if user can Log in all fields empty"', function () {
            /*
                Given: User is on the login page
                When: User leaves both fields empty and clicks login
                Then: Authentication failed alert is visible
            */
            loginPage.submitLoginButton().click();
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 6: Login - Verify if user can Log in with invalid email format"', function () {
            /*
                Given: User is on the login page
                When: User enters an invalid email format and a password and clicks login
                Then: Authentication failed alert is visible
            */
            loginPage.enterYourEmailField().type(this.data.invalidEmail);
            loginPage.enterYourPasswordField().type(this.data.invalidPassword);
            loginPage.submitLoginButton().click();
            loginPage.authenticationFailedAlert().should('be.visible');
        });
    });

    context("Mobile", function () {
        beforeEach(function () {
            cy.viewport(Cypress.env("mobile"));
            cy.visit("/");
        });

        it('Test Case 1: Login - Verify if user can Log in with valid credentials"', function () {
            /*
                Given: User is on the mobile login page
                When: User enters valid email and password and clicks login
                Then: User is successfully logged in
            */
            loginPage.enterYourEmailField().type(this.data.validEmail);
            loginPage.enterYourPasswordField().type(this.data.validPassword);
            loginPage.submitLoginButton().click();
            loginPage.validateLogin();
        });

        it('Test Case 2: Login - Verify if user can Log in with invalid credentials"', function () {
            /*
                Given: User is on the mobile login page
                When: User enters invalid email and password and clicks login
                Then: Authentication failed alert is visible
            */
            loginPage.enterYourEmailField().type(this.data.invalidEmail);
            loginPage.enterYourPasswordField().type(this.data.invalidPassword);
            loginPage.submitLoginButton().click();
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 3: Login - Verify if user can Log in with password field empty"', function () {
            /*
                Given: User is on the mobile login page
                When: User enters an email but leaves the password field empty and clicks login
                Then: Authentication failed alert is visible
            */
            loginPage.enterYourEmailField().type(this.data.invalidEmail);
            loginPage.submitLoginButton().click();
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 4: Login - Verify if user can Log in with email field empty"', function () {
            /*
                Given: User is on the mobile login page
                When: User leaves the email field empty but enters a password and clicks login
                Then: Authentication failed alert is visible
            */
            loginPage.enterYourPasswordField().type(this.data.invalidPassword);
            loginPage.submitLoginButton().click();
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 5: Login - Verify if user can Log in all fields empty"', function () {
            /*
                Given: User is on the mobile login page
                When: User leaves both fields empty and clicks login
                Then: Authentication failed alert is visible
            */
            loginPage.submitLoginButton().click();
            loginPage.authenticationFailedAlert().should('be.visible');
        });

        it('Test Case 6: Login - Verify if user can Log in with invalid email format"', function () {
            /*
                Given: User is on the mobile login page
                When: User enters an invalid email format and a password and clicks login
                Then: Authentication failed alert is visible
            */
            loginPage.enterYourEmailField().type(this.data.invalidEmail);
            loginPage.enterYourPasswordField().type(this.data.invalidPassword);
            loginPage.submitLoginButton().click();
            loginPage.authenticationFailedAlert().should('be.visible');
        });
    });
});
