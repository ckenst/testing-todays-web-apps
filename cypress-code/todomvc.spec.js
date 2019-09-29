/// <reference types="cypress" />

describe('todo actions', function() {
    it('should add a new todo to the list', function() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
 
        cy.get('.new-todo').type('first todo{enter}')
        cy.get('.view > label').should('contain.text', 'first todo')
    })

    it('should mark a todo as complete', function() {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })
})
