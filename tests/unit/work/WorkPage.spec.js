import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import WorkPage from '../../../src/modules/work/WorkPage'

describe('WorkPage.vue', () => {
	it('renders Work page message', () => {
		const wrapper = shallowMount(WorkPage, {
			propsData: {}
		})
		expect(wrapper.text()).to.include('Work Page')
	})
})
