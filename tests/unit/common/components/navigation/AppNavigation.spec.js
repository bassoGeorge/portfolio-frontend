import {shallowMount} from '@vue/test-utils'
import {expect} from 'chai'

import AppNavigation from '../../../../../src/modules/common/components/navigation/AppNavigation'
import PageLinks from '../../../../../src/modules/common/components/navigation/PageLinks'
import QuickLinks from '../../../../../src/modules/common/components/navigation/QuickLinks'
import QuickLinksToggleBtn from '../../../../../src/modules/common/components/navigation/QuickLinksToggleBtn'

describe("[common:components] navigation / AppNavigation", () => {

	let node = null;

	beforeEach(() => {
		node = shallowMount(AppNavigation)
	})
	afterEach(() => {
		node.destroy()
	})

	it('should render the layout correctly', () => {
		expect(node.contains('nav')).to.be.true
	})

	it('should render QuickLinks with correct props', () => {
		const quickLinks = node.find(QuickLinks)
		expect(quickLinks.exists()).to.be.true;

		const {links}          = quickLinks.props(),
		      [github, resume] = links

		expect(github.title).to.equal("GitHub")
		expect(github.path).to.equal("https://github.com/bassoGeorge")

		expect(resume.title).to.equal("Resume")
	})

	it('should render PageLinks with correct props and pass QuickLinks with correct props as slot child', () => {
		const pageNav = node.find(PageLinks)
		expect(pageNav.exists()).to.be.true

		expect(pageNav.props().pages.length).to.equal(5)

		expect(pageNav.props().mobileQuickLinksMode).to.be.false


		node.setData({showQuickLinksOnMobile: true})
		expect(pageNav.props().mobileQuickLinksMode).to.be.true

	})

	it('should render QuickLinksToggleBtn with correct props, passing it as slot component of PageLinks', () => {

		const quickLinksToggleBtn = node.find(QuickLinksToggleBtn)

		expect(quickLinksToggleBtn.exists()).to.be.true
		expect(node.find(PageLinks).find(QuickLinksToggleBtn)).to.be.eql(quickLinksToggleBtn)

		expect(quickLinksToggleBtn.props().isToggledOn).to.be.false
		node.setData({showQuickLinksOnMobile: true})
		expect(quickLinksToggleBtn.props().isToggledOn).to.be.true
	})

	it("should update data variable 'showQuickLinksOnMobile' based on toggle event", () => {
		expect(node.vm.showQuickLinksOnMobile).to.be.false

		node.find(QuickLinksToggleBtn).vm.$emit('toggle') // wrapper.trigger does not work here, wonder why
		expect(node.vm.showQuickLinksOnMobile).to.be.true

		node.find(QuickLinksToggleBtn).vm.$emit('toggle')
		expect(node.vm.showQuickLinksOnMobile).to.be.false
	})

})
