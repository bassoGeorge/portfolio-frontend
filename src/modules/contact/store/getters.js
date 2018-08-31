export const getters = {
	isValid: state => {
		return !(
			state.name.error ||
			state.email.error ||
			state.subject.error ||
			state.body.error
		)
	}
}
