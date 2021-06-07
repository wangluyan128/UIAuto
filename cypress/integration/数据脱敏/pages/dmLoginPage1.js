import {username,password,btn} from "../views/dmLoginView.json"

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

}