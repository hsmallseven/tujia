import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import wayhome from './views/WayHome.vue'
import about from './views/About.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/about/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:about,
    },
	{
		 path: '/wayhome',
      name: 'wayhome',
      component: wayhome
	}
	
  ]
})
