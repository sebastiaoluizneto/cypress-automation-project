/// <reference types="cypress" />
import Auth from '../../support/Pages/Auth';

describe('Cadastro - e-mail existente', function () {
  before(function () {
    cy.fixture('users').then(fx => { this.existing = fx.existing; });
  });

  it('Deve bloquear cadastro com e-mail já cadastrado', function () {
    cy.visit('/');
    Auth.openSignupLogin();
    Auth.fillSignup(this.existing.name, this.existing.email);
    Auth.assertEmailExists();
  });
});
