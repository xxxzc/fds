import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Buefy from 'buefy'
import './assets/scss/index.scss'
import axios from 'axios'

Vue.use(Buefy)
Vue.prototype.$http = axios
Vue.prototype.repo = "https://raw.githubusercontent.com/xxxzc/njufds-remote-files/master"
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
