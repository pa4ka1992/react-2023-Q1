/// <reference types="cypress" />

describe('Just visit e2e test', () => {
  // before(() => {
  //   cy.visit('/form');
  // });

  it('should visit', () => {
    cy.visit('/form');
  });
});
