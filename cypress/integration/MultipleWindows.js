describe("Multiple windows", () => {
    it("Open new window, verify, come back and verify", () => {
        cy.visit(Cypress.env('url') + "/windows")

        
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.get('h3').should('contain', 'New Window')
        cy.go('back')
        cy.get('h3').should('contain', 'Opening a new window')

        })
      })
    
  
  