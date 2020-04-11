describe('Check the exceptions', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Does not work if not hex format', () => {
        const text = 'red'
        cy.get('#choose_color').type(text).should('have.value', text)
        cy.get('button').click()
        cy.get('.rgb_format').should('be.empty')
    })

    it('Does not work if length of text is more than 7', () => {
        const text = '#36edf45a5'
        cy.get('#choose_color').type(text).should('have.value', text)
        cy.get('button').click()
        cy.get('.rgb_format').should('be.empty')
    })

    it('Does not work if length of text is equal to 5', () => {
        const text = '2354e'
        cy.get('#choose_color').type(text).should('have.value', text)
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.get('button').contains('Выбрать цвет').click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Вы ввели неправильное значение!')
        })
    })
})