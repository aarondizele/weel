import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

import VueResource from 'vue-resource'

import { routes } from './routes'
import { store } from './store'

import Pagination from '@/components/Pagination'

Vue.use(Router)
Vue.use(VueResource)
Vue.component('pagination', Pagination)

Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
