/// <reference types="cypress" />

it ("cy.find()", () => {
    cy.visit("?id_category=5&controller=category")
        .get('#ul_layered_id_attribute_group_3')
            .find('li')
                .contains('Orange')
                    .find('span')
    


})

// cy.get()
// cy.contains()
// cy.find() faz a busca nos elementos, mas precisa filtrar, pois pode retornar mais conteudos e dificultar o teste
// cy.as()