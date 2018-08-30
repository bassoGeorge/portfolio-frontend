import {REGEX} from '../common/constants'

const defaultState        = {
	name   : {
		value  : '',
		error  : true,
		touched: false
	},
	email  : {
		value  : '',
		error  : true,
		touched: false
	},
	subject: {
		value  : '',
		error  : false,
		touched: false
	},
	body   : {
		value  : '',
		error  : true,
		touched: false
	}
}
export const contactStore = {
	namespaced: true,
	state     : {...defaultState},
	getters   : {
		isValid() {
			return true;
		}
	},
	mutations : {
		resetForm(state) {
			Object.assign(state, defaultState)
		},
		updateField(state, {field, value, error}) {
			state[field] = {
				...state[field],
				value: value,
				error: error
			}
		},
		touchField(state, field) {
			state[field] = {
				...state[field],
				touched: true
			}
		}
	},
	actions   : {
		updateField(context, {field, value}) {
			switch (field) {
				case 'name':
				case 'body':
					context.commit('updateField', {field, value, error: value.length < 1})
					break;

				case 'email':
					context.commit('updateField', {field, value, error: !REGEX.email.test(value)})
					break;

				default:
					context.commit('updateField', {field, value, error: false})

			}
		}
	}
}
