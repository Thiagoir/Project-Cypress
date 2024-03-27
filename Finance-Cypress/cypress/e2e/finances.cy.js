/// <reference types="cypress" />

describe('Transações', () => {
    
    // hooks -> executado antes ou depois de cada teste ou de todos os testes
    // before
    // after
    // beforeEach
    // afterEach

    beforeEach(() => {

        cy.visit("https://dev-finance.netlify.app")
        
    });
    
    it('Cadastrar uma entrada', () => {
        
        criarTransacao("Freela", 500)
        criarTransacao("Salario", 840)
        
        cy.get('#data-table > tbody > tr:nth-child(1) > td.description').should('have.text', "Freela")
        cy.get('#data-table > tbody > tr:nth-child(2) > td.description').should('have.text', "Salario")
    });

    it('Cadastrar uma saída', () => {

        criarTransacao('Mercado', -300)

        cy.get('#data-table > tbody > tr:nth-child(1) > td.description').should('have.text', "Mercado")
    });

    it('Excluir transação', () => {

        criarTransacao('Freela', 500)
        criarTransacao('Salario', 840)
        cy.contains('.description', 'Freela') //  busca o elemento que tem a class description e com o texto Freela
            .parent()   //pega o pai do elemento que tem a class description com Freela
            .find('img') // encontra a imagem dentro desse pai
            .click()

        cy.get('[data-index="0"] > .description').should('have.have.length', 1)
    });
});

// Esta função serve para chamar apenas por criarTransacao durante os steps, para não ser necessario  digitar toda a função novamente
function criarTransacao(descricao, valor) {
    cy.contains('Nova Transação').click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2024-03-17")

    cy.contains('button', 'Salvar').click()

}



