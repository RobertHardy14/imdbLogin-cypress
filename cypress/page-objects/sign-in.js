export class SignIn {
    verifyPage() {
        cy.title()
            .should('have.string', 'Sign in with IMDb - IMDb')
    }

    enterCredentials(username, password) {
        cy.get('.auth-provider-text')
            .contains('Sign in with IMDb')
            .click()
        cy.title()
            .should('have.string', 'IMDb Sign-In')
        cy.get('#ap_email')
            .click()
            .type(Cypress.env('username'))
        cy.get('#ap_password')
            .click()
            .type(Cypress.env('password'))
        cy.get('#signInSubmit')
            .should('exist')
            .click()
    }


}