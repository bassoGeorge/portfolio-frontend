import {fullUrl} from '../support/utils'

describe("Navigation", () => {
	describe("Navigation between the main pages of the app using the Navigation Bar", () => {

		beforeEach(() => {
			cy.visit('/')
		})

		it("should visit About Me page when clicked on the about me page linke", () => {
			cy
			.get('[data-testid=page-nav-link-home]').click()
			.url().should('be.equal', fullUrl('/'))
			.get('[data-testid=page-nav-link-home]').should('have.class', 'page-link-active')
		})

		it("should visit About Me page when clicked on the about me page linke", () => {
			cy
			.get('[data-testid=page-nav-link-about]').click()
			.url().should('be.equal', fullUrl('/about-me'))
			.get('[data-testid=page-nav-link-about]').should('have.class', 'page-link-active')
		})

		it("should visit Work page when clicked on the about me page linke", () => {
			cy
			.get('[data-testid=page-nav-link-work]').click()
			.url().should('be.equal', fullUrl('/my-work'))
			.get('[data-testid=page-nav-link-work]').should('have.class', 'page-link-active')
		})

		it("should visit Skills page when clicked on the about me page linke", () => {
			cy
			.get('[data-testid=page-nav-link-skills]').click()
			.url().should('be.equal', fullUrl('/skills'))
			.get('[data-testid=page-nav-link-skills]').should('have.class', 'page-link-active')
		})

		it("should visit Contact Me page when clicked on the about me page linke", () => {
			cy
			.get('[data-testid=page-nav-link-contact]').click()
			.url().should('be.equal', fullUrl('/contact-me'))
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
})
