import { TextboxPage } from "../../pageObjects/textbox.page";
import { CheckboxPage } from "../../pageObjects/checkbox.page";
import { RadieButtonsPage } from "../../pageObjects/radioButtons.page";
import { WebTablesPage } from "../../pageObjects/webtable.page";

describe("DemoQA", () => {
    context("Text Box", () => {
      beforeEach(() => {
        TextboxPage.visit();
        // cy.visit("https://demoqa.com");
      });
  
      it("Enter textfield data", () => {
        // TODO: Implement scenario

        TextboxPage.usernameField.type("Joe");
        TextboxPage.userEmailField.type("xxx@yyy.zz");
        TextboxPage.currentAddressField.type(
          "Some Random Current Address"
        );
        TextboxPage.permanentAddressField.type(
          "Some Random Permanent Address"
        );
        TextboxPage.submitButton.click();


        // TESTING output
        TextboxPage.outputUsernameField.should("have.text", "Name:Joe")
        //cy.get("p[id=name]").contains("Name:Joe")
        TextboxPage.outputUserEmailField.should("have.text","Email:xxx@yyy.zz");
        //cy.get("p[id='email']").contains("Email:xxx@yyy.zz");

        // cy.get("p[id='currentAddress']").should("have.text",
        //   "Current Address :Some Random Current Address"
        // );
        TextboxPage.outputCurrentAddressField.contains(
          "Current Address :Some Random Current Address"
        ); // this is a special case wehre the output value contains a special symbol

        TextboxPage.outputPermanentAddressField.should("have.text",
          "Permananet Address :Some Random Permanent Address"
        );
        // cy.get("p[id='permanentAddress']").contains(
        //   "Permananet Address :Some Random Permanent Address"
        // );
      });

      it("Enter textfield data - incorrect email format - negative case", () => {
        TextboxPage.usernameField.type("Joe");
        TextboxPage.userEmailField.type("xxx@yyy.");
        TextboxPage.currentAddressField.type(
          "Some Random Current Address"
        );
        TextboxPage.permanentAddressField.type(
          "Some Random Permanent Address"
        );
        TextboxPage.submitButton.click();

        TextboxPage.userEmailField.should("have.class", 'field-error');  // more apropriate
                                                                        // doesnt work on all mashines aperantly
        // cy.get("input[id='userEmail']").should("have.css", 'border', '1px solid rgb(255, 0, 0)');
        // cy.get("input[id='userEmail']").should("have.css", 'border-color', 'rgb(255, 0, 0)'); // a lil safer, but still not the best
      });
    });


    context("Checkbox", () => {
      beforeEach(() => {
        CheckboxPage.visit();
        // cy.visit("https://demoqa.com");
      });

      it("Click checkboxes - ", () => {
        // select expand all button
        CheckboxPage.expandAllButton.click();

        CheckboxPage.treeCheckboxes.contains("Notes").click();
        CheckboxPage.treeCheckboxes.contains("Angular").click();
        CheckboxPage.treeCheckboxes.contains("Private").click();
        CheckboxPage.treeCheckboxes.contains("Excel File.doc").click();

        CheckboxPage.results.contains("notes");
        CheckboxPage.results.contains("angular");
        CheckboxPage.results.contains("private");
        CheckboxPage.results.contains("excelFile");

        // select checkboxes Notes, Angular, Private, Excel File.doc
        // using method .contains("Notes") to specify checkbox
      });
    });

    context("Radio-buttons", () => {
      beforeEach(() => {
        RadieButtonsPage.visit();
        // cy.visit("https://demoqa.com");
      });

      it("Click radiobutton - Yes ", () => {
        RadieButtonsPage.radioButtons.contains("Yes").click();
        RadieButtonsPage.results.should("have.text", "Yes");
      });

      it("Click radiobutton - Impressive ", () => {
        RadieButtonsPage.radioButtons.contains("Impressive").click();
        RadieButtonsPage.results.should("have.text", "Impressive");
      });

      it("Click radiobutton - No (check disabled) ", () => {
        RadieButtonsPage.radioButtons.contains("No").should("have.class", "disabled")
      });

    });

    context("Web Table scenarios", () => {
      beforeEach(() => {
        WebTablesPage.visit();
      });
  
      it.only("Create new web table", () => {
        WebTablesPage.addNewRecordButton.click();
        
        var testName = "Joe";
        var testLastName = "Peshi";
        var testEmail = "test@test.test";
        var testAge = "42";
        var testSalary = "1";
        var testDepartmant = "gangster united";

        WebTablesPage.firstNameField.type(testName);
        WebTablesPage.lastNameField.type(testLastName);
        WebTablesPage.emailField.type(testEmail);
        WebTablesPage.ageField.type(testAge);
        WebTablesPage.salaryField.type(testSalary);
        WebTablesPage.departmentField.type(testDepartmant);

        WebTablesPage.submitButton.click()

        WebTablesPage.getRows
          .contains(testEmail)
          .parent()
          .should("contain.text", testName)
          .should("contain.text", testLastName)
          .should("contain.text", testEmail)
          .should("contain.text", testAge)
          .should("contain.text", testSalary)
          .should("contain.text", testDepartmant);
      });
    });
  });