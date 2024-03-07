import { BasePage } from "./base.page";

export class RadieButtonsPage extends BasePage {
    static get url() {
        return "/radio-button";
    }

    static get radioButtons() {
        return cy.get(".custom-radio");
    }

    static get results() {
        return cy.get('.text-success')
    }
}