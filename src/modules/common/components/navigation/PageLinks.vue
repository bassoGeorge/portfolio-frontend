<template>
	<ul class="nav__pages horizontal-flat-list"
	    data-testid="page-links"
	    :class="{'nav--quick-links-on': mobileQuickLinksMode}"
	>
		<li v-for="page in pages"
		    class="nav__pages__item"
		    :key="page.name">

			<router-link
							:id="`page-nav-link-${page.name}`"
							:to="page.path"
							:exact="page.exact"
							:data-testid="`page-nav-link-${page.name}`"
							class="svg-color-lighter svg-color-primary-on-hover"
							active-class="page-link-active svg-active-acc">

				<svg-icon :svg="page.icon"/>

				<span>{{page.title}}</span>

			</router-link>
		</li>
		<slot></slot>
	</ul>
</template>
<script>
	import SvgIcon from '../SvgIcon'

	export default {
		name      : 'page-links',
		components: {SvgIcon},
		props     : {
			pages               : {},
			mobileQuickLinksMode: Boolean
		}
	}
</script>
<style lang="stylus" scoped>
	@require "~styles/_utils"

	.nav__pages
		display: flex
		flex-grow: 1
		justify-content: space-between
		+on-desktop-up()
			display: initial

		li
			margin-left: 0

		li.nav__pages__item
			overflow: hidden

			&:first-child a
				margin-left: 0

			a
				position: relative
				transition: all 350ms ease-in-out

				span
					display: none

				+on-desktop-up()
					margin-left: 3rem
					width: 1.8em

					span
						display: initial

					&.page-link-active
						width: 5em

			+on-desktop-up()
				padding-top: 0.4rem
				padding-bottom: 0.4rem
				#page-nav-link-work.page-link-active
					width: 6.5em

				#page-nav-link-contact.page-link-active
					width: 8em

	// In  mobile, navigation is toggled
	.nav__pages.nav--quick-links-on
		order: 1 // The navigation pages list now just has the cross icon and it should move to the right
		flex-grow: 0
		li.nav__pages__item
			display: none
			+on-desktop-up()
				display: initial

</style>
