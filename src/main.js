// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import store from './store'
// import filters from './filters'
// import directives from './directives'
import routes from './config/router'
import App from './App'

// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../static/css/reset.css'

// 注入element-ui
Vue.use(ElementUI)

// less
import './assets/less/index.less'

// 注入路由
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

// 共享状态管理
Vue.use(Vuex)

// // filters注入
// Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
//
// // 指令注入
// Object.keys(directives).forEach(key => Vue.directive(key, directives[key]))

// 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

/* eslint-disable no-unused-vars */

const app = new Vue({
  el: '#app',
  router,
  store, // Vuex 通过 store 选项，提供了一种机制将状态从根组件『注入』到每一个子组件中（需调用 Vue.use(Vuex)）
  // 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到
  axios,
  render: createElement => createElement(App)
})
/* eslint-enable no-unused-vars */

