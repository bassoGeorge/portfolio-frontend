import {REGEX} from '../../common/constants'

export const actions = {
	updateField({commit}, {field, value}) {
		switch (field) {
			case 'name':
			case 'body':
				commit('updateField', {field, value, error: value.length < 1})
				break;

			case 'email':
				commit('updateField', {field, value, error: !REGEX.email.test(value)})
				break;

			default:
				commit('updateField', {field, value, error: false})

		}
	}
}
