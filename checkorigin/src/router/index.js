import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/inputRec.vue'
import DetailView from '../components/detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView,
      children: [
        { 
          path: ':id',
          component: DetailView,
        }
      ]
    }
  ]
})

export default router
