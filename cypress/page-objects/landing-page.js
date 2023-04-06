export class LandingPage {
    goToPage() {
        cy.visit('https://www.imdb.com/')
    }

    logOut() {
        cy.get('.imdb-header__account-toggle--logged-in')
            .contains('Roberto')
            .click()
        cy.get('.ipc-list-item__text')
            .contains('Sign out')
            .should('exist')
            .click()
    }

    verifyLogOut() {
        cy.get('.imdb-header__signin-text')
            .should('exist')
    }

    verifyPage() {
        cy.title()
            .should('have.string', 'IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows')
        cy.get('#home_img_holder')
            .should('have.attr', 'href', '/?ref_=nv_home')
    }

    clickSignIn() {
        cy.get('.imdb-header__signin-text')
            .contains('Sign In')
            .click()
    }

    search() {
        cy.get('#suggestion-search')
            .click()
            .type('American Sniper {enter}')
    }

    backToHome() {
        cy.get('#home_img_holder')
            .should('have.attr', 'href', '/?ref_=nv_home')
            .click()
    }
}