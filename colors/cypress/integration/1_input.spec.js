describe('Check the input form', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    
     it('Allows input', () => {
         cy.get('#choose_color')
     })
 
     it('Check input 1', () => {
         const text = '000'
         cy.get('#choose_color').eq(text).type(text).should('have.value', text)
     })
 
     it('Check input 2', () => {
         const text = 'f234fa'
         cy.get('#choose_color').type(text).should('have.value', text)
         cy.get('button').click()
     })
 })