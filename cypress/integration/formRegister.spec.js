context("Testing a new registration", () => {
  it("Test in register", () => {
    cy.visit("http://localhost:8080/register");
    cy.get("[placeholder='Digite seu nome']").type("laudemir");
    cy.get("[placeholder='Digite seu email']").type("laudemir@gmail.com");
    cy.get("[placeholder='Digite sua senha']").type("laudemir");
    cy.get("[placeholder='Confirme sua senha']").type("laudemir");
    cy.contains("Cadastrar").click();
    cy.contains("Entrar");
  });
});
