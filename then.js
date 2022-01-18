
/// <reference types="cypress"/>

let valorEstoque = 8

let valorEsperado = valorEstoque *2 + 0.51
it ("Then", () => {
    cy.visit("?id_product=2&controller=product").visit("?id_category=5&controller=category")
        .get(".right-block > .content_price > .price")
            .then( (preco) => {
             let textoFormatado = preco.text().replace('\t','').replace('\n','').replace('$','').trim()
              expect(textoFormatado).to.equal(valorEsperado.toString())
            })

})