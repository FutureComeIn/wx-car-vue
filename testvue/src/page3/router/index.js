import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page3/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/page3/',
      redirect: '/page3/index'
    },
    {
      path: '/page3/index',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
