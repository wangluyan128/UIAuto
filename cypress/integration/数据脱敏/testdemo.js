
import LoginPage from "./pages/dmLoginPage1";
import {dmLoginUser} from "./datas/dmLogin.data"
import dmLoginPage from "./pages/dmLoginPage";

describe("测试",()=>{

    beforeEach(()=>{
        cy.visit('/');
    })
    for (const user of dmLoginUser){
        const loginPage = new LoginPage()
        it(user.summary, function () {
            loginPage.getUsername.type(user.username)
            loginPage.getPassword.type(user.password)
            loginPage.getBtn.click()
            cy.get('.login-error').should('not.exist')
        });
    }
})