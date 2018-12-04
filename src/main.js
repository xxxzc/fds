import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Buefy from 'buefy'
import './assets/scss/index.scss'

import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

import axios from 'axios'


Vue.use(Buefy)
Vue.use(VueSimpleMarkdown)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
