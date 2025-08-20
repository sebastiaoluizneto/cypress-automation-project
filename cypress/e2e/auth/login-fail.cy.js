/// <reference types="cypress" />
import Auth from '../../support/Pages/Auth';

describe('Login - falha', function () {
  before(function () {
    cy.fixture('users').then(fx => { this.invalid = fx.invalid; });
  });

  it('Deve exibir mensagem de erro com senha inválida', function () {
    cy.visit('/');
    Auth.openSignupLogin();
    Auth.fillLogin(this.invalid.email, this.invalid.password);
    Auth.assertLoginError();
  });
});
