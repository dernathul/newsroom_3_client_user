describe("User can select article by category", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles.json"
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/**",
      response: "fixture:specific_article.json"
    });
    cy.visit("/");
  });
  it("can see all articles in one category", () => {
    cy.get("#category-header");
    cy.get("#sports").click();
    cy.get("#article-list").should("contain", "This is a smashing title");
    cy.get("#article-list").should("not.contain", "Zero infected on Mars");
    cy.get("#article-list").should("not.contain", "Lau new president");
    cy.get("#open-article").click();
    cy.get("#single-article").should("contain", "This is a smashing title");
    cy.get("h5").should("contain", "And this is an awesome snippet");
    cy.get("p").should("contain", "And this is the best content you ever read");
    cy.get("#article-list").should("not.exist");
    cy.get("#home-button").click();
    cy.get("#article-list").should("contain", "This is a smashing title");
  });
});
