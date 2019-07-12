import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< HEAD
import wayhome from './views/WayHome.vue'
import about from './views/About.vue'
=======
import theme from './components/Theme.vue'
import Themelist from './components/Themelist.vue'
>>>>>>> e8b68aada05cfd85d34479d1f3303d2d2f368305
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
<<<<<<< HEAD
      component:about,
    },
	{
		 path: '/wayhome',
      name: 'wayhome',
      component: wayhome
	}
	
=======
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }, {
      path: '/theme',
      name: 'theme',
      component: theme,
     children: [
           {
          path: '/Theme/Themelist/:type',
          name: 'Themelist',
          component: Themelist
        }
      ]

    },
>>>>>>> e8b68aada05cfd85d34479d1f3303d2d2f368305
  ]
})
