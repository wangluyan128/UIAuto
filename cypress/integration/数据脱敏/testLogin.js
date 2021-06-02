//导入测试数据
import {testLoginUser} from "./datas/testLogin.data";

context("登录",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:7077/login")
    })

    //循环测试数据
    for (const user of testLoginUser){
        it(user.summary, function () {
            cy.get("input[name=username]").type(user.name)
            cy.get("input[name=password]").type(user.password)

            cy.get("form").submit()

            cy.url().should('include','/dashboard')
            cy.get("h1").should('contain',user.username)
        });
    }
})