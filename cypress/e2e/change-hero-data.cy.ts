describe("change hero data", () => {
  it("Like hero", () => {
    cy.visit("http://localhost:3000/heroes");
    cy.get("nav button").click();
    cy.get("[data-cy='email']").type("admin@test.com");
    cy.get("[data-cy='password']").type("test123");
    cy.get("form button").click();
    cy.get("[href='/heroes/new']").should("be.visible");

    cy.get("[data-cy='name']").eq(7).should("contain", "the slow man");
    cy.get("[data-cy='fans']")
      .eq(7)
      .invoke("text")
      .then((beforeText) => {
        cy.get("[data-cy='like']").eq(7).click();
        cy.get("[data-cy='fans']")
          .eq(7)
          .invoke("text")
          .should((afterText) => {
            expect(afterText).not.to.eq(beforeText);
          });
      });
  });

  it("Money hero", () => {
    cy.visit("http://localhost:3000/heroes");
    cy.get("nav button").click();
    cy.get("[data-cy='email']").type("admin@test.com");
    cy.get("[data-cy='password']").type("test123");
    cy.get("form button").click();
    cy.get("[href='/heroes/new']").should("be.visible");

    cy.get("[data-cy='name']").eq(7).should("contain", "the slow man");
    cy.get("[data-cy='saves']")
      .eq(7)
      .invoke("text")
      .then((beforeText) => {
        cy.get("[data-cy='money']").eq(7).click();
        cy.get("button.bg-red-600").click();
        cy.get("[data-cy='saves']")
          .eq(7)
          .invoke("text")
          .should((afterText) => {
            expect(afterText).not.to.eq(beforeText);
          });
      });
  });
});
