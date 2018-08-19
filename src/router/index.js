import Vue from 'vue'
import Router from 'vue-router'
import frontComponent from '@/components/front'
import endComponent from '@/components/end'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/front',
      name: 'front',
      component: frontComponent
    },
    {
      path: '/end',
      name: 'end',
      component: endComponent
    }
  ]
})
