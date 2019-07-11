import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import "./components/js/flexble"
import WayHome from './views/WayHome.vue'
import inDent from './views/indent.vue'
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/wayhome',
      name:'wayhome',
      component:WayHome
    },
    {
      path:'/indent',
      name:'indent',
      component:inDent
    }
  ]
})
