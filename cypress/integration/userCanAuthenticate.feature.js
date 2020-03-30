describe("user can login", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "https://newsroom3api.herokuapp.com/api/v1/auth/sign_in",
      response: "fixture:login.json"
    });
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/auth/sign_in",
      response: "fixture:login.json"
    });
    cy.visit("/");
  });
  it("user can succesfully login", () => {
    cy.get("#login-button").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("karlmarx@mail.com");
      cy.get("#password").type("password");
      cy.get("#submit-button").click();
    });
    cy.get("#logged_in-message").should(
      "contain",
      "Welcome back karlmarx@mail.com"
    );
  });
});
