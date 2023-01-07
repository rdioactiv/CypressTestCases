describe('Drag & Drop', () => {
  it('should drag and drop the "B" to "A"', () => {
    cy.visit(Cypress.env('url') + "/drag_and_drop")

    const dataTransfer = new DataTransfer
    cy.get('#column-b').trigger('dragstart', {
      dataTransfer
    })
    cy.get('#column-a').trigger('drop',{
      dataTransfer
    })
    cy.get('#column-a').should('contain', 'B');
  });
});
