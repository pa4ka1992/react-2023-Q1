/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get(`[data-testid=card]`).as('cards');
  });

  it('renders random cards', () => {
    cy.get('@cards').should('have.length', 28);
  });

  describe('searches cards', () => {
    beforeEach(() => {
      cy.get(`[data-testid=search-form]`).as('form');
      cy.get(`[data-testid=search-input]`).as('input');
    });

    it('with results', () => {
      cy.get('@input').type('cat');
      cy.get('@form').submit();

      cy.get('@cards').should('not.have.length', 0);
    });

    it('with no results', () => {
      cy.get('@input').type('asdasdsads');
      cy.get('@form').submit();

      cy.contains('Your search did not match any photos...');
    });
  });
});

export {};
