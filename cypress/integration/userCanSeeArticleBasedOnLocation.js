const stubLocation = require ('../support/stubLocation')

describe('successfully displays', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/articles",
      response: "fixture:articles.json"
    });
    cy.visit("/", stubLocation({ latitude: 57.72, longitude: 11.93 }));
  });

  it('first article', () => {
    cy.get("#article-1").within(() => {
      cy.get("#title").should("contain", "Zero infected on Mars")
      cy.get("img").should("exist");
      cy.get("#snippet").should("contain", "Mars becomes more and more desirable as Earth is struggling with Corona Virus")
    })
  })
})