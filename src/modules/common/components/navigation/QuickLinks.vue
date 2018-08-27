<template>
	<ul class="nav__quick-links horizontal-flat-list">
		<li v-for="link in links" :key="link.name">
			<a target="_blank" :href="link.path"
			   class="svg-color-lighter
                svg-color-primary-on-hover
                svg-color-primary-on-active
                fg-lighter
                fg-primary-on-hover
                fg-primary-on-active
                ">
				<svg-icon :svg="link.icon"/>
				<span>{{link.title}}</span>
			</a>
		</li>
	</ul>
</template>
<script>
	import SvgIcon from '../SvgIcon'

	export default {
		name      : 'quick-links',
		components: {SvgIcon},
		props     : {
			links: {}
		}
	}
</script>
<style lang="stylus" scoped>
	@require "~styles/_utils"

	// Quick Links list
	.nav__quick-links
		display: none
		+on-desktop-up()
			display: block

		li
			margin-left: 0
			padding: 0 1em
			position: relative
		li:
		:after
			$height = 50%
			content: ''
			display: block
			height: $height
			width: 2px
			background-color: white
			position: absolute
			right: 0
			top: ((100% - $height) / 2)
		li:first-child
			padding-left: 0
		li:last-child
			padding-right: 0
		li:last-child::after
			display: none

		a
			transition: color 300ms ease-in-out

</style>
