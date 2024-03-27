describe("Login", () => {
  it("Login com sucesso", () => {
    // acessar a minha aplicação
    cy.visit("https://www.automationpratice.com.br").get("#top_header");
    // criar os steps/ações
    // selecionar esse elemento
    //  preencher o campo
    cy.get(".form-control").type("tmr@qa.com");
    // click no elemento
    cy.get(".clear > .theme-btn-one").click();
  });
});
