/// <reference types="cypress" />
import Auth from '../../support/Pages/Auth';
import { makeUser } from '../../support/Factories/userFake';

describe('Cadastro - sucesso', function () {
  it('Deve cadastrar novo usuário com sucesso', function () {
    const user = makeUser();

    // Salvar usuário em fixture para usar depois
    cy.writeFile('cypress/fixtures/newUser.json', user);

    cy.visit('/');
    Auth.openSignupLogin();
    Auth.fillSignup(user.name, user.email);

    cy.contains('Account Information').should('be.visible');
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type(user.password);
    cy.get('[data-qa="first_name"]').type(user.name);
    cy.get('[data-qa="last_name"]').type('Tester');
    cy.get('[data-qa="address"]').type('QA Street 123');
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type('ON');
    cy.get('[data-qa="city"]').type('Toronto');
    cy.get('[data-qa="zipcode"]').type('12345');
    cy.get('[data-qa="mobile_number"]').type('11999999999');
    cy.get('[data-qa="create-account"]').click();

    Auth.assertAccountCreated();
    cy.contains('Continue').click();
    Auth.assertLoggedInAs(user.name);

    
  });
});
