import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './modules/home/HomePage.vue'
import AboutPage from './modules/about/AboutPage.vue'
import {ROUTES} from './modules/common/constants'

Vue.use(Router)

export default new Router({
	routes: [
		{
			...ROUTES.HOME,
			component: HomePage
		},
		{
			...ROUTES.ABOUT,
			component: AboutPage
		},
		{
			...ROUTES.WORK,
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "work" */ './modules/work/WorkPage.vue')
		},
		{
			...ROUTES.SKILLS,
			component: () => import(/* webpackChunkName: "skills" */ './modules/skills/SkillsPage.vue')
		},
		{
			...ROUTES.CONTACT,
			component: () => import(/* webpackChunkName: "contact" */ './modules/contact/ContactPage.vue')
		}
	],
	mode  : 'history'
})
