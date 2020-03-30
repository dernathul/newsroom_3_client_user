describe("User can buy a subscription", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/articles",
      response: "fixture:articles.json"
    });
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/articles/1",
      response: "fixture:specific_premium_article.json"
    });
    cy.route({
      method: "POST",
      url: "https://newsroom3api.herokuapp.com/api/v1/subscriptions",
      response: { status: "paid" }
    });
    cy.visit("/");
    cy.get("#article-list").within(() => {
      cy.get("#article-1");
      cy.get("#open-article").click();
    });
  });

  it("by clickin Buy Subscription", () => {
    cy.window().then(window => {
      window.store.dispatch({
        type: "AUTHENTICATE",
        payload: { currentUser: { email: "karlmarx@mail.com", role: "user" } }
      });
    });
    cy.get("button")
      .contains("Buy Subscription")
      .click();
    cy.wait(1000);
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
      cy.get("button")
        .contains("Confirm Subscription")
        .click();
      cy.wait(2000);

      cy.get("#flash-message").should(
        "contain",
        "Thank you for your purchase!"
      );
      // cy.get("#article-list").within(() => {
      //   cy.get("#article-1").within(() => {
      //     cy.get("#open-article").click();
      //   });
      // });
      // cy.get("#single-article").should("contain", "Zero infected on Mars");
      // cy.get("h5").should(
      //   "contain",
      //   "Mars becomes more and more desirable as Earth is struggling with Corona Virus"
      // );
      // cy.get("p").should(
      //   "contain",
      //   "This is some content repeated -This is some content repeated -This is some content repeated. And if you have read this far there is some more content coming your way. And if you dont want to continue reading you should have not bought that subscription"
      // );
    });
  });
});
