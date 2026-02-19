describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Clica no link "Cadastra-se" e redireciona para a página de cadastro da clínica', () => {
        cy.get('[href="/cadastro"]').click();
        cy.location('pathname').should('equal', '/cadastro')

    })

    it('Digita dados da clínica e exibe a área para inserção de dados técnicos', () => {
        cy.get('[href="/cadastro"]').click();
        cy.get('[data-test="inputNome"]').type('Alexandre C');
        cy.get('[data-test="inputCNPJ"]').type('12598432');
        cy.get('[data-test="inputEmail"]').type('alexandre@teste.com');
        cy.get('[data-test="inputSenha"]').type('Senha123');
        cy.get('[data-test="inputSenhaVerificada"]').type('Senha123');
        cy.get('.sc-bcXHqe').click();
        cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible')
        cy.get('.sc-laZRCg').should('exist').should('be.visible')
    })

    it('Cadastra uma clínica', () => {
        cy.get('[href="/cadastro"]').click();
        cy.get('[data-test="inputNome"]').type('Alexandre C');
        cy.get('[data-test="inputCNPJ"]').type('12598432');
        cy.get('[data-test="inputEmail"]').type('alexandre@teste.com');
        cy.get('[data-test="inputSenha"]').type('Senha123');
        cy.get('[data-test="inputSenhaVerificada"]').type('Senha123');
        cy.get('.sc-bcXHqe').click()
        cy.get('[data-test="inputTelefone"]').type('9999999999');
        cy.get('[data-test="inputCEP"]').type('99999999');
        cy.get('[data-test="inputRua"]').type('Not found');
        cy.get('[data-test="inputNumero"]').type('404');
        cy.get('[data-test="inputComplemento"]').type('do lado do 200');
        cy.get('[data-test="inputEstado"]').type('RS');
        cy.contains('Cadastrar').click()
        cy.location('pathname').should('equal', '/login');

    })

})
