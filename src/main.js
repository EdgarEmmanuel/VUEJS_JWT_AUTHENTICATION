import Vue from 'vue'
import App from './App.vue'
import Router from './routes/route';
import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router:Router,
}).$mount('#app')
