import {createLocalVue, shallowMount} from '@vue/test-utils'
import Vuex from 'vuex'
import {expect} from 'chai'
import sinon from 'sinon'
import ContactForm from '../../../../src/modules/contact/components/ContactForm'

const localVue = createLocalVue()

localVue.use(Vuex)

describe("[contact:components] ContactForm", () => {
	let mutations,
	    actions,
	    getters,
	    store,
	    node

	const state = {
		name   : {
			value  : 'testing name',
			error  : false,
			touched: false
		},
		email  : {
			value  : 'testing@email.com',
			error  : false,
			touched: true
		},
		subject: {
			value  : 'testing subject',
			error  : true,
			touched: false
		},
		body   : {
			value  : 'testing body',
			error  : true,
			touched: true
		}
	}

	beforeEach(() => {
		mutations = {
			touchField: sinon.spy(),
			resetForm : sinon.spy()
		}
		actions   = {
			updateField: sinon.spy()
		}
		getters   = {
			isValid: sinon.stub().callsFake(() => false)
		}
		store     = new Vuex.Store({
			modules: {
				contact: {
					namespaced: true,
					state,
					mutations,
					actions,
					getters
				}
			}
		})
		node      = shallowMount(ContactForm, {store, localVue})
	})

	it("should render the layout correctly", () => {
		expect(node.contains('form')).to.be.true
		expect(node.find('form').findAll('[role=group]').length).to.equal(3)
		expect(node.find('[data-testid=contact-submit-button]').text()).to.equal('SEND')
		expect(node.find('[data-testid=connect-with-me-button]').text()).to.equal('Connect with me')
		expect(node.find('[data-testid=connect-with-me-button] > img.icon').exists()).to.be.true
		expect(node.find('form').find('input[name=name]').exists()).to.be.true
		expect(node.find('form').find('input[name=subject]').exists()).to.be.true
		expect(node.find('form').find('input[name=email]').exists()).to.be.true
		expect(node.find('form').find('textarea[name=body]').exists()).to.be.true
	})

	it("should map the state form fields into the correct inputs", () => {
		expect(node.find('input[name=name]').element.value).to.equal("testing name")
		expect(node.find('input[name=subject]').element.value).to.equal("testing subject")
		expect(node.find('input[name=email]').element.value).to.equal("testing@email.com")
		expect(node.find('textarea[name=body]').element.value).to.equal("testing body")
	})

	it("should call touchField when the inputs are blurred", () => {
		node.find('input[name=name]').trigger('blur')
		node.find('input[name=email]').trigger('blur')
		node.find('input[name=subject]').trigger('blur')
		node.find('textarea[name=body]').trigger('blur')

		expect(mutations.touchField.args.map(args => args[1])).to.eql([
			'name',
			'email',
			'subject',
			'body',
		])
	})

	it("should render correct validation classes for inputs based on the state", () => {
		expect(node.find('input[name=name]').classes()).to.not.include('invalid').and.not.include('touched')
		expect(node.find('input[name=email]').classes()).to.include('touched').and.not.include('invalid')
		expect(node.find('input[name=subject]').classes()).to.include('invalid').and.not.include('touched')
		expect(node.find('textarea[name=body]').classes()).to.include('invalid').and.include('touched')
	})

	it("should disable or enable the button based on the forms's validity", () => {
		expect(node.find('[data-testid=contact-submit-button]').attributes().disabled).to.equal('disabled')
	})

	it("should call updateField on value change of input field", () => {
		node.find('input[name=name]').setValue('test2 name')
		node.find('input[name=email]').setValue('test2@email.com')
		node.find('input[name=subject]').setValue('new subject')
		node.find('textarea[name=body]').setValue('new body')

		expect(actions.updateField.args.map(args => args[1])).to.eql([
			{
				field: 'name',
				value: 'test2 name'
			}, {
				field: 'email',
				value: 'test2@email.com'
			}, {
				field: 'subject',
				value: 'new subject'
			}, {
				field: 'body',
				value: 'new body'
			}
		])
	})

	it("should reset the form on being destroyed", () => {
		node.destroy()
		expect(mutations.resetForm.calledOnce).to.be.true
	})
})
