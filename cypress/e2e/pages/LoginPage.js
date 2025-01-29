const dataPage = require("./DataPage");

class LoginPage {
    // Element Mapping

    enterYourEmailField() {
        return cy.get('#email')
    }

    enterYourPasswordField() {
        return cy.get('#passwd')
    }

    forgotPasswordButton() {
        return cy.contains('Forgot your password?')
    }

    submitLoginButton() {
        return cy.get('#SubmitLogin')
    }

    authenticationFailedAlert() {
        return cy.get('.alert.alert-danger')
    }


    //Methods

    validateLogin() {
        return cy.url().should('include', 'controller=my-account').should('not.contain', 'controller=authentication')
    }


}
export default LoginPage;