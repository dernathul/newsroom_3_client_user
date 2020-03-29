describe("User can buy a subscription", () => {
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
      method: "POST",
      url: "http://localhost:3000/api/v1/subscriptions",
      response: {status: "paid"}
    });
    cy.visit("/");
    cy.get("#article-list").within(() => {
      cy.get("#article-1");
      cy.get("#open-article").click();
    });
  });

  it("by clickin Buy Subscription", () => {
    cy.get("button")
      .contains("Buy Subscription")
      .click();
    cy.get('form[id="subscription-form"]').should("be.visible");
    cy.get('form[id="subscription-form"]').within(() => {
      cy.get('iframe[name^="__privateStripeFrame5"]').then($iframe => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find('input[name="cardnumber"]')
          .type("4242424242424242", { delay: 10 });
      });

      cy.get('iframe[name^="__privateStripeFrame6"]').then($iframe => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find('input[name="exp-date"]')
          .type("1220", { delay: 10 });
      });

      cy.get('iframe[name^="__privateStripeFrame7"]').then($iframe => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find('input[name="cvc"]')
          .type("123", { delay: 10 });
      });
      cy.get('button').contains('Confirm Subscription').click()
    });
  });
});
