import { BasePage } from "./base.page";

export class CheckboxPage extends BasePage {
    static get url() {
        return "/checkbox";
    }

    static get expandAllButton() {
        return cy.get("button[title='Expand all']");
    }

    // cy.get('*[id^="events_list_"]')
    static get treeCheckboxes() {
        return cy.get('.rct-node')
    }
    
    static get results() {
        return cy.get('.text-success')
    }
}