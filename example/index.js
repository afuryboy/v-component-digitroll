import Vue from 'vue'
import App from './app'
import digitroll from '../dist/v-component-digitroll'

// import digitroll from '../src/index'
console.log(digitroll);

Vue.use(digitroll)

new Vue({
  render: h => h(App)
}).$mount('#app')