import {RouterLinkStub, shallowMount} from '@vue/test-utils'
import {expect} from 'chai'
import PageLinks from '../../../../../src/modules/common/components/navigation/PageLinks'
import SvgIcon from '../../../../../src/modules/common/components/SvgIcon'
import {sampleSvgIcon, sampleSvgIcon2} from '../../../resources'

describe("[common:components] navigation / PageLinks", () => {

	const pages = [{
		name : 'page1',
		title: "Page 1",
		icon : sampleSvgIcon,
		path : "#/page-1"
	}, {
		name : 'page2',
		title: "Page 2",
		icon : sampleSvgIcon2,
		path : '#/page-2'
	}]

	const node = shallowMount(PageLinks, {
		propsData: {
			pages,
			mobileQuickLinksMode: false
		},
		stubs    : {
			RouterLink: RouterLinkStub
		},
		slots    : {
			default: ["<li id='slot-stub'></li>"]
		}
	})

	it('should render the layout correctly', () => {
		expect(node.contains('ul')).to.be.true
		expect(node.findAll('ul > li').length).to.equal(3)
		expect(node.findAll('ul > li').at(0).contains(RouterLinkStub)).to.be.true
		expect(node.findAll('ul > li').at(1).contains(RouterLinkStub)).to.be.true
	})

	it('should links for correct paths', () => {
		expect(node.find('ul > li:nth-child(1)').find(RouterLinkStub).props().to).to.equal('#/page-1')
		expect(node.find('ul > li:nth-child(2)').find(RouterLinkStub).props().to).to.equal('#/page-2')
	})

	it('should render correct title to the links', () => {
		expect(node.find('ul > li:nth-child(1)').find(RouterLinkStub).text()).to.equal('Page 1')
		expect(node.find('ul > li:nth-child(2)').find(RouterLinkStub).text()).to.equal('Page 2')
	})

	it('should render correct svg icons for each page', () => {
		expect(node.find('ul > li:nth-child(1)').find(RouterLinkStub).find(SvgIcon).props().svg).to.equal(sampleSvgIcon)
		expect(node.find('ul > li:nth-child(2)').find(RouterLinkStub).find(SvgIcon).props().svg).to.equal(sampleSvgIcon2)
	})

	it('should turn mobile-quick-links mode on or off based on input toggle', () => {
		node.setProps({mobileQuickLinksMode: true})
		expect(node.classes()).to.include('nav--quick-links-on')

		node.setProps({mobileQuickLinksMode: false})
		expect(node.classes()).to.not.include('nav--quick-links-on')
	})

	it('should position the provided slot child as the last item in its list', () => {
		expect(node.find('ul > li:last-child').attributes().id).to.equal('slot-stub')
	})
})
