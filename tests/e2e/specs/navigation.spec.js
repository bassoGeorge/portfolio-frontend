describe("Navigation", () => {
	describe("Navigation between the main pages of the app using the Navigation Bar", () => {

		beforeEach(() => {
			cy.visit('/')
		})

		it("should visit About Me page when clicked on the about me page linke", () => {
			cy
			.get('[data-testid=page-nav-link-home]').click()
			.location('pathname').should('equal', '/')
			.get('[data-testid=page-nav-link-home]').should('have.class', 'page-link-active')
		})

		it("should visit About Me page when clicked on the about me page linke", () => {
			cy
			.get('[data-testid=page-nav-link-about]').click()
			.location('pathname').should('equal', '/about-me')
			.get('[data-testid=page-nav-link-about]').should('have.class', 'page-link-active')
		})

		it("should visit Work page when clicked on the about me page linke", () => {
			cy
			.get('[data-testid=page-nav-link-work]').click()
			.location('pathname').should('equal', '/my-work')
			.get('[data-testid=page-nav-link-work]').should('have.class', 'page-link-active')
		})

		it("should visit Skills page when clicked on the about me page linke", () => {
			cy
			.get('[data-testid=page-nav-link-skills]').click()
			.location('pathname').should('equal', '/skills')
			.get('[data-testid=page-nav-link-skills]').should('have.class', 'page-link-active')
		})

		it("should visit Contact Me page when clicked on the about me page linke", () => {
			cy
			.get('[data-testid=page-nav-link-contact]').click()
			.location('pathname').should('equal', '/contact-me')
			.get('[data-testid=page-nav-link-contact]').should('have.class', 'page-link-active')
		})


	})

	describe("Quick Links", () => {

		beforeEach(() => {
			cy.visit('/')
		})

		it("should open the correct GitHub URL on clicking the GitHub link", () => {
			cy
			.get('[data-testid=quick-link-github]')
			.should('have.attr', 'href', 'https://github.com/bassoGeorge')
			.should('have.attr', 'target', '_blank')
		})

		it("should have a valid Resume link on the Resume button", () => {
			cy
			.get('[data-testid=quick-link-resume]')
			.should('have.attr', 'target', '_blank')
			.then(($el) => {
				const resumeLink = $el.attr('href')
				cy.request(resumeLink).its('status').should('equal', 200)
			})
		})

	})

	describe("Responsive navigation", () => {
		it("should show all navs in desktop and no toggle button", () => {
			cy.viewport('macbook-15')

			cy
			.get('[data-testid=quick-links-toggle-button]')
			.should('not.be.visible')

			cy
			.get('[data-testid=quick-links]')
			.should('be.visible')

			cy
			.get('[data-testid=page-links]')
			.should('be.visible')

		})

		it("should hide quick-links on mobile and give toggle functionality", () => {
			cy.viewport('iphone-6')

			cy
			.get('[data-testid=quick-links]')
			.should('not.be.visible')
			.get('[data-testid=page-nav-link-home]')
			.should('be.visible')
			.get('[data-testid=quick-links-toggle-button]')
			.should('be.visible')
			.click()
			.get('[data-testid=quick-links]')
			.should('be.visible')
			.get('[data-testid=page-nav-link-home]')
			.should('not.be.visible')
			.get('[data-testid=quick-links-toggle-button]')
			.click()
			.get('[data-testid=page-nav-link-home]')
			.should('be.visible')
		})

	})
})
