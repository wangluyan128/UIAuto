import LoginPage from "./pages/login";
import mainPage from "./pages/login";



context('登录测试，PO模式',()=>{
    const username = 'jane.lane'
    const pwd = 'password123'

    it('登录成功',()=>{
        //创建PO实例
        const loginInstace = new LoginPage()

        loginInstace.visitPage()

        loginInstace.isTargetPage()
        loginInstace.login(username,pwd)
        cy.url().should('include','/dashboard')

        const mainInstance = new mainPage()
        mainInstance.isTargetPage()
        mainInstance.welComeText.should('contain','jane.lane')
    });
})