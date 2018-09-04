import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import ContactPage from '../../../src/modules/contact/ContactPage'
import ContactForm from '../../../src/modules/contact/components/ContactForm'

describe('[contact] ContactPage', () => {
	const node = shallowMount(ContactPage, {
		propsData: {}
	})

	it('should render the layout correctly', () => {
		expect(node.find('main').exists()).to.be.true
		expect(node.find('[data-testid=title]').text()).to.equal('CONTACT ME')
		expect(node.find('aside').exists()).to.be.true
		expect(node.find('aside img').exists()).to.be.true
		expect(node.find(ContactForm).exists()).to.be.true
	})
})
