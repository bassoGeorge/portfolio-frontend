<template>
	<section>
		<form novalidate>
			<div role="group">
				<input name="name" :value="name.value" @input="updateInput" @blur="touchInput" type="text" placeholder="Name*"
				       :class="getErrorClasses('name')"/>
				<input name="email" :value="email.value" @input="updateInput" @blur="touchInput" type="email"
				       placeholder="Email*" :class="getErrorClasses('email')"/>
			</div>
			<div role="group">
				<input name="subject" :value="subject.value" @input="updateInput" @blur="touchInput" type="text"
				       placeholder="Subject" :class="getErrorClasses('subject')"/>
			</div>
			<div role="group">
				<textarea name="body" :value="body.value" @input="updateInput" @blur="touchInput" placeholder="Message*"
				          :class="getErrorClasses('body')"></textarea>
			</div>
		</form>
		<div class="at-ends-container">
			<button class="button">Connect with me</button>
			<button class="button" :disabled="!isFormValid">SEND</button>
		</div>
	</section>
</template>
<script>
	import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

	export default {
		name    : 'contact-form',
		methods : {
			...mapActions('contact', {
				updateField: 'updateField',
			}),
			...mapMutations('contact', ['resetForm', 'touchField']),
			updateInput(e) {
				this.updateField({field: e.target.name, value: e.target.value})
			},
			touchInput(e) {
				this.touchField(e.target.name)
			},
			getErrorClasses(field) {
				return {
					invalid: this[field].error,
					touched: this[field].touched
				}
			}
		},
		computed: {
			...mapState('contact', ['name', 'email', 'subject', 'body']),

			...mapGetters('contact', {
				isFormValid: 'isValid'
			})
		},
		beforeDestroy() {
			this.resetForm()
		}
	}
</script>
