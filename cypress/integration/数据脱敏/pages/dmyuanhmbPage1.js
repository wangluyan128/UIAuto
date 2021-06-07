import dmyuanmb from "../pages/dmyuanhmbPage1.js"
export default class yuanhmbPage {
    constructor() {

    }
    //源和目标元素
    get getBynew(){
        return cy.get(dmyuanmb.mainpage.name)
    }


}