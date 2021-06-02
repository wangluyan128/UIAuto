import LoginPage from "./pages/login";
import mainPage from "./pages/mainPage";

context('登录测试，PO模式',()=>{
    const username = 'jane.lane'
    const pwd = 'password123'

    it('登录成功',()=>{
        //创建po实例
        const loginInstance = new LoginPage()
        loginInstance.visitPage()
        loginInstance.isTargetPage()

        //调用Custom Commands的命令
        cy.login(username,pwd)
        cy.url().should('incloud','/dashboard')

        const manInstance = new mainPage()
        manInstance.isTargetpage()
        manInstance.welComeText.should('contain','jane.lane')
    });
})

context('登录测试，po模式',()=>{
    const username = 'jane.lane'
    const pwd = 'password123'

    beforeEach(()=>{
        cy.login(username,pwd)
    })
    it('访问受保护页',()=>{
        //cy.request()登录成功后，cypress会自动保存session cookie
        //所以下面就可以访问登录后才能访问的页面
        cy.visit('/dashboard')
        cy.url().should('eq','http://localhost:7077/dashboard')
        cy.get('h1').should('contain','jane.lane')
    });
})

Cypress.Commands.overwrite('type',(originalFn,element,text,options)=>{
    if(options&&options.sensitive){
        options.log = false
        //创建自定义命令的日志
        console.log({
            $el:element,
            name:'type',
            message:'*'.repeat(text.length),
        })
    }
    return originalFn(element,text,options)
})