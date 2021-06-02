import {dmLoginUser} from "./datas/dmLogin.data";
import dmLogin from "./pages/dmLoginPage";
import dmLoginPage from "./pages/dmLoginPage";
import dmNavPage from "./pages/dmNavPage";
import dmyuanhmbPage from "./pages/dmyuanhmbPage";

describe("源和目标",()=>{
    const createSource = new dmyuanhmbPage()
    const navpage = new dmNavPage()
    before(()=>{
        //cy.visit("/")
        //cy.dmlogin2()
       // cy.login1("admin","3cf2ef29a798159125d7e2bed632a93e")


        //cy.visit("https://192.168.202.161:8443/dm/web/app/index.html")



       // const navpage = new dmNavPage()

       // cy.elementClick(navpage.yuanhmb)
       // cy.url().should('contain','source')
    })
    beforeEach(()=>{
      //  cy.exec('npm run db:reset && npm run db:seed')
       // cy.login1("admin","3cf2ef29a798159125d7e2bed632a93e")
        /*cy.request({
            method:'POST',
            url:'https://192.168.202.161:8443/dm/account/login',
            form:false,
            headers:{
                "Content-Type":"application/json;charset=UTF-8"
            },
            body:{
                "username":"admin",
                "password":"3cf2ef29a798159125d7e2bed632a93e"
            }
        })*/
       // cy.wait(3000)
       // cy.visit("https://192.168.202.161:8443/dm/web/app/index.html#!/home.html")

        cy.dmlogin2()
        cy.wait(3000)
       // Cypress.Cookies.preserveOnce('TokenId')
    })
    context('关系型数据库',()=>{
        it("新增",()=>{
            cy.elementClick(navpage.yuanhmb)
            cy.elementClick(navpage.yuanhmb)
            cy.elementClick(createSource.new)

            cy.textvalue(createSource.newname,"关系数据库测试")
            cy.selectvalue(createSource.newtype,"关系型数据库",'关系型数据库')
            cy.selectvalue(createSource.newsubtype,"MySQL","MySQL")
            cy.rediovalue(createSource.newredioyuan)
            cy.get(createSource.newnextbtn).click()

            cy.textvalue(createSource.newIpadress,"192.168.42.46")
            cy.textvalue(createSource.newdatabase,"testdemo")
            cy.textvalue(createSource.newusername,"root")
            cy.textvalue(createSource.newpassword,"12345678")
            cy.get(createSource.newconfirm).click()
        })
    })
    context('关系型数据库',()=>{
        it("按名称搜索",()=>{
            cy.elementClick(navpage.yuanhmb)
            cy.textvalue(createSource.searchname,"关系数据库测试")
            cy.get(createSource.searchbtn).click()

            //cy.get("/html/body/ui-view/div[2]/div[1]/div[3]/table/tbody[2]")
            // cy.log(cy.get("[title=\"mysql目标-42.19\"]").t)
            /*cy.xpath("/html/body/ui-view/div[2]/div[1]/div[3]/table/tbody[2]/tr[2]").each(($el)=>{
                cy.wrap($el).within(()=>{
                    cy.log($el.text())
                })
            })*/

            cy.tdValue("/html/body/ui-view/div[2]/div[1]/div[3]/table/tbody[2]/tr[2]","关系数据库测试")

        })
    })
    context('关系型数据库',()=>{
        it("编辑",()=>{
            cy.elementClick(navpage.yuanhmb)
            cy.textvalue(createSource.searchname,"关系数据库测试")
            cy.get(createSource.searchbtn).click()

            //cy.get("/html/body/ui-view/div[2]/div[1]/div[3]/table/tbody[2]")
            // cy.log(cy.get("[title=\"mysql目标-42.19\"]").t)
            /*cy.xpath("/html/body/ui-view/div[2]/div[1]/div[3]/table/tbody[2]/tr[2]").each(($el)=>{
                cy.wrap($el).within(()=>{
                    cy.log($el.text())
                })
            })*/

            cy.tdValue("/html/body/ui-view/div[2]/div[1]/div[3]/table/tbody[2]/tr[2]","关系数据库测试")
            cy.elementClick(createSource.yuanedit)
            cy.get(createSource.yuaneditname).clear()
            cy.textvalue(createSource.yuaneditname,"relationaldatabasetest")
            cy.elementClick(createSource.yuaneditnextstep)
            cy.elementClick(createSource.yuaneditconfirm)

        })
    })
    context('关系型数据库',()=>{
        it("删除",()=>{
            cy.elementClick(navpage.yuanhmb)
            cy.textvalue(createSource.searchname,"relationaldatabasetest")
            cy.get(createSource.searchbtn).click()
            cy.rediovalue(":nth-child(2) > .text-center > input")
            cy.elementClick(createSource.del)

            cy.elementClick(createSource.popupConfirm)

            cy.tdValue("/html/body/ui-view/div[2]/div[1]/div[3]/table/tbody[2]/tr[1]/td","数据为空")

        })
    })


})