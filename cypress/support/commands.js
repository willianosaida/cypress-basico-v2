Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Willian')
    cy.get('#lastName').type('Osaida')
    cy.get('#email').type('willian.alberto.osaida@nttdata.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})