// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/*
Cypress.Commands.add('login',(username,pwd)=>{
    cy.get('input[name=username]').type(username)
    cy.get('input[name=password]').type(${pwd}{enter})
})*/
/*Cypress.Commands.add('login1',(username,pwd)=>{
    Cypress.log({
        name:'login',
        message:username+' '+pwd
    })
    return cy.request({
        method:'POST',
        url:'https://192.168.202.161:8443/dm/account/login',
        form:false,
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        },
        body:{
            "username":username,
            "password":pwd
        }
    })/!*.then((response)=>{
        cy.log("response.body")
        cy.log(response.body)
    })*!/
})*/

