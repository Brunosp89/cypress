/// <reference types="cypress"/>

it ("Invoke ", () => {
    cy.visit("?id_product=2&controller=product").visit("?id_category=5&controller=category")
    .get(".shop-phone > strong")
        .invoke('text')
            .should('equal', '0123-456-789')
   // .get(".right-block > .content_price > .price")
 //       .invoke('text')
  //          .should('equal', '$16.51')
})