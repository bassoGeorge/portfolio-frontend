import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import WorkPage from '../../../src/modules/work/WorkPage'

describe('[work] WorkPage', () => {
	it('renders Work page message', () => {
		const wrapper = shallowMount(WorkPage, {
			propsData: {}
		})
		expect(wrapper.text()).to.include('Work Page')
	})
})
