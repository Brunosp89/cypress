/// <reference types="cypress" />

it ("cy.contains()", () => {
    cy.visit("?id_category=5&controller=category")
        .get('.layered_filter')
            .contains('Orange')


})

// cy.get()
// cy.contains() faz uma busca no html com o conteudo informado (quanto mais filtrar, melhor o desempenho do teste)
// cy.find()
// cy.as()