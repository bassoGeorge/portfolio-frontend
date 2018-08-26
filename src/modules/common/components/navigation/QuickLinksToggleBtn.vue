<template>
	<li class="navigation--quick-links-toggle-btn">
		<button
						@click="$emit('click')"
						class="
                svg-color-lighter
                svg-color-primary-on-hover
                svg-color-primary-on-active
                "
		>

			<svg-icon v-if="!isToggledOn" :svg="menu_icon"/>
			<svg-icon v-if="isToggledOn" :svg="close_icon"/>

		</button>
	</li>

</template>

<script>
	import SvgIcon from '../SvgIcon'

	export default {
		name      : "QuickLinksToggleBtn",
		components: {SvgIcon},
		props     : {
			isToggledOn: Boolean
		},
		data      : () => ({
			menu_icon : require('../../../../assets/icons/menu.svg?inline'),
			close_icon: require('../../../../assets/icons/close.svg?inline')
		})
	}
</script>

<style lang="stylus" scoped>
	@require "~styles/_utils"

	.navigation--quick-links-toggle-btn
		display: flex
		align-items: center

		button
			padding: 0

		.icon
			height: 0.85em

		+on-tablet-up()
			.icon
				height: 1.2em

		+on-desktop-up()
			display: none
</style>