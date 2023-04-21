/// <reference types="cypress" />

describe('About', () => {
  before(() => {
    cy.visit('/');

    cy.get('nav > div').as('wrapper');
  });

  it('routes about', () => {
    cy.get('@wrapper').contains('About').click();

    cy.get('[data-testid=about]');
  });
});
