import {dmLoginUser} from "./datas/dmLogin.data";
import dmLogin from "./pages/dmLoginPage";
import dmLoginPage from "./pages/dmLoginPage";

context("登录测试",()=>{
    beforeEach(()=>{
        cy.visit("/")
    })
    //循环测试数据
    for (const user of dmLoginUser){
        it(user.summary, function () {
            //Cypress.log(user.password)
            const loginpage = new dmLoginPage()
            cy.dmlogin(loginpage.username,loginpage.password,loginpage.btn,user.username,user.password)
           // cy.url().should('include','home.html')
            cy.get('.login-error').should('not.exist')
        });
    }
})