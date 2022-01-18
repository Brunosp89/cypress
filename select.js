/// <reference types="cypress" />



it("Escolhendo opção do select", () =>{
    cy.visit("?id_category=5&controller=category")
        .get('#selectProductSort')
            .select('Price: Lowest first')

})

it("Escolhendo multiplas opções do select", () =>{
    cy.visit("http://slimselectjs.com/?p=%2Fmethods%2") 
        .get('#slim-multi-select')
        .select(['Best', 'Ever'], {force:true})
})
// para selecionar mais de um elemento abre um array com as strings a ser selecionadas
//force: true é necessario para quando o elemento (select) estiver oculto (display: none) na pagina