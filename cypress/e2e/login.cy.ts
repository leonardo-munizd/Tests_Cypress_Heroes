describe("Login tests", () => {
  it("Login successfully", () => {
    cy.visit("http://localhost:3000/heroes");
    cy.get("nav button").click();
    cy.get("[data-cy='email']").type("admin@test.com");
    cy.get("[data-cy='password']").type("test123");
    cy.get("form button").click();
    cy.get("[href='/heroes/new']").should("be.visible");
  });

  it("Login Fail", () => {
    cy.visit("http://localhost:3000/heroes");
    cy.get("nav button").click();
    cy.get("[data-cy='email']").type("admin@test.com");
    cy.get("[data-cy='password']").type("test");
    cy.get("form button").click();
    cy.get(".text-red-500").should("contain", "Invalid email or password");
  });
});
