import {nav} from "../els/dmNavEl.json"
export default class NavPage {
    constructor() {

    }
    get containsHome(){
        return cy.contains(nav.home)
    }

    get containsSource(){
        return cy.contains(nav.source)
    }

    get containsDiscoverytask(){
        return cy.contains(nav.discoverytask)
    }

    get containsSensitive(){
        return cy.contains(nav.sensitive)
    }

    get containsJob(){
        return cy.contains(nav.job)
    }

    get containsStrategy(){
        return cy.contains(nav.strategy)
    }

    get containsReport(){
        return cy.contains(nav.report)
    }

    get containsMnitor(){
        return cy.contains(nav.monitor)
    }

    get containsDatatracing(){
        return cy.contains(nav.datatracing)
    }
}