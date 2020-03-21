describe("user sees articles", () => {
  beforeEach(() => {
    cy.visit("/")
  });

  describe('successfully', () => {
    before(() => {
      cy.server();
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/articles',
        response: 'fixture:articles.json'
      })
    })

    it('User sees title', () => {
      cy.get(".article").within(() => {
        cy.contains('Zero infected on Mars')
      })
    })
  })
})