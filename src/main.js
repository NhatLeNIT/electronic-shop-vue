import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { routes } from './routes.js'

import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
