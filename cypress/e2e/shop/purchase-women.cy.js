/// <reference types="cypress" />
import Auth from '../../support/Pages/Auth';
import { makeUser } from '../../support/Factories/userFake';

describe('Compra completa - Women', function () {
  it('Deve realizar compra end-to-end na categoria Women', function () {
    const user = makeUser();

    cy.visit('/');
    Auth.openSignupLogin();
    Auth.fillSignup(user.name, user.email);
    cy.contains('Account Information').should('be.visible');
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type(user.password);
    cy.get('[data-qa="first_name"]').type(user.name);
    cy.get('[data-qa="last_name"]').type('Buyer');
    cy.get('[data-qa="address"]').type('Buyer Street 99');
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type('ON');
    cy.get('[data-qa="city"]').type('Toronto');
    cy.get('[data-qa="zipcode"]').type('A1A1A1');
    cy.get('[data-qa="mobile_number"]').type('11999990000');
    cy.get('[data-qa="create-account"]').click();
    cy.contains('Account Created!').should('be.visible');
    cy.contains('Continue').click();
    cy.contains('Logged in as').should('be.visible');

    cy.contains('Women').click();
    cy.contains('Add to cart').first().click();
    cy.contains('Continue Shopping').click();

    cy.contains('Cart').click();
    cy.contains('Proceed To Checkout').click();
    cy.get('textarea[name="message"]').type('Please pack carefully');
    cy.contains('Place Order').click();

    cy.get('[name="name_on_card"]').type(`${user.name} Card`);
    cy.get('[name="card_number"]').type('4111111111111111');
    cy.get('[name="cvc"]').type('123');
    cy.get('[name="expiry_month"]').type('12');
    cy.get('[name="expiry_year"]').type('2030');
    cy.contains('Pay and Confirm Order').click();

    cy.contains('Order Placed!').should('be.visible');
    Auth.deleteAccount();
  });
});
