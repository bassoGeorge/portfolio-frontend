<template>
	<div class="centered-container page">
		<main>
			<h2 class="title-font">CONTACT ME</h2>
			<contact-form/>

		</main>
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
