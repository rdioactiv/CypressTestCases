describe('Dropdown', () => {
    it('should select option 2 from the dropdown menu', () => {
        cy.visit(Cypress.env('url') + "/dropdown")
      cy.get('#dropdown').select('Option 2');
      cy.get('#dropdown').should('contain', 'Option 2');
    });
  });
  