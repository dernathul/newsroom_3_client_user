const stubLocation = require('../support/stubLocation')

describe('successfully displays', () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/articles",
      response: "fixture:articles.json"
    });
    cy.route({
      method: "POST",
      url: "https://newsroom3api.herokuapp.com/api/v1/auth/sign_in",
      response: { session: { location: { latitude: 57.72, longitude: 11.93 }, edition: "Gothenburg" } }
    })
    cy.visit("/", stubLocation({ latitude: 57.72, longitude: 11.93 }));
  });

  it('first article', () => {
    cy.get("#category-header").should("contain", "Country wide")
    cy.wait(500)
    cy.get("#category-header").should("contain", "Gothenburg Edition")
  })
})
