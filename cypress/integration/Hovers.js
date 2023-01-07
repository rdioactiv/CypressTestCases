describe('Hovers', () => {
    it('Hover to all 3 pictures and print invisible text', () => {
        cy.visit(Cypress.env('url') + "/hovers")
      cy.get('div[class="figcaption"]').invoke('show').each((name, index, $list)=>{
        cy.log(name.text())
        })
   
    });
  });