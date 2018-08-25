import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './modules/home/HomePage.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path     : '/',
			name     : 'home',
			component: HomePage
		},
		{
			path     : '/about-me',
			name     : 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './modules/about/AboutPage.vue')
		},
		{
			path     : '/contact-me',
			name     : 'contact',
			component: () => import(/* webpackChunkName: "contact" */ './modules/contact/ContactPage.vue')
		},
		{
			path     : '/skills',
			name     : 'skills',
			component: () => import(/* webpackChunkName: "skills" */ './modules/skills/SkillsPage.vue')
		},
		{
			path     : '/work',
			name     : 'work',
			component: () => import(/* webpackChunkName: "work" */ './modules/work/WorkPage.vue')
		}
	],
	mode  : 'history'
})
