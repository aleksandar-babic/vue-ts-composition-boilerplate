// https://docs.cypress.io/api/introduction/api.html

describe("Counter page", () => {
  it("Visits the app user page url and fetches random user", () => {
    cy.visit("/user");
    cy.contains("h1", "This is user page");
    cy.get(".fetchUserbtn").click();

    const expectedProps = [
      "id",
      "name",
      "email",
      "address",
      "phone",
      "website",
      "company"
    ];

    expectedProps.forEach(prop => cy.get(`p.${prop}-prop`).should("not.empty"));
  });

  it("Visits the app user page url, fetches random user, goes back to home page", () => {
    cy.visit("/user");
    cy.contains("h1", "This is user page");
    cy.get(".fetchUserbtn").click();

    const expectedProps = [
      "id",
      "name",
      "email",
      "address",
      "phone",
      "website",
      "company"
    ];

    expectedProps.forEach(prop => cy.get(`p.${prop}-prop`).should("not.empty"));

    cy.get("p.name-prop").then($name => {
      cy.get("a[href='/']")
        .first()
        .click();

      const cleanName = $name
        .text()
        .trim()
        .split("name: ")[1];
      cy.get(".userName").should("have.text", `Hi ${cleanName},`);
    });
  });
});
