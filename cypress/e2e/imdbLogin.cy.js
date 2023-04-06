/// <reference types = "cypress"/> 

import { LandingPage } from "../page-objects/landing-page"
import { SignIn } from "../page-objects/sign-in"

const landing = new LandingPage
const signIn = new SignIn

describe('IMDB Login Cypress', () => {

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  // Commenting this out to make sure we logout at the end of the test execution

  // before(function () {
  //   landing.goToPage()
  //   landing.logOut()
  // })

  /////////////////////////////////////////////////////////////////////////////////////////////////

  before(function () {
    landing.goToPage()
    landing.verifyLogOut()
  })

  after(function () {
    landing.logOut()
    landing.verifyLogOut()
    landing.backToHome()
  })

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop()
    }
  })

  it('Navigates to the imdb webpage', () => {
    landing.goToPage()
  })

  it('Verifies it is on the imdb webpage', () => {
    // cy.visit('https://www.imdb.com/')
    landing.verifyPage()
  })

  it('Click the Sign In button', () => {
    // cy.visit('https://www.imdb.com/')
    landing.clickSignIn()
  })

  it('Verify we are in the Sign In Page', () => {
    signIn.verifyPage()
  })

  it('Enter Login Credentials', () => {
    signIn.enterCredentials(Cypress.username, Cypress.password)
  })

  it('Search for a movie', () => {
    landing.search()
  })
})