import Vue from 'vue'
import Vuex from 'vuex'
import {contactStore as contact} from './modules/contact/store'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		contact
  }
})
