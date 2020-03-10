import Vue from 'vue'
import 'es6-promise/auto'

import App from './App.vue'
import router from '@/router'
import store from "@/store";
import VueApexCharts from 'vue-apexcharts'


Vue.config.productionTip = false
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
