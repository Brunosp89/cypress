/// <reference types="cypress" />

it("click", () =>{
    cy.visit("?id_product=2&controller=product").visit("?id_category=5&controller=category")
        cy.get('.product_img_link > .replace-2x')
            .click()
     
        //.dblclick()
        //.rightclick()
})