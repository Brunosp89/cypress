/// <reference types="cypress"/>

it ("InvokeValue ", () => {
    cy.visit("?id_product=2&controller=product").visit("?id_category=5&controller=category")
    .get("#newsletter-input")
        .invoke('val')
          .should('equal', 'Enter your e-mail')
 
})