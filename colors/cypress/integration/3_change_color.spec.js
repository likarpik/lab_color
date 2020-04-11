describe('Check the changing of color and interpretation in rgb', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Works with a standart hex format', () => {
        const text = '#ff0000'
        cy.get('#choose_color').type(text).should('have.value', text)
        cy.get('button').click()
        cy.get('.color_square').should('have.css', 'background-color').and('eq', 'rgb(255, 0, 0)')
        cy.get('.rgb_format').should('not.be.empty')
    })

    it('Works with a hex format without #', () => {
        const text = 'ff4500'
        cy.get('#choose_color').type(text).should('have.value', text)
        cy.get('button').click()
        cy.get('.color_square').should('have.css', 'background-color').and('eq', 'rgb(255, 69, 0)')
        cy.get('.rgb_format').should('not.be.empty')
    })

    it('Works with a hex format with length = 4', () => {
        const text = '#000'
        cy.get('#choose_color').type(text).should('have.value', text)
        cy.get('button').click()
        cy.get('.color_square').should('have.css', 'background-color').and('eq', 'rgb(0, 0, 0)')
        cy.get('.rgb_format').should('not.be.empty')
    })

    it('Works with a hex format without # and length = 3', () => {
        const text = '456'
        cy.get('#choose_color').type(text).should('have.value', text)
        cy.get('button').click()
        cy.get('.color_square').should('have.css', 'background-color').and('eq', 'rgb(68, 85, 102)')
        cy.get('.rgb_format').should('not.be.empty')
    })
})