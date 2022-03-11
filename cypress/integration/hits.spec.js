context("Top 100 rendering test", () => {
  it("Test in hits", () => {
    cy.visit("http://localhost:8080/hits");
    cy.get("h1").contains("Os 100 sites mais visitados");
  });
});
