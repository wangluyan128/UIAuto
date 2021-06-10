import {username,password,btn,err} from "../els/dmLoginEl.json"

export default class LoginPage {
    constructor() {
    }
    get getUsername(){
        return cy.get(username)
    }

    get getPassword(){
        return cy.get(password)
    }

    get getBtn(){
        return cy.get(btn)
    }

    get getErr(){
        return cy.get(err)
    }

}