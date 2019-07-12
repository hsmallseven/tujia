import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/flexble.js'
import axios from 'axios'
Vue.config.productionTip = false
<<<<<<< HEAD
import axios from 'axios'
=======
>>>>>>> e8b68aada05cfd85d34479d1f3303d2d2f368305
Vue.prototype.$axios=axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
