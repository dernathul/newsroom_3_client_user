describe("Visitor can read", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles.json"
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/1",
      response: "fixture:specific_premium_article.json"
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/3",
      response: "fixture:specific_free_article.json"
    });
    cy.visit("/");
  });

  it("a specific article", () => {
    cy.get("#article-list").within(() => {
      cy.get("#article-3").within(() => {
        cy.get("#open-article").click();
      });
    })
    cy.get("#single-article").should("contain", "This is a smashing title");
    cy.get("h5").should("contain", "And this is an awesome snippet");
    cy.get("p").should("contain", "And this is the best content you ever read");
    cy.get("#article-list").should("not.exist");
  });
  it("a premium article", () => {
    cy.get("#article-list").within(() => {
      cy.get("#article-1");
      cy.get("#open-article").click();
    });
    cy.get("#single-article").should("contain", "Zero infected on Mars");
    cy.get("h5").should("contain", "Mars becomes more and more desirable as Earth is struggling with Corona Virus");
    cy.get("p").should("contain", "To continue reading please buy a subcription");
    cy.get("#article-list").should("not.exist");
  });
});
