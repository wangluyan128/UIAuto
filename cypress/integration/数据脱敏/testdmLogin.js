
import LoginPage from "./Page/dmLoginPage";
import {dmLoginUser} from "./datas/dmLogin.data"


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
            if (user.summary == "登录成功"){
                loginPage.getErr.should('not.exist')
            }
            if (user.summary =="登录失败"){
                loginPage.getErr.should('exist')
            }

        });
    }
})