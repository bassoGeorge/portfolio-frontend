<template>
	<nav class="bg-light"
	     :class="{'navigation--quick-links-on': showQuickLinksOnMobile}">

		<page-navigation
						:pages="pages"
						:mobile-quick-links-mode="showQuickLinksOnMobile"/>

	</nav>
</template>
<script>
	import {ROUTES} from '../../constants'
	import PageNavigation from './PageNavigation'

	export default {
		name      : 'app-navigation',
		components: {PageNavigation},
		data      : () => ({
			pages                 : [
				{
					...ROUTES.HOME,
					exact: true,
					title: "Home",
					icon : require('../../../../assets/home.svg?inline')
				},
				{
					...ROUTES.ABOUT,
					title: "About Me",
					icon : require('../../../../assets/about.svg?inline')
				},
				{
					...ROUTES.WORK,
					title: "My Work",
					icon : require('../../../../assets/work.svg?inline')
				},
				{
					...ROUTES.SKILLS,
					title: "Skills",
					icon : require('../../../../assets/skills.svg?inline')
				},
				{
					...ROUTES.CONTACT,
					title: "Contact Me",
					icon : require('../../../../assets/contact.svg?inline')
				},
			],
			showQuickLinksOnMobile: false
		})
	}
</script>


<style lang="stylus" scoped>
	@require "~styles/_utils"

	nav
		position: fixed
		bottom: 0
		left: 0
		width: 100%
		height: $navHeight-mobile
		padding: 0 1rem
		display: flex
		justify-content: space-between
		align-items: center
		+on-tablet-up()
			height: $navHeight-tablet

		+on-desktop-up()
			padding: 0 5rem

	// Quick Links list
	.navigation--quick-links
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
			.icon
				display: flex
				justify-content: center

	// In  mobile, navigation is toggled
	.navigation--quick-links-on
		.navigation--quick-links
			display: block

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

<style lang="stylus">
	// TODO: need to get this leaky styling out
	@require "~styles/_utils"

	nav
		.icon
			height: 1.2em

		+on-tablet-up()
			.icon
				height: 1.4em

		a
			display: flex
			align-items: center
			font-size: 1.5rem
			text-decoration: none
			span
				white-space: nowrap
				margin-left: 0.6em
				position: relative

			+on-tablet-up()
				font-size: 2.2rem
</style>
