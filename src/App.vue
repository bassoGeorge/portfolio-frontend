<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			|
			<router-link to="/about-me">About</router-link>
			|
			<router-link to="/contact-me">Contact</router-link>
			|
			<router-link to="/skills">Skills</router-link>
			|
			<router-link to="/work">Work</router-link>
		</div>
		<router-view/>
	</div>
</template>
<script>
	require("./styles/App.styl")

	export default {
		name: 'app'
	}

</script>
<style lang="stylus">
	@require '~styles/_utils.styl'

	#nav
		padding 30px
		a
			font-weight bold
			color #2c3e50
			&.router-link-exact-active
				color #42b983
</style>
