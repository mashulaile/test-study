import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hi'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi',
      name: 'HelloWorld',
      component: hi,
      children: [
        {path: '/', component: hi},
        {path: '/hi1', name: 'hi3', component: hi1},
        {path: 'hi2', component: hi2}
      ]
    }
  ]
})
