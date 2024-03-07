export class BasePage {
    static visit() {
      return cy.visit(this.url);
    }

    static get url() {
        return "";
    }
    
    static get results() {
        return cy.get('.text-success')
    }

    static get submitButton() {
        return cy.get("button[id='submit']");
    }
}