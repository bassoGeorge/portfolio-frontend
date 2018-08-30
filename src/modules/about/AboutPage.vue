<template>
	<div class="centered-container page">
		<main>
			<article>
				<h2 class="title-font">ABOUT ME</h2>
				<p>
					Full-stack or Front-end web developer, primarily focused on building Hybrid web applications using the latest
					technologies.
				</p>

				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s.
				</p>

				<p>
					It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
					recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
			</article>
		</main>
		<aside class="show-on-above-tablet-landscape">
			<img src="~assets/images/about_me.png" alt="Me with my laptop and coffee">
		</aside>
	</div>
</template>

<script>
	export default {
		name: "AboutPage"
	}
</script>

<style lang="stylus" scoped>
	.page
		padding-right: 0
		width: calc(100% + 1rem)
		margin-right: -1rem;
</style>
