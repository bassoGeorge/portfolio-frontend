import {mutations} from './mutations'
import {defaultState} from './default-state'
import {actions} from './actions'

export const getters = {
	isValid() {
		return true;
	}
}

export const contactStore = {
	namespaced: true,
	state     : {...defaultState},
	getters,
	mutations,
	actions
}
