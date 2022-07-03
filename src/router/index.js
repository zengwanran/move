import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    component: () => import('@/views/Home.vue')

  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('@/views/ListMore.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
