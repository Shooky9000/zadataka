describe("Rate your field tech test cases", ()=> {

    beforeEach(() => {
        cy.visit("/B9HZ3l5");
      });

    it("TC01 - Should select star five", ()=>{        
        cy.get(".v-rating button").eq(4).click();
        cy.get(".mx-auto.px-2.text-caption").should("have.text", "5 - Awesome");

    });

    it("TC02 - Should leave a valid comment", ()=>{
        cy.contains("div", "Leave a comment").click();
        cy.get("textarea#input-33").type("Great comment!!").should("have.value", "Great comment!!");
    });

    it("TC03 - Should show an error when comment exceeds 500 characters",()=>{
        const longComment = "a".repeat(502);
        cy.contains("div", "Leave a comment").click();
        cy.get("textarea#input-33").type(longComment).should("have.value", longComment);
        cy.get(".v-counter.error--text.theme--light").should("contain", "502 / 500");
    });

    it("TC04 - Should select a $5 tip", ()=>{
        cy.get(".pointer.text-decoration-underline").contains("Leave a tip").click();
        cy.contains(".v-chip", "$ 5").click().should("not.have.class", "v-chip--outlined").should("not.have.class", "primary--text");
    });

    it("TC05 - Should clear tips if star is downgraded", ()=>{
        cy.get(".v-rating button").eq(4).click(); // Click on the 5th star
        cy.get(".v-rating button").eq(0).click(); // Click on the 1st star
        cy.get(".pt-5.pb-4").should("not.exist"); // Assert that the tip container with class pt-5.pb-4 does not exist
    });

    it("TC06 - Should show required error on empty 'Other' tip'", ()=>{
        cy.get(".pointer.text-decoration-underline").contains("Leave a tip").click();
        cy.contains(".v-chip", "Other").click();
        cy.contains("button", "Ok").click();
        cy.get(".v-messages__message").should("contain.text", "This field is required");
    });

    it("TC07 - Should show error for non-numeric 'Other' tip", ()=>{
        cy.get(".pointer.text-decoration-underline").contains("Leave a tip").click();
        cy.contains(".v-chip", "Other").click();
        cy.get("#input-45").clear().type("asd");
        cy.contains("button", "Ok").click();
        cy.get(".v-messages__message").should("contain.text", "Must be a number");
    });

    it("TC08 - Should accept numeric 'Other' tip", ()=>{
        cy.get(".pointer.text-decoration-underline").contains("Leave a tip").click();
        cy.contains(".v-chip", "Other").click();
        cy.get("#input-45").clear().type("50");
        cy.contains("button", "Ok").click();
        cy.get(".v-chip.v-chip--removable").should("have.length", 1).should("contain.text", "$ 50");
    });
});