
import { createRouter, createWebHistory } from 'vue-router'
 
const routerHistory = createWebHistory()
 
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect:'/login',
      component: () => import('../pages/home/index.vue')
    },
    {
      path: '/menu',
      component: () => import('../pages/menu/index.vue'),
      children:[
        {
          path: '/home',
          component: () => import('../pages/home/index.vue'),
        },
        {
          path: '/customerManage',
          component: () => import('../pages/customerManage/index.vue'),
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../pages/login/index.vue')
    },
    // {
    //   path: '/page2',
    //   component: () => import('../views/page2.vue')
    // }
  ]
})

export default router