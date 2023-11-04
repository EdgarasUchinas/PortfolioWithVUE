import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/education',
    name: 'Education',
    meta: { transition: 'slide-left'},
    component: () => import(/* webpackChunkName: "about" */ '../views/EducationView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
