<template>
	<div class="centered-container page">
		<main>
			<h2 data-testid="title" class="title-font">CONTACT ME</h2>
			<contact-form/>
		</main>
		<aside class="show-on-above-desktop">
			<img src="~assets/images/behind_mac.png" alt="Me behind my mac">
		</aside>
	</div>
</template>

<script>
	import ContactForm from './components/ContactForm'

	export default {
		name      : "ContactMePage",
		components: {ContactForm}
	}
</script>

<style lang="stylus" scoped>
	@require "~styles/_utils"

	main
		width: 100%
		+on-tablet-landscape-up()
			width: auto;
			min-width: 55rem
</style>
