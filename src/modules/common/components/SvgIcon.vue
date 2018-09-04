<template>
	<i class="icon svg-icon" v-html="svg"></i>
</template>
<script>
	export default {
		name : 'svg-icon',
		props: ['svg']
	}
</script>
<style lang="stylus">
	.icon
		display: block;
</style>
