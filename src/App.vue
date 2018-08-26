<template>
	<div id="app">
		<app-navigation/>
		<router-view/>
	</div>
</template>
<script>
	import AppNavigation from './modules/common/components/navigation/AppNavigation'

	require("./styles/App.styl")

	export default {
		name      : 'app',
		components: {AppNavigation}
	}

</script>
<style lang="stylus">

</style>
