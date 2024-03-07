import { BasePage } from "./base.page";

export class TextboxPage extends BasePage {
    static get url() {
        return "/text-box";
    }

    static get usernameField() {
        return cy.get("input[id='userName']");
    }

    static get userEmailField() {
        return cy.get("input[id='userEmail']");
    }

    static get currentAddressField() {
        return cy.get("textarea[id='currentAddress']");
    }

    static get permanentAddressField() {
        return cy.get("textarea[id='permanentAddress']");
    }
    
    static get submitButton() {
        return cy.get("button[id='submit']");
    }

    static get outputUsernameField() {
        return cy.get("p[id='name']");
    }

    static get outputUserEmailField() {
        return cy.get("p[id='email']");
    }

    static get outputCurrentAddressField() {
        return cy.get("p[id='currentAddress']");
    }

    static get outputPermanentAddressField() {
        return cy.get("p[id='permanentAddress']");
    }
  }
