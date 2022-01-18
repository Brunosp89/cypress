/// <reference types="cypress" />

it ("Seletores", () => {
    cy.visit("?id_product=2&controller=product").visit("?id_category=5&controller=category")
    .get(".layered_filter")
})

// cy.get()
// cy.cointains()
// cy.find()
// cy.as()