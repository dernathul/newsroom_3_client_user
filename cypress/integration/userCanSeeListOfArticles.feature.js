describe("user views articles", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles",
        response: "fixture:articles_list.json"
      });
      cy.visit("http://localhost:3001");
    });
    
    it('displays article', () => {
        cy.get("#title").should("contain", "Zero infected on Mars")
        cy.get("#content").should("contain", "Mars declared that it will deny entry for humans...")
    });
  })