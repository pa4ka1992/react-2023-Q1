/// <reference types="cypress" />

describe('Product', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get(`[data-testid=card]`).as('cards');
  });

  it('opens product modal', () => {
    cy.get('@cards')
      .invoke('slice', 0, 4)
      .then(($sliced) => {
        cy.wrap($sliced).each(($card) => {
          cy.wrap($card)
            .click()
            .then(() => {
              cy.get(`[data-testid=product]`).as('product');

              cy.get('@product').find(`[data-testid=product-image]`);
              cy.url().should('include', '/photoID/');

              cy.get(`[data-testid=product-closer]`).click();
              cy.url().should('not.include', '/photoID/');
            });
        });
      });
  });
});
