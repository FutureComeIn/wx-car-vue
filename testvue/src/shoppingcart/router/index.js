import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/shoppingcart/',
      redirect: '/shoppingcart/index'
    },
    {
      path: '/shoppingcart/index',
      name: 'HelloWorld'
    }
  ]
})
