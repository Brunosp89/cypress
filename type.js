/// <reference types="cypress" />

//{backspace} {del} {downarrow} {end} {enter} {esc} {home} {insert} {leftarrow} {movetoend} {movetostart} {pageup}
// {pagedown} {rightarrow} {selectall} {uparrow} 

 let itemCategory = "Dress"
 let itemDescription = "Summer"


it("click", () =>{
    cy.visit("?id_category=5&controller=category")
        .get('#search_query_top')
            .type(`${itemCategory} ${itemDescription}`)
        .get('#searchbox > .btn')
            .click()

})