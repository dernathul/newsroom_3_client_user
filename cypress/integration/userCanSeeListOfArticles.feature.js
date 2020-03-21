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
        cy.get("#title").within(() => {
          cy.contains('Zero infected on Mars')
          cy.contains('Lau new president')
          })
        cy.get("#snippet").within(() => {
          cy.contains('Mars becomes more and more desirable as Earth is struggling with Corona Virus')
          cy.contains('Mars wants Lau on the front line')
          })
       })
    })
  })
})