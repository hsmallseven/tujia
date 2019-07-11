import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui';
import { Toast } from 'mint-ui';
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui'
import axios from 'axios'
axios.interceptors.request.use((config)=>{
  Indicator.open();
  return config;
})
axios.interceptors.response.use((res)=>{
   Indicator.close();
   return res;
})
Vue.config.productionTip = false
Vue.use(MintUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
