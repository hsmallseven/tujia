import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import wayhome from './views/WayHome.vue'
import about from './views/About.vue'
import theme from './components/Theme.vue'
import Themelist from './components/Themelist.vue'
import Menuhurdle from './views/menuhurdle.vue'
import indent from './views/indent.vue'
import collect from './views/collect.vue'
import all from './views/all.vue'
import indentclass from './views/indentclass.vue'
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
    {
      path: '/menuhurdle',
      name: 'menuhurdle',
      component: Menuhurdle
    },
    {
      path: '/indent',
      name: 'indent',
      component: indent,
      redirect:{name:"all"},
      children:[
        {
          path: '/indent/all',
         name: 'all',
         component: all,
        }
      ]
    },
    {
      path: '/collect',
      name: 'collect',
      component: collect
    },


  ]
})
