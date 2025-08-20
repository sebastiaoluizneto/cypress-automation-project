/// <reference types="cypress" />
describe('Login - sucesso', function () {
  before(function () {
    // Lê o usuário gerado no teste de cadastro
    cy.fixture('newUser').then((user) => { this.user = user; });
  });

  it('Deve logar com sucesso usando usuário cadastrado no signup', function () {
    cy.uiLogin(this.user.email, this.user.password);
    cy.contains('Logged in as').should('be.visible').and('contain', this.user.name);
  });
});
