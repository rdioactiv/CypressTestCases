describe('Horizontal Slider', () => {
    it('move the slider to position 3.5', () => {
        cy.visit(Cypress.env('url') + "/horizontal_slider")
      cy.get('input').invoke('val', '3.5').trigger('change');
      cy.get('input').should('have.value', '3.5');
    });
  });
  