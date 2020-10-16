import Vue from 'vue'
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL='http://localhost:9000/api'
Vue.config.productionTip=false
import router from './route/router.js'
Vue.use(ElementUI, {
  size: 'small'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
