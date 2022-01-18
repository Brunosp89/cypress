
/// <reference types="cypress"/>




it ("Then", () => {
    cy.visit("?id_product=2&controller=product").visit("?id_category=5&controller=category")
    .get("#newsletter-input")
        .then((inputEmail) =>{
            let mascaraEmail =inputEmail.val()

            mascaraEmail = mascaraEmail.toLowerCase()
            console.log(mascaraEmail)
                expect(mascaraEmail).equal('enter your e-mail')
        })
         
})