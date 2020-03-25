describe('Visitor can read', () => {
  before(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/**",
      response: "fixture:specific_article.json"
    });
    cy.visit('/')
  })

  it('a specific article', () => {
    cy.get()
  })
})