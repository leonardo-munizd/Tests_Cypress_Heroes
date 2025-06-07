describe("Delete hero", () => {
  it("delete hero successfully", () => {
    cy.visit("http://localhost:3000/heroes");
    cy.get("nav button").click();
    cy.get("[data-cy='email']").type("admin@test.com");
    cy.get("[data-cy='password']").type("test123");
    cy.get("form button").click();
    cy.get("[href='/heroes/new']").should("be.visible");

    cy.get("[data-cy='name']").eq(7).should("contain", "the slow man");
    cy.get("[data-cy='trash']").eq(7).click();
    cy.get("button.bg-red-600").click();
  });
  it("delete hero no", () => {
    cy.visit("http://localhost:3000/heroes");
    cy.get("nav button").click();
    cy.get("[data-cy='email']").type("admin@test.com");
    cy.get("[data-cy='password']").type("test123");
    cy.get("form button").click();
    cy.get("[href='/heroes/new']").should("be.visible");

    cy.get("[data-cy='name']").eq(7).should("contain", "the slow man");
    cy.get("[data-cy='trash']").eq(7).click();
    cy.get(".gap-4 > .gap-2 > .text-gray-800").click();
  });
});
