describe('GET /clinicas - Listar Clínicas', () => {
    it('Deve retornar a lista de clínicas com status 200', () => {
        cy.request('GET', Cypress.env('api/clinica'))
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                expect(response.body.length).to.be.greaterThan(0);
            });
    });    
    
});