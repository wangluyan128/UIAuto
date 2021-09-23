
import LoginPage from "./Page/dmLoginPage";
import {dmLoginUser} from "./datas/dmLogin.data"


describe("测试",()=>{

    before(()=>{
        cy.loginAPI("admin","3cf2ef29a798159125d7e2bed632a93e")//Cypress.env("username"),Cypress.env("password")
        cy.saveLocalStorage();

    })
    beforeEach(() => {
        cy.restoreLocalStorage();
        //Cypress.Cookies.preserveOnce("cypress-session-cookie")
       // Cypress.Cookies.preserveOnce("JSESSIONID")

        //cy.visit("https://192.168.202.161:8443/dm/web/app/index.html#!/home.html")

    });
    it('should exist accessToken in localStorage', () => {
       //cy.getLocalStorage("userinfo").should("exist")
        cy.getCookies().each((cookie)=>{
            cy.log(cookie.name,cookie.value)
        })
        //cy.getCookie("JSESSIONID").should("exist")

    });
})