describe('Visitor can read', () => {
  before(() => {
    cy.server()
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
    cy.visit('/')
  })

  it('a specific article', () => {
    cy.get("#article-list").within(()=> {
      cy.get('#article-3')
      cy.get("#open-article").click()
    })
    cy.get("#single-article").should('contain', "This is a smashing title")
    cy.get("h5").should("contain", "And this is an awesome snippet")
    cy.get("p").should("contain", "And this is the best content you ever read");
    cy.get('#article-list').should('not.exist')
  })
})