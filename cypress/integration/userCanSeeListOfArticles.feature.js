describe('successfully displays', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles.json"
    });
    cy.visit("/");
  });

  it('first article', () => {
    cy.get("#article-1").within(() => {
      cy.get("#title").should("contain", "Zero infected on Mars")
      cy.get("#snippet").should("contain", "Mars becomes more and more desirable as Earth is struggling with Corona Virus")
    })
  })
  
  it('second article', () => {
    cy.get("#article-2").within(() => {
      cy.get("#title").should("contain", "Lau new president")
      cy.get("#snippet").should("contain", "Mars wants Lau on the front line")
    })
  }) 
})