import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('@/components/App-body.vue')
  },
  {
    path: '/index',
    name: '/Index',
    component: () => import('@/components/App-body.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../views/article.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category.vue')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('../views/timeline.vue')
  },
  {
    path: '/messageboard',
    name: 'Messageboard',
    component: () => import('../views/messageboard.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
