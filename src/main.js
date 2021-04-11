import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'
import JwPagination from 'jw-vue-pagination';
import store from './store';

Vue.config.productionTip = false
Vue.component('jw-pagination',JwPagination)

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
