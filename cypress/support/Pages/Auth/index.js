const el = require('./elements').ELEMENTS;

class Auth {
  openSignupLogin() { cy.get(el.linkSignupLogin).click(); }
  fillSignup(name, email) {
    cy.get(el.inputSignupName).type(name);
    cy.get(el.inputSignupEmail).type(email);
    cy.get(el.btnSignup).click();
  }
  fillLogin(email, password) {
    cy.get(el.inputLoginEmail).type(email);
    cy.get(el.inputLoginPassword).type(password);
    cy.get(el.btnLogin).click();
  }
  assertAccountCreated() { cy.contains('Account Created!').should('be.visible'); }
  assertEmailExists() { cy.contains('Email Address already exist!').should('be.visible'); }
  assertLoginError() { cy.contains('Your email or password is incorrect!').should('be.visible'); }
  assertLoggedInAs(name) { cy.contains('Logged in as').should('be.visible').and('contain', name); }
  logout() { cy.get(el.btnLogout).click(); }
  deleteAccount() { 
    cy.get(el.btnDeleteAccount).click(); 
    cy.contains('Account Deleted!').should('be.visible'); 
  }
}

export default new Auth();
