import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';



import './assets/css/base.css';
import axios from 'axios'
import './axios.js' // 请求拦截
import './permission.js' // 请求拦截

import less from 'less'


Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/json'  //添加
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(less)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
