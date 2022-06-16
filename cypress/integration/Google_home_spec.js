import google from "../Locators/Web_elements";

describe("Visit Google Home page", () => {
  before("Visit of page", () => {
    cy.visit("/");
  });
  it("Verify that the google page is loaded", () => {
    cy.request("/").then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.title().should("eq", "Google"),
      google.elements.logo().should("be.visible"),
      google.elements.searchBar().should("be.visible"),
      google.elements.googleSearchBtn().should("be.visible"),
      google.elements.luckyBtn().should("be.visible");
  });
});
