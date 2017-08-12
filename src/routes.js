import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Index from './views/Index.vue';
import Contact from './views/Contact.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Index
	},

	{
		path: '/home',
		component: Home
	},

	{
		path: '/contact',
		component: Contact
	}
];

const router = new VueRouter({
	routes,
	linkExactActiveClass: 'is-active'
});

export default router;