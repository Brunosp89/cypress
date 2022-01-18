///<reference types="cypress"/>


it("desafio", () => {
    cy.visit("?controller=authentication&back=my-account")
    .get("#email_create")
        .type("brunoteste@cypress.com{enter}")
    .get('#id_gender1')
        .check()
    .get("#customer_firstname")
        .type("Bruno")
    .get("#customer_lastname")
        .type("Pereira")
    //.get("#email")
   //     .type("brunoteste@cypress.com")
    .get("#passwd")
        .type("12345")
    .get("#days")
        .select('4')
    .get("#months")
        .select('8')
    .get("#years")
        .select('1989')
    .get("#newsletter")
        .check()
    .get("#optin")
        .check()
    .get("#company")
        .type("Cypress s/a")
    .get("#address1")
        .type("Dona Leonor Mendes de Barros, 405")
    .get("#city")
        .type("São Vicente")
    .get("#id_state")
        .select("5")
    .get("#postcode")
        .type("21345")
    .get("#id_country")
        .select("United States")
    .get("#other")
        .type("No addictional info")
    .get("#phone")
        .type("3395-3868")
    .get("#phone_mobile")
        .type("9911-985")
    .get("#submitAccount > span")
        .click()
})