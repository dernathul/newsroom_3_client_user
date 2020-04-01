describe("user can Sign up for an account", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/articles",
      response: "fixture:articles.json"
    });
    cy.visit("/");
  });

  it("user can register for an account", () => {
    cy.get("#category-header");
    cy.get("#sign-up").click();
    cy.get("#sign-up-form").within(() => {
      cy.get("#email").type("email");
      cy.get("#password").type("password");
      cy.get("#password").type("confirm password");
      cy.get("#signup-button").click();
    });
    cy.get("#singed-up-message").should("contain", "Account created!");
  });
});
