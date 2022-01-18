///<reference types="cypress"/>

const Faker = require('Faker');

describe('Cadastro de usuário', () =>{
    before(() => { //before serve para fazer o comando antes de cada outro teste, no caso ele vai acessar a pagina do teste
        cy.visit('?controller=authentication&back=my-account')
    })

    it('Informar email novo', () =>{
       cy.get('#email_create')
       .type(`${Faker.Internet.email()}{enter}`)
    })

    it('Preencher os campos obrigatórios', () =>{
        cy.get('#id_gender1')
        .check()
        cy.get("#customer_firstname")
        .type(Faker.Name.firstName())
        cy.get("#customer_lastname")
        .type(Faker.Name.lastName())
        cy.get("#passwd")
        .type('12345')
        cy.get("#days")
        .select('4')
        cy.get("#months")
        .select('8')
        cy.get("#years")
        .select('1989')
        cy.get("#newsletter")
        .check()
        cy.get("#optin")
        .check()
        cy.get("#company")
        .type("Cypress s/a")
        cy.get("#address1")
        .type(Faker.Address.streetName())
        cy.get("#city")
        .type(Faker.Address.city())
        cy.get("#id_state")
        .select(`${Faker.random.number(30)}`)
        cy.get("#postcode")
        .type(Faker.Address.zipCode(11111))
        cy.get("#other")
        .type("No addictional info")
        cy.get("#phone_mobile")
        .type(Faker.PhoneNumber.phoneNumberFormat(5))
       
    })

    it('Finalizar cadastro', () =>{
        cy.get("#submitAccount > span")
        .click()
    })
})