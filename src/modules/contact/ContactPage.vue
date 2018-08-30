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
		components: {ContactForm},
		data      : () => ({})
	}
</script>

