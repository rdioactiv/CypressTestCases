describe('Notifications', () => {
    it('click 4 times and retrive notifications', () => {
        cy.visit(Cypress.env('url') + "/notification_message_rendered")

        for (let i = 0; i < 4; i++) {
            cy.get('p > a').click()
             cy.get('#flash').then(function(notification){
                 cy.log(notification.text())
        })
          }


    })
})