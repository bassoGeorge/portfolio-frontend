import {expect} from "chai"
import {defaultState} from '../../../../src/modules/contact/store/default-state'
import {bailIfInvalidField, mutations} from '../../../../src/modules/contact/store/mutations'

const {resetForm, updateField, touchField} = mutations

describe('[contact:store] mutations', () => {

	describe("resetForm", () => {
		it("should reset the state to initial default", () => {
			const state = {
				...defaultState,
				name: {
					...defaultState.name,
					value: "Dirty value"
				}
			}

			resetForm(state)
			expect(state).to.eql(defaultState)
		})
	})

	describe("touchField", () => {
		it("should mark the given field as touched", () => {
			const state = {...defaultState}

			touchField(state, 'name')
			expect(state).to.eql({
				...defaultState,
				name: {
					...defaultState.name,
					touched: true
				}
			})

			touchField(state, 'email')
			expect(state.email.touched).to.be.true

			touchField(state, 'body')
			expect(state.body.touched).to.be.true

			touchField(state, 'subject')
			expect(state.subject.touched).to.be.true
		})

		it("should throw exception when invalid field is used", () => {
			const state = {...defaultState}
			expect(() => touchField(state, 'sirname')).to.throw()
		})
	})

	describe("updateField", () => {
		it("should update the given field with new data and error state", () => {
			const state = {...defaultState}

			updateField(state, {field: 'name', value: 'testing name', error: false})
			expect(state.name).to.eql({
				value  : 'testing name',
				error  : false,
				touched: false
			})
		})

		it("should throw exception when invalid field is being updated", () => {
			const state = {...defaultState}

			expect(() => updateField(state, {field: 'sirname', value: 'testing name', error: true})).to.throw()
		})
	})
})

describe("[contact:store] mutations / utils", () => {
	describe("bailIfInvalidField", () => {
		it("should not throw when given a valid field", () => {
			expect(() => bailIfInvalidField('name')).not.to.throw()
			expect(() => bailIfInvalidField('email')).not.to.throw()
			expect(() => bailIfInvalidField('subject')).not.to.throw()
			expect(() => bailIfInvalidField('body')).not.to.throw()
		})

		it("should throw when given an invalid field", () => {
			expect(() => bailIfInvalidField('sirname')).to.throw()
			expect(() => bailIfInvalidField('another')).to.throw()
		})
	})
})
