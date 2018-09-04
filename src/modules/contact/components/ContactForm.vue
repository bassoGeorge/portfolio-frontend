<template>
	<section>
		<form novalidate>
			<div role="group">
				<input name="name" :value="name.value" @input="updateInput" @blur="touchInput" type="text" placeholder="Name*"
				       :class="getErrorClasses('name')" tabindex="1"/>
				<input name="email" :value="email.value" @input="updateInput" @blur="touchInput" type="email"
				       placeholder="Email*" :class="getErrorClasses('email')" tabindex="2"/>
			</div>
			<div role="group">
				<input name="subject" :value="subject.value" @input="updateInput" @blur="touchInput" type="text"
				       placeholder="Subject" :class="getErrorClasses('subject')" tabindex="3"/>
			</div>
			<div role="group">
				<textarea name="body" :value="body.value" @input="updateInput" @blur="touchInput" placeholder="Message*"
				          :class="getErrorClasses('body')" tabindex="4"></textarea>
			</div>
		</form>
		<div class="at-ends-container">
			<a :href="linkedInUrl"
			   target="_blank"
			   class="big-link big-link--with-icon-right"
			   data-testid="connect-with-me-button">
				Connect with me
				<img class="icon" src="~assets/icons/linkedIn.svg" alt="">
			</a>
			<button class="button" :disabled="!isFormValid" data-testid="contact-submit-button">SEND</button>
		</div>
	</section>
</template>
<script>
	import {mapGetters, mapState} from 'vuex'
	import SvgIcon from '../../common/components/SvgIcon'
	import {EXTERNAL_LINKS} from '../../common/constants'

	export default {
		name      : 'contact-form',
		components: {SvgIcon},
		data      : () => ({
			linkedInUrl : EXTERNAL_LINKS.LinkedIn,
			linkedInIcon: require('../../../assets/icons/linkedIn.svg?inline'),
		}),
		methods   : {
			updateInput(e) {
				this.$store.dispatch('contact/updateField', {field: e.target.name, value: e.target.value})
			},
			touchInput(e) {
				this.$store.commit('contact/touchField', e.target.name)
			},
			getErrorClasses(field) {
				return {
					invalid: this[field].error,
					touched: this[field].touched
				}
			}
		},
		computed  : {
			...mapState('contact', ['name', 'email', 'subject', 'body']),
			...mapGetters('contact', {
				isFormValid: 'isValid'
			})
		},
		beforeDestroy() {
			this.$store.commit('contact/resetForm')
		}
	}
</script>

<style lang="stylus" scoped>
	section
		width: 100%
</style>
