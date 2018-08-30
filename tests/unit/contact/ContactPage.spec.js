import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import ContactPage from '../../../src/modules/contact/ContactPage'

describe('[contact] ContactPage', () => {
	it('renders Contact page message', () => {
		const wrapper = shallowMount(ContactPage, {
			propsData: {}
		})
		expect(wrapper.text()).to.include('CONTACT ME')
	})
})
