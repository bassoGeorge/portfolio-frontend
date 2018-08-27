import {shallowMount} from '@vue/test-utils'
import {expect} from 'chai'
import QuickLinksToggleBtn from '../../../../../src/modules/common/components/navigation/QuickLinksToggleBtn'
import SvgIcon from '../../../../../src/modules/common/components/SvgIcon'

describe("[common:components] navigation / QuickLinksToggleBtn", () => {

	const node = shallowMount(QuickLinksToggleBtn, {
		propsData: {
			isToggledOn: false
		}
	})

	it('should render the layout correctly', () => {
		expect(node.contains('li button')).to.be.true;
		expect(node.find('li button').contains(SvgIcon))
	})

	it('should render the correct svg depending on the toggle', () => {

		// let's not save node.find(SvgIcon) as a constant, so that both kind of dom implementations: if-else and single
		// can work
		node.setProps({isToggledOn: true})
		expect(node.find(SvgIcon).props().svg).to.equal(node.vm.close_icon)

		node.setProps({isToggledOn: false})
		expect(node.find(SvgIcon).props().svg).to.equal(node.vm.menu_icon)

	})

	it('should emit toggle event when toggle button is clicked', () => {
		node.find('button').trigger('click')
		expect(node.emitted().toggle.length).to.equal(1)
	})
})
