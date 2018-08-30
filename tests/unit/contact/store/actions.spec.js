import {expect} from "chai"
import {actions} from '../../../../src/modules/contact/store/actions'
import sinon from 'sinon'

const {updateField} = actions

describe('[contact:store] actions', () => {
	describe("updateField", () => {
		it("should set error=false and the value=given value for name|body field on non-empty value", () => {
			const commit = sinon.spy()

			updateField({commit}, {field: 'name', value: 'first name'})
			updateField({commit}, {field: 'body', value: 'this is email body'})

			expect(commit.args).to.eql([
				['updateField', {field: 'name', value: 'first name', error: false}],
				['updateField', {field: 'body', value: 'this is email body', error: false}],
			])
		})

		it("should set error=true and the value='' for name|body field on empty value", () => {
			const commit = sinon.spy()

			updateField({commit}, {field: 'name', value: ''})
			updateField({commit}, {field: 'body', value: ''})

			expect(commit.args).to.eql([
				['updateField', {field: 'name', value: '', error: true}],
				['updateField', {field: 'body', value: '', error: true}],
			])
		})

		it("should set error=false and value is given value for email field on valid email", () => {
			const commit = sinon.spy()

			updateField({commit}, {field: 'email', value: 'valid_email@gmail.com'})

			expect(commit.args).to.eql([
				['updateField', {field: 'email', value: 'valid_email@gmail.com', error: false}]
			])
		})

		it("should set error=true and value is given value for email field on invalid email", () => {
			const commit = sinon.spy()

			updateField({commit}, {field: 'email', value: 'valid_email@gmail..com'})
			updateField({commit}, {field: 'email', value: ''})

			expect(commit.args).to.eql([
				['updateField', {field: 'email', value: 'valid_email@gmail..com', error: true}],
				['updateField', {field: 'email', value: '', error: true}],
			])
		})

		it("should never set error=true for subject as it's optional", () => {
			const commit = sinon.spy()

			updateField({commit}, {field: 'subject', value: 'I would like to hire you!'})
			updateField({commit}, {field: 'subject', value: ''})

			expect(commit.args).to.eql([
				['updateField', {field: 'subject', value: 'I would like to hire you!', error: false}],
				['updateField', {field: 'subject', value: '', error: false}],
			])
		})
	})
})
