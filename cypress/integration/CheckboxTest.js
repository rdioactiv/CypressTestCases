describe('Checkboxes', () => {
    it('check and uncheck checkboxes', () => {
      cy.visit(Cypress.env('url') + "/checkboxes")
  
      // Check first checkbox
      cy.get('#checkboxes input:nth-of-type(1)').check()
      cy.get('#checkboxes input:nth-of-type(1)').should('be.checked');
  
      // Uncheck second checkbox
      cy.get('#checkboxes input:nth-of-type(2)').uncheck()
      cy.get('#checkboxes input:nth-of-type(2)').should('not.be.checked');
    });
    
  });
  