// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
	it('Visits the app root url', () => {
		cy.visit('/')
		cy.contains('h1', 'Hi, this is Anish George')
		//cy.visit('/about')
		//cy.contains('h1', "I'm pretty cool you know!!")
	})
})
