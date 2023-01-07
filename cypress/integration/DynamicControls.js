describe('DynamicControls', () => {
    it('remove checkbox and write "Hello" in the box', () => {
        cy.visit(Cypress.env('url') + "/dynamic_controls")

        cy.get('#checkbox-example > button').click()
        cy.get('#message').then(function(message){
        cy.log(message.text())
        })
       
        cy.get('#input-example > button').click()
        cy.get('input[type="text"]').type('Hello')
        cy.get('input[type="text"]').should('have.value', 'Hello')
        cy.get('#input-example > button').click()

    });
  });



  