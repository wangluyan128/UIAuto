//数据脱敏登录
Cypress.Commands.add('dmlogin',(gusername,gpwd,gbtn,tusername,tpwd)=>{

    cy.get(gusername).type(tusername)
    cy.get(gpwd).type(tpwd)
    cy.get(gbtn).click()
})

Cypress.Commands.add('dmlogin2',()=>{
    cy.visit('/')
    cy.get(":nth-child(1) > .form-control").type(Cypress.env("username"))
    cy.get(":nth-child(2) > .form-control").type(Cypress.env("password"))
    cy.get(".btn").click()
  //  cy.getCookie("Cookie").should('exist')



})

