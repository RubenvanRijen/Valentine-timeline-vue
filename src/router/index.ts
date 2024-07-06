import { createRouter, createWebHistory } from 'vue-router'
import LoveView from '@/views/LoveView.vue'
import TimeLineLoveView from '@/views/TimeLineLoveView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoveView
    },
    {
      path: '/love',
      name: 'love',
      component: LoveView
    },
    {
      path: '/timeline-love',
      name: 'timelineLove',
      component: TimeLineLoveView
    }
  ]
})

export default router
