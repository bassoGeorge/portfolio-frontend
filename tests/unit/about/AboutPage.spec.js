import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import AboutPage from '../../../src/modules/about/AboutPage'

describe('[about] AboutPage', () => {
	it('should render ABOUT ME heading', () => {
		const wrapper = shallowMount(AboutPage, {
			propsData: {}
		})
		expect(wrapper.text()).to.include("ABOUT ME")
	})
})
