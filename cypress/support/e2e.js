import '@cypress/code-coverage/support';
import './commands.js';

afterEach(() => {
  cy.window().trigger('unload');
});
