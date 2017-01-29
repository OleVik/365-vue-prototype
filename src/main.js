import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import App from './App'
var marked = require('marked')
window.Vue = Vue

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuelidate)

require('!style-loader!css-loader!sass-loader!./assets/css/app.scss')
require('!style-loader!css-loader!sass-loader!../node_modules/font-awesome/scss/font-awesome.scss')
import 'src/assets/js/app.js'

const routes = [{
  path: '/'
}]
export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
})
Vue.mixin({
  methods: {
    marked: function (input) {
      return marked(input)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
