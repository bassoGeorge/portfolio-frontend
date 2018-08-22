import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import AboutMePage from '../../../src/modules/about-me/AboutMePage'

describe('AboutMePage.vue', () => {
	it('renders About Me page message', () => {
		const wrapper = shallowMount(AboutMePage, {
			propsData: {}
		})
		expect(wrapper.text()).to.include("I'm pretty cool you know!!")
	})
})
