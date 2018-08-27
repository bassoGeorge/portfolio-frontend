import {shallowMount} from '@vue/test-utils'
import {expect} from 'chai'
import SvgIcon from '../../../../src/modules/common/components/SvgIcon'
import {sampleSvgIcon} from '../../resources'

describe("[common:components] SvgIcon", () => {
	const node = shallowMount(SvgIcon, {
		propsData: {
			svg: sampleSvgIcon
		}
	})

	it('should render icon with correct layout', () => {
		expect(node.contains('.icon')).to.be.true
	})

	it('should render the icon svg itself as a DOM element', () => {
		const svgNode = node.find('svg');
		expect(svgNode.exists()).to.be.true;
		expect(svgNode.contains('rect')).to.be.true;
	})
})
