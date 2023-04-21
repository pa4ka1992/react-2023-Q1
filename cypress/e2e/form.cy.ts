/// <reference types="cypress" />

describe('Form', () => {
  before(() => {
    cy.visit('/');

    cy.get('nav > div').as('wrapper');
  });

  it('routes form', () => {
    cy.get('@wrapper').contains('Form').click();

    cy.contains('Add new photographer');
  });

  describe('Validates different form scenarios', () => {
    beforeEach(() => {
      cy.visit('/form');

      cy.get('[data-testid=form]').as('form');
      cy.get('[data-testid=add-info]').as('add-info');
      cy.get('[data-testid=country]').as('country');
      cy.get('[data-testid=experience]').as('experience');
      cy.get('[data-testid=hire-yes]').as('hire-yes');
      cy.get('[data-testid=avatar]').as('avatar');
      cy.get('[data-testid=user-name]').as('user-name');
    });

    it('throws all validation erros', () => {
      cy.get('@form').submit();

      cy.contains('At least one option should be chosen');
      cy.contains('Country is required');
      cy.contains('Experience is required');
      cy.contains('Hire status is requaired');
      cy.contains('Choose image for avatar');
      cy.contains('Full name is required');
    });

    it('adds new photographer', () => {
      cy.get('@user-name').type('Vasia Pupok');
      cy.get('@experience').type('2017-02-03');
      cy.get('@country').select('Belarus');
      cy.get('@add-info').each(($box) => {
        cy.wrap($box).click();
      });
      cy.get('@hire-yes').click();
      cy.fixture('avatar.png', null).then(($buffer: Buffer) => {
        cy.get('@avatar').selectFile({
          contents: $buffer,
        });
      });

      cy.get('@form').submit();

      cy.get('[data-testid=users').then(($users) => {
        cy.wrap($users).eq(0).as('user');

        cy.get('@user').contains('Vasia Pupok');
      });
    });
  });
});
