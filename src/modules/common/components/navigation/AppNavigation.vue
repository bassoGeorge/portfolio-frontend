<template>
	<nav class="bg-light nav"
	     :class="{'nav--quick-links-on': showQuickLinksOnMobile}">

		<page-links
						:pages="pages"
						:mobile-quick-links-mode="showQuickLinksOnMobile">

			<quick-links-toggle-btn
							:is-toggled-on="showQuickLinksOnMobile"
							@toggle="toggleQuickLinks"/>

		</page-links>

		<quick-links :links="quickLinks"/>

	</nav>
</template>
<script>
	import {EXTERNAL_LINKS, ROUTES} from '../../constants'
	import PageLinks from './PageLinks'
	import QuickLinks from './QuickLinks'
	import QuickLinksToggleBtn from './QuickLinksToggleBtn'

	export default {
		name      : 'app-navigation',
		components: {QuickLinksToggleBtn, QuickLinks, PageLinks},
		data      : () => ({
			pages                 : [
				{
					...ROUTES.HOME,
					exact: true,
					title: "Home",
					icon : require('assets/icons/home.svg?inline')
				},
				{
					...ROUTES.ABOUT,
					title: "About Me",
					icon : require('assets/icons/about.svg?inline')
				},
				{
					...ROUTES.WORK,
					title: "My Work",
					icon : require('assets/icons/work.svg?inline')
				},
				{
					...ROUTES.SKILLS,
					title: "Skills",
					icon : require('assets/icons/skills.svg?inline')
				},
				{
					...ROUTES.CONTACT,
					title: "Contact Me",
					icon : require('assets/icons/contact.svg?inline')
				},
			],
			quickLinks            : [
				{
					name : 'github',
					title: "GitHub",
					path : EXTERNAL_LINKS.GitHub,
					icon : require('assets/icons/github.svg?inline')
				},
				{
					name : 'resume',
					title: "Resume",
					path : require('assets/docs/Anish_George_SoftwareDeveloper_Resume.pdf'),
					icon : require('assets/icons/resume.svg?inline')
				}
			],
			showQuickLinksOnMobile: false
		}),
		methods   : {
			toggleQuickLinks() {
				this.showQuickLinksOnMobile = !this.showQuickLinksOnMobile;
			}
		}
	}
</script>


<style lang="stylus" scoped>
	@require "~styles/_utils"

	.nav
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

	// In  mobile, navigation is toggled
	.nav--quick-links-on
		.nav__quick-links
			display: block

	.nav__quick-links-toggle-btn
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

	.nav
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
