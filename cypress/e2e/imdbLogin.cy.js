/// <reference types = "cypress"/> 

describe('IMDB Login Cypress', () => {

  before(function () {
    cy.visit('https://www.imdb.com/')
    cy.get('.imdb-header__account-toggle--logged-in')
      .contains('Roberto')
      .click()
    cy.get('.ipc-list-item__text')
      .contains('Sign out')
      .should('exist')
      .click()
  })

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop()
    }
  })

  it('Navigates to the imdb webpage', () => {
    cy.visit('https://www.imdb.com/')
  })

  it('Verifies it is on the imdb webpage', () => {
    // cy.visit('https://www.imdb.com/')
    cy.title().should('have.string', 'IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows')
    cy.get('#home_img_holder').should('have.attr', 'href', '/?ref_=nv_home')
  })

  it('Click the Sign In button', () => {
    // cy.visit('https://www.imdb.com/')
    cy.get('.imdb-header__signin-text').contains('Sign In')
      .click()
  })

  it('Verify we are in the Sign In Page', () => {
    cy.title().should('have.string', 'Sign in with IMDb - IMDb')
  })

  it('Enter Login Credentials', () => {
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
  })

  it('Search for a movie', () => {
    cy.get('#suggestion-search')
      .click()
      .type('American Sniper {enter}')
  })

})