describe("Edit hero information", () => {
  it("edit hero power", () => {
    cy.visit("http://localhost:3000/heroes");
    cy.get("nav button").click();
    cy.get("[data-cy='email']").type("admin@test.com");
    cy.get("[data-cy='password']").type("test123");
    cy.get("form button").click();
    cy.get("[href='/heroes/new']").should("be.visible");

    cy.get("[data-cy='name']").eq(7).should("contain", "the slow man");
    cy.get("[data-cy='pencil']").eq(7).click();
    cy.get("[data-cy='powersSelect']").select(7);
    cy.get("form button").click();
    cy.get("[data-cy='powers']").eq(7).should("contain", "Super Logistics");
  });
});
