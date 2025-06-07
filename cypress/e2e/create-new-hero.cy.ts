import "cypress-file-upload";

describe("create new hero", () => {
  it("create new hero successfully", () => {
    cy.visit("http://localhost:3000/heroes");
    cy.get("nav button").click();
    cy.get("[data-cy='email']").type("admin@test.com");
    cy.get("[data-cy='password']").type("test123");
    cy.get("form button").click();
    cy.get("[href='/heroes/new']").should("be.visible");

    cy.get("[href='/heroes/new'] button").click();
    cy.get("[data-cy='nameInput']").type("the slow man");
    cy.get("[data-cy='priceInput']").type("80");
    cy.get("[data-cy='fansInput']").type("10");
    cy.get("[data-cy='savesInput']").type("40");
    cy.get("[data-cy='powersSelect']").select(6);
    cy.get("[data-cy='avatarFile']").attachFile("avatar-usuario.jpg");
    cy.get("form button").click();
  });

  it("create new hero fail", () => {
    cy.visit("http://localhost:3000/heroes");
    cy.get("nav button").click();
    cy.get("[data-cy='email']").type("admin@test.com");
    cy.get("[data-cy='password']").type("test123");
    cy.get("form button").click();
    cy.get("[href='/heroes/new']").should("be.visible");

    cy.get("[href='/heroes/new'] button").click();
    cy.get("[data-cy='nameInput']").type("the slow man");
    cy.get("[data-cy='priceInput']").type("80");
    cy.get("[data-cy='fansInput']").type("10");
    cy.get("[data-cy='savesInput']").type("40");
    cy.get("[data-cy='avatarFile']").attachFile("avatar-usuario.jpg");
    cy.get("form button").click();
    cy.get(".text-red-500").should("contain", "Powers is required");
  });
});
