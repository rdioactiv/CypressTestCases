describe('Login', () => {
    it('should allow a user to log in', () => {
      cy.visit(Cypress.env('url') + "/login")
    
      cy.get('#username').type('tomsmith')
      cy.get('#password').type('SuperSecretPassword!')
      cy.get('button').click()
      cy.get('#flash').should('contain', 'You logged into a secure area!')
      cy.contains('Logout').click()
      cy.get('#flash').should('contain', 'You logged out of the secure area!')
    })
  })
  