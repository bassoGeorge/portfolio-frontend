import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import HomePage from '../../../src/modules/home/HomePage'

describe('HomePage.vue', () => {
	it('renders Home page message', () => {
		const wrapper = shallowMount(HomePage, {
			propsData: {}
		})
		expect(wrapper.text()).to.include('Hi, this is Anish George')
	})
})
