/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('routes to product modal', () => {
    cy.get(`[data-testid=card]`).as('cards');
    cy.get('@cards').eq(0).as('firstCard')

    cy.get('@firstCard').find(`[data-testid=card-link]`).click();

    cy.get(`[data-testid=product]`).find(`[data-testid=product-image]`);
    cy.url().should('include', '/photoID/');
  });
});
