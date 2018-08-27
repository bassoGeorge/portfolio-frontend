import {shallowMount} from '@vue/test-utils'
import {expect} from 'chai'
import QuickLinks from '../../../../../src/modules/common/components/navigation/QuickLinks'
import SvgIcon from '../../../../../src/modules/common/components/SvgIcon'
import {sampleSvgIcon, sampleSvgIcon2} from '../../../resources'

describe("[common:components] navigation / QuickLinks", () => {

	const links = [{
		      name : 'link1',
		      title: "Link 1",
		      path : '#/link1',
		      icon : sampleSvgIcon
	      }, {
		      name : 'link2',
		      title: "Link 2",
		      path : '#/link2',
		      icon : sampleSvgIcon2
	      }],
	      node  = shallowMount(QuickLinks, {
		      propsData: {
			      links
		      }
	      })

	it('should render the layout correctly', () => {
		expect(node.contains('ul')).to.be.true;
		expect(node.find('ul').findAll('li').length).to.equal(2)
	})

	it('should render the link titles', () => {
		expect(node.find('ul li:first-child').text()).to.include('Link 1')
		expect(node.find('ul li:last-child').text()).to.include('Link 2')
	})

	it('should render link icons', () => {
		const icon1 = node.find('ul li:first-child').find(SvgIcon)
		expect(icon1.exists()).to.be.true
		expect(icon1.props().svg).to.equal(sampleSvgIcon)

		const icon2 = node.find('ul li:last-child').find(SvgIcon)
		expect(icon2.exists()).to.be.true
		expect(icon2.props().svg).to.equal(sampleSvgIcon2)
	})

	it('should have links for the correct paths', () => {
		expect(node.find('ul li:first-child a').exists()).to.be.true
		expect(node.find('ul li:first-child a').attributes().href).to.equal('#/link1')

		expect(node.find('ul li:last-child a').exists()).to.be.true
		expect(node.find('ul li:last-child a').attributes().href).to.equal('#/link2')
	})
})
