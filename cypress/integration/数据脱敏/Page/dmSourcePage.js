import {main,popup,search,add,next,edit,table} from "../els/dmSourceEl.json"
export default class sourceAndtargetPage {
    constructor() {
    }
    //main
    get getMainNewAdd(){
        return cy.get(main.add)
    }

    get getMainDel(){
        return cy.get(main.del)
    }

    get containsMainBathauth(){
        return cy.contains(main.bathauth)
    }

    get containsMainHadoop(){
        return cy.contains(main.hadoop)
    }
    //add
    get getAddName(){
        return cy.get(add.name)
    }
    get getAddType(){
        return cy.get(add.type)
    }
    get getAddSubtype(){
        return cy.get(add.subtype)
    }
    get getAddRedioTS(){
        return cy.get(add.redioTS)
    }

    get containsAddNext(){
        return cy.contains(add.next)
    }
    //next
    get getNextName(){
        return cy.get(next.name)
    }
    get getNextIpadress(){
        return cy.get(next.ipadress)
    }
    get getNextDatabasename(){
        return cy.get(next.databasename)
    }
    get getNextPort(){
        return cy.get(next.port)
    }
    get getNextUsername(){
        return cy.get(next.username)
    }
    get getNextPassword(){
        return cy.get(next.password)
    }
    get getNextConfirm(){
        return cy.get(next.confirm)
    }
    get getNextCode(){
        return cy.get(next.code)
    }
    get getNextRediobendi(){
        return cy.get(relation.newrediobendi)
    }
    get getNextRedioyemiansc(){
        return cy.get(relation.newredioyemiansc)
    }
    get getNextRedioyuanchengwj(){
        return cy.get(relation.newredioyuanchengwj)
    }
    get getNextFiledirectory(){
        return cy.get(relation.newfiledirectory)
    }

    //search
    get getsearchType(){
        return cy.get(search.type)
    }

    get getsearchSubtype(){
        return cy.get(search.subtype)
    }
    get getsearchName(){
        return cy.get(search.name)
    }
    get getsearchUsername(){
        return cy.get(search.username)
    }
    get getsearchSource(){
        return cy.get(search.source)
    }
    get getsearchBtn(){
        return cy.get(search.btn)
    }


    //edit
    get containseditBtn(){
        return cy.contains(edit.btn)
    }
    get geteditName(){
        return cy.get(edit.name)
    }
    get containseditNextstep(){
        return cy.contains(edit.nextstep)
    }
    get geteditName1(){
        return cy.get(edit.name1)
    }
    get geteditIpaddress(){
        return cy.get(edit.ipaddress)
    }
    get geteditPort(){
        return cy.get(edit.port)
    }
    get geteditDatabasename(){
        return cy.get(edit.databasename)
    }
    get geteditUsername(){
        return cy.get(edit.username)
    }
    get geteditPassword(){
        return cy.get(edit.password)
    }
    get geteditConfirm(){
        return cy.get(edit.confirm)
    }

    //table
    get gettableTable(){
        return cy.get(table.table)
    }
    get gettableCheckboxCell(){
        return cy.get(table.checkboxCell)
    }
    //popup
    get getpopupConfirm(){
        return cy.get(popup.confirm)
    }
    get getpopupCancel(){
        return cy.get(popup.cancel)
    }






}