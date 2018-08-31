import {expect} from "chai"
import {getters} from '../../../../src/modules/contact/store/getters'

const {isValid} = getters

describe('[contact:store] getters', () => {

	describe("isValid", () => {
		const cleanState = {
			name   : {error: false},
			email  : {error: false},
			subject: {error: false},
			body   : {error: false},
		}

		it("should return false if any of the fields are in error", () => {
			expect(isValid({...cleanState, name: {error: true}})).to.be.false
			expect(isValid({...cleanState, email: {error: true}})).to.be.false
			expect(isValid({...cleanState, subject: {error: true}})).to.be.false
			expect(isValid({...cleanState, body: {error: true}})).to.be.false
			expect(isValid({...cleanState, body: {error: true}, name: {error: true}})).to.be.false
		})

		it("should return true only if all fields are without error", () => {
			expect(isValid(cleanState)).to.be.true
		})
	})


})
