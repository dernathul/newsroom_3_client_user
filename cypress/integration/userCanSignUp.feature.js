describe("user can Sign up for an account", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/articles",
      response: "fixture:articles.json"
    });

    cy.route({
      method: "POST",
      url: "https://newsroom3api.herokuapp.com/api/v1/auth",
      response: "fixture:sign_up.json"
    });
    cy.visit("/");
  });

  it("user can register for an account", () => {
    cy.get("#category-header");
    cy.get("#sign-up").click();
    cy.get("#sign-up-form").within(() => {
      cy.get("#email").type("johndoe@gmail.com");
      cy.get("#password").type("password");
      cy.get("#passwordconfirmation").type("password");
    
      cy.get("#signup-button").click();
      
    });
    cy.get("#signed-up-message").should("contain", "Hi, johndoe!");
    cy.get("#sign-up-form").should("not.exist");
    cy.get("#logout-button").should("exist");
    cy.get("#signup-button").should("not.exist");
  });
});

describe("user cannot Sign up with invalid credentials", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/articles",
      response: "fixture:articles.json"
    });

    cy.route({
      method: "POST",
      url: "https://newsroom3api.herokuapp.com/api/v1/auth",
      response: "fixture:sign_up.json"
    });
    cy.visit("/");
  });
  it("user cannot register with invalid email", () => {
    cy.get("#category-header");
    cy.get("#sign-up").click();
    cy.get("#sign-up-form").within(() => {
      cy.get("#email").type("usermail.com");
      cy.get("#password").type("password");
      cy.get("#passwordconfirmation").type("password");
      
      cy.get("#signup-button").click();
      
    });
    cy.get("#signed-up-message").should("not.exist");
    cy.get("#sign-up-form").should("exist");
    cy.get("#logout-button").should("not.exist");
  });
  it("user cannot sign up if password and password confirmation doesn´t match", () => {
    cy.get("#category-header");
    cy.get("#sign-up").click();
    cy.get("#sign-up-form").within(() => {
      cy.get("#email").type("johndoe@gmail.com");
      cy.get("#password").type("passord");
      cy.get("#passwordconfirmation").type("password");
      cy.get("#signup-button").click();
      
    });
    cy.get("#signed-up-message").should("not.exist");
    cy.get("#sign-up-form").should("exist");
    cy.get("#logout-button").should("not.exist");
  });
});
