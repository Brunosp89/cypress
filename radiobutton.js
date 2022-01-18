/// <reference types="cypress" />



it("Escolhendo opção do radio", () =>{
    cy.visit("?controller=authentication&back=my-account")
    .get('#email_create')
    .type("email_bruno@cypress.com.br{enter}")
    .get("#id_gender2")
    .check()
})
