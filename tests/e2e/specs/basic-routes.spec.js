describe("Availability of all basic routes of the app", () => {
	it('should show a Home Page', () => {
		cy.visit('/')
		cy.contains('h1', 'Hi, this is Anish George')
	})

	it('should show a About Me Page', () => {
		cy.visit('/about-me')
		cy.contains('h1', 'I\'m pretty cool you know!!')
	})

	it('should show a My Work Page', () => {
		cy.visit('/my-work')
		cy.contains('h1', 'Work Page')
	})

	it('should show a Skills Page', () => {
		cy.visit('/skills')
		cy.contains('h1', 'Skills Page')
	})

	it('should show a Contact Me Page', () => {
		cy.visit('/contact-me')
		cy.contains('h1', 'Contact Page')
	})

})
