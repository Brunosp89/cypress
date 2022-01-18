/// <reference types="cypress" />

it ("cy.as()", () => {
    cy.visit("?id_category=5&controller=category")
        .get(".layered_filter")
            .as('filtros')
        .get('@filtros')
            .contains('Orange')
        .get('@filtros')
            .contains('Cotton')


})

// cy.get()
// cy.contains()
// cy.find()
// cy.as() apelida um elemento para facilitar na hora da busca. utiliza @apelidoDoElemento