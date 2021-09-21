import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import Login from './views/Login.vue'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './plugins/axios'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
