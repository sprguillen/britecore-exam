import Vue from 'vue'
import Toasted from 'vue-toasted'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const options = {
  position: 'top-center',
  duration: 5000
}

Vue.use(Toasted, options)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
