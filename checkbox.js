/// <reference types="cypress" />



it("Escolhendo opção do check", () =>{
    cy.visit("?id_category=5&controller=category")
        .get('#layered_id_attribute_group_1')
        .check()
        .get('#layered_id_attribute_group_2')
        .check()
        .get('#layered_id_attribute_group_1')
        .uncheck()
    /* 
    outra opção:
        .get("#ul_layered_id_attribute_group_1"")
        .find("[type="checkbox"])
        .each(checkbox)
        .check()
    */
})
