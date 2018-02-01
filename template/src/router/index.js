import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/pages/page'
import Error404 from '@/pages/error/404'
import Error403 from '@/pages/error/403'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'page',
      // redirect: '/web/main',
      component: Page
      // children: [
      //   {
      //     path: '/web/main',
      //     name: 'main',
      //     component: EditNovel
      //   },
      // ]
    },
    {
      path: '/web/403',
      name: '403',
      component: Error403
    },
    {
      path: '*',
      name: '404',
      component: Error404
    }
  ]
})
