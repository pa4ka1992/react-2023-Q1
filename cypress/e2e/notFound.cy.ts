/// <reference types="cypress" />

describe('Not found', () => {
  beforeEach(() => {
    cy.visit('/notFound');
  });

  it('routes not found', () => {
    cy.contains('Page is not found');
  });
});

export {};
