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

//元素选取点击
Cypress.Commands.add('elementClick',(gelement)=>{
    cy.get(gelement).click()
})

//文本元素输入
Cypress.Commands.add('textvalue',(gelement,tvalue)=>{
    cy.get(gelement).type(tvalue)
})

//下拉列表选取
Cypress.Commands.add('selectvalue',(gelement,tvalue,svalue)=>{
    cy.get(gelement).select(tvalue).should("contain.text",svalue)
})

//单选按钮选取
Cypress.Commands.add('rediovalue',(gelement,lvalue)=>{
    cy.get(gelement).check(lvalue).should("be.checked")
})

//按钮点击
Cypress.Commands.add('buttonClick',(gelement,tenum)=>{
    if (tenum==1){
        cy.get(gelement).click()
    }
    if(tenum==2){
        cy.get(gelement).dblclick()
    }
    if (tenum==3){
        cy.get(gelement).rightclick()
    }
})

//选取td内容
Cypress.Commands.add('tdValue',(xelement,svalue)=>{
    cy.xpath(xelement).should("contain.text",svalue)
})