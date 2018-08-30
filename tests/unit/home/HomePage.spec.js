import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import HomePage from '../../../src/modules/home/HomePage'

describe("[home] HomePage", () => {
	it("renders Home page messages", () => {
		const wrapper = shallowMount(HomePage, {
			propsData: {}
		})

		const messages = [
			"Hi, I'm Anish",
			"full stack developer",
			"Web Dev",
			"Vue",
			"React",
			"Angular",
			"CSS Ninja"
		]

		messages.forEach(msg =>
			expect(wrapper.text()).to.include(msg)
		)
	})

})
