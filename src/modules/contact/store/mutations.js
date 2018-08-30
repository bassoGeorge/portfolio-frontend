import {defaultState} from './default-state'

const validFields               = ['name', 'email', 'subject', 'body']
export const bailIfInvalidField = field => {
	if (!validFields.includes(field)) {
		throw new Error(`Invalid field ${field} for contacts form mutation`)
	}
}

export const mutations = {
	resetForm(state) {
		Object.assign(state, defaultState)
	},
	updateField(state, {field, value, error}) {
		bailIfInvalidField(field)
		state[field] = {
			...state[field],
			value: value,
			error: error
		}
	},
	touchField(state, field) {
		bailIfInvalidField(field)
		state[field] = {
			...state[field],
			touched: true
		}
	}
}
