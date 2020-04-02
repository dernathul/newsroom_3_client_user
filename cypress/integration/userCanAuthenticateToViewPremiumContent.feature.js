describe("regular user can login and can't view premium content", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "https://newsroom3api.herokuapp.com/api/v1/auth/sign_in",
      response: "fixture:login_reg_user.json"
    });
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/auth/**",
      response: "fixture:login_reg_user.json"
    });
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/articles/1",
      response: "fixture:specific_premium_article.json"
    });
    cy.visit("/");
  });
  it("user can succesfully login", () => {
    cy.get("#login-button").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("#submit-button").click();
    });
    cy.get("#logged-in-message").should("contain", "Hi, user!");
    cy.get("#article-list").within(() => {
      cy.get("#article-1").within(() => {
        cy.get("#open-article").click();
      });
    });
    cy.get("#content").should("contain", "This is some content...");
  });
});

describe("premium user can login, view premium content and logout", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "https://newsroom3api.herokuapp.com/api/v1/auth/sign_in",
      response: "fixture:login_premium.json"
    });
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/auth/**",
      response: "fixture:login_premium.json"
    });
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/articles/1",
      response: "fixture:specific_premium_article.json"
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
    cy.get("#logged-in-message").should("contain", "Hi, karlmarx!");
    cy.get("#article-list").within(() => {
      cy.get("#article-1").within(() => {
        cy.get("#open-article").click();
      });
    });
    cy.get("#content").should(
      "contain",
      "This is some content repeated -This is some content repeated -This is some content repeated. And if you have read this far there is some more content coming your way. And if you dont want to continue reading you should have not bought that subscription"
    );
  });

  it("user can succesfully logout", () => {
    cy.get("#login-button").should("not.exist");
    cy.get("#logout-button").click();
    cy.get("#login-button").should("exist");
  });
});
