describe("user views articles", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles",
        response: "fixture:articles_index.json"
      });
      cy.visit("/");
    });
    
    it ('displays article', () => {
        cy.get("#title").should("contain", "Title")
    });
  })