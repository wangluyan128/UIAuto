import dmNavPage1 from "./Page/dmNavPage";
import dmSourcePage1 from "./Page/dmSourcePage";
import {addData,searchData,editData} from "./datas/dmsource.data";
import {dmLoginUser} from "./datas/dmLogin.data";





describe("源和目标",()=>{

    let nav = new dmNavPage1()
    let source = new dmSourcePage1()
    before(()=>{
        cy.loginAPI("admin","3cf2ef29a798159125d7e2bed632a93e")//Cypress.env("username"),Cypress.env("password")
        cy.saveLocalStorage();
    })
    beforeEach(()=>{
        cy.restoreLocalStorage();

        cy.visit("https://192.168.202.161:8443/dm/web/app/index.html#!/home.html")
        cy.url().should("include","home")
        cy.wait(5000)
       // cy.wait(3000000)
      //  cy.exec('npm run db:reset && npm run db:seed')
       // cy.login1("admin","3cf2ef29a798159125d7e2bed632a93e")
       /* cy.request({
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
        }).then((res)=>{
            //cy.wrap(sessionStorage.setItem("userInfo",JSON.stringify(res.body.userInfo)))
            //cy.wrap(sessionStorage.setItem("tokenid",res.body.userInfo.tokenId))
            expect(res.status).to.eq(200)
            cy.wrap(localStorage.setItem("pwdExpiredNotice",""))
            cy.wrap(localStorage.setItem("userInfo",JSON.stringify(res.body.userInfo)))
            cy.wrap(localStorage.setItem("newLogo","{\"blank\":\"false\",\"logoEnable\":\"false\",\"systemName\":\"美创脱敏系统\",\"companyName\":\"杭州美创科技有限公司\",\"menuColor\":\"\",\"logoLoginPath\":\"/dm/logo.png\",\"logoIndexPath\":\"/dm/index.png\",\"version\":\"3.4.2.1-dev\",\"year\":2021}"))
            cy.wrap(localStorage.setItem("jobReview","false"))
            cy.wrap(localStorage.setItem("tokenid",res.body.userInfo.tokenId))
            cy.wrap(localStorage.setItem("permissions","[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"22\",\"23\",\"24\",\"25\",\"26\",\"27\",\"28\",\"29\",\"30\",\"33\",\"34\",\"35\",\"36\",\"37\",\"38\",\"39\",\"40\",\"41\",\"42\",\"43\",\"44\",\"45\",\"46\",\"47\",\"48\",\"49\",\"51\",\"52\",\"53\",\"54\",\"55\",\"56\",\"57\",\"58\",\"59\",\"60\",\"61\",\"62\",\"63\",\"64\",\"65\",\"66\",\"67\"]"))

            //cy.log(res)
            cy.visit("https://192.168.202.161:8443/dm/web/app/index.html")
        })
        cy.wait(3000)*/
       // cy.visit("https://192.168.202.161:8443/dm/web/app/index.html#!/home.html")

        //cy.dmlogin2()
        //cy.wait(3000)
    })
    context.skip('关系型数据库',()=> {

        for (const add of addData) {

            it(add.summary, function () {
                nav.containsSource.click().should("contain.text", "源和目标")

                source.getMainNewAdd.click().should("contain.text", "新增")
                source.getAddName.type(add.name)
                source.getAddType.select(add.type).should("contain.text","关系型数据库")
                source.getAddSubtype.select(add.subtype).should("contain.text","Mysql")
                source.getAddRedioTS.check(add.redio).should("be.checked")
                source.containsAddNext.click()

                source.getNextName.clear()
                source.getNextName.type(add.nextname)
                source.getNextIpadress.type(add.ipaddress)
                source.getNextPort.type(add.port)
                source.getNextDatabasename.type(add.databasename)
                source.getNextUsername.type(add.username)
                source.getNextPassword.type(add.password)
                source.getNextConfirm.click()

            });
        }
    })
    context('关系型数据库',()=>{
        for (const search of searchData) {

            it(search.summary, function () {
           //     cy.url().should("include","home")
                nav.containsSource.click().should("contain.text", "源和目标")
            /*    source.getsearchType.select(search.type)
                source.getsearchSubtype.select(search.subtype)
                source.getsearchName.type(search.name)
                source.getsearchUsername.select(search.alluser)
                source.getsearchSource.select(search.source)
                source.getsearchBtn.click()
                source.gettableTable.find('tbody>tr').eq(2).find('td').eq(1).should('contain.text',search.name)
                source.gettableTable.find('tbody>tr').eq(2).find('td').eq(2).should('contain.text',search.type)
           */
            })
        }
    })

    context.skip('关系型数据库',()=>{
        it("编辑",()=>{
            nav.containsSource.click().should("contain.text", "源和目标")
            source.getsearchName.type(searchData[0].name)
            source.getsearchBtn.click()

            source.containseditBtn.click().should("contain.text","编辑")
            source.geteditName.clear()
            source.geteditName.type(editData[0].name)
            source.containseditNextstep.click()

            source.geteditName1.clear()
            source.geteditName1.type(editData[0].name1)
            source.geteditIpaddress.clear()
            source.geteditIpaddress.type(editData[0].ipaddress)
            source.geteditPort.clear()
            source.geteditPort.type(editData[0].port)
            source.geteditDatabasename.clear()
            source.geteditDatabasename.type(editData[0].databasename)
            source.geteditUsername.clear()
            source.geteditUsername.type(editData[0].username)
            source.geteditPassword.clear()
            source.geteditPassword.type(editData[0].password)

            source.geteditConfirm.click()
        })
    })
    context.skip('关系型数据库',()=>{
        it("删除",()=>{
            nav.containsSource.click().should("contain.text", "源和目标")
            source.getsearchName.type(editData[0].name)
            source.getsearchBtn.click()

            source.gettableCheckboxCell.eq(1).click().should("be.checked")
            source.getMainDel.click()

            source.getpopupConfirm.click()

            source.gettableTable.find("tbody").eq(2).find("tr>td").should('contain.text',"数据为空")
        })
    })


})