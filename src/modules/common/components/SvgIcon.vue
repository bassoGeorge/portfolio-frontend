<template>
	<i class="icon" v-html="svg"></i>
</template>
<script>
	export default {
		name : 'svg-icon',
		props: ['svg']
	}
</script>