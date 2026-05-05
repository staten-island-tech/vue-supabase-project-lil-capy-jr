import Cafe from '@/views/cafe.vue'
import Home from '@/views/home.vue'
import Shop from '@/views/shop.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path : "/",
    name : "home",
    component : Home,
  },
  {
    path : "/cafe",
    name : "cafe",
    component : Cafe
  },
  {
    path : '/shop',
    name : 'shop',
    component: Shop,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router
