// https://docs.cypress.io/api/introduction/api.html

describe("Counter page", () => {
  it("Visits the app counter page url and increments counter", () => {
    cy.visit("/counter");
    cy.contains("h1", "Super complex counter");
    cy.contains("p", "Current counter value: 0");
    cy.get(".bumpBtn").click();
    cy.contains("p", "Current counter value: 1");
  });
});
