/// <reference types="cypress" />

it('checks the title', () => {
  cy.visit('index.html')
  cy.title().should('eq', 'wrong title')
})
