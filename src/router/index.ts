import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/celi',
      name: 'celi',
      component: () => import('../views/CeliView.vue'),
    },
    {
      path: '/bizness',
      name: 'bizness',
      component: () => import('../views/Bizness.vue'),
    },
    {
      path: '/bagatiba',
      name: 'bagatiba',
      component: () => import('../views/Bagati.vue'),
    },
        {
      path: '/nepatiesas_zinas_balva',
      name: 'nepatiesas_zinas',
      component: () => import('../views/NepatiesasZinas.vue'),
    },
  ],
})

export default router
