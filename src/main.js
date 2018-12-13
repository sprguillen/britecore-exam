import Vue from 'vue'
import Toasted from 'vue-toasted'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const options = {
  position: 'top-center'
}

Vue.use(Toasted, options)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
