import {mutations} from './mutations'
import {defaultState} from './default-state'
import {actions} from './actions'
import {getters} from './getters'

export const contactStore = {
	namespaced: true,
	state     : {...defaultState},
	getters,
	mutations,
	actions
}
