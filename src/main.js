import Vue from 'vue'
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';


Vue.prototype.$axios = axios
import router from './route/router.js'
Vue.use(ElementUI, {
  size: 'small'
});




new Vue({
  router,
  axios,
  render: h => h(App),
}).$mount('#app')
