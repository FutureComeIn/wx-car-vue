import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page2/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/page2/',
      redirect: '/page2/index'
    },
    {
      path: '/page2/index',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
