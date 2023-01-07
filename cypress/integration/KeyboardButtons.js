describe("KeyboardButtons windows", () => {
    it("Enter Keyboard Buttons and verify messages", () => {
        cy.visit(Cypress.env('url') + "/key_presses")
        
        
        var  keyboardButtons = ['{backspace}', '{shift}', '{pageup}']   
       
        var  total = keyboardButtons.length
        for (var i = 0; i < total; i++) {
            cy.get('#target').type(keyboardButtons[i])
        cy.get('#result').then(function(key){
            cy.log(key.text())
        })
    }
        
      })
    })