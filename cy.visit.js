/// <reference types="cypress"/>

it ("Acessando URL", () =>{
    cy.visit('/?id_category=8&controller=category')
    .visit('/?id_category=5&controller=category')
})