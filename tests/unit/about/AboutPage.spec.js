import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import AboutPage from '../../../src/modules/about/AboutPage'

describe('[about] AboutPage', () => {
	const node = shallowMount(AboutPage, {
		propsData: {}
	})

	it('should render the layout correctly', () => {
		expect(node.find('main').exists()).to.be.true
		expect(node.find('[data-testid=title]').text()).to.equal("ABOUT ME")

		expect(node.find('aside').exists()).to.be.true
		expect(node.find('aside img').exists()).to.be.true
	})
})
