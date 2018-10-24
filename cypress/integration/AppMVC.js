describe('AppMVC', function() {
    it('Loads the page', function() {
        cy.visit('http://localhost:3000');
        cy.get('#value').contains('0');
    });
    it('Increments correctly', function() {
        cy.visit('http://localhost:3000');
        cy.get('#increment').click();
        cy.get('#value').contains('1');
    });
    it('Decrements correctly', function() {
        cy.visit('http://localhost:3000');
        cy.get('#decrement').click();
        cy.get('#value').contains('0');
    });
});