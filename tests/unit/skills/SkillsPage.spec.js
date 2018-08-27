import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import SkillsPage from '../../../src/modules/skills/SkillsPage'

describe('[skills] SkillsPage', () => {
	it('renders Skills page message', () => {
		const wrapper = shallowMount(SkillsPage, {
			propsData: {}
		})
		expect(wrapper.text()).to.include('Skills Page')
	})
})
