Cypress.Commands.add('uiLogin', (email, password) => {
  cy.visit('/');
  cy.contains('Signup / Login').click();
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
  cy.contains('Logged in as').should('be.visible');
});
