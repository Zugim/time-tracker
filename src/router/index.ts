import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/tracking',
      name: 'tracking',
      component: () => import('../views/TrackingView.vue'),
    },
  ],
})

export default router
