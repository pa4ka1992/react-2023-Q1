/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders cards', () => {
    cy.get(`[data-testid=card]`).as('cards');
    cy.get('@cards').should('have.length', 28)
  });
});
