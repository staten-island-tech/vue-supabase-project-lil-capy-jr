import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/Home.vue'
import CustomerCard from '../components/CustomerCard.vue'
import cafe from '@/views/cafe.vue'
import shop from '@/views/shop.vue'
import Drink from '@/components/Drink.vue'
import Ingredient from '@/components/Ingredient.vue'


const routes = [
    {
    path : '/',
    component : home,
  },
  {
    path: '/cafe',
    component : cafe,
  },
  {
    path: '/customercard',
    component : CustomerCard,
  },
  {
    path: '/shop',
    component : shop,
  },
  {
    path: '/drink',
    component : Drink,
  },
  {
    path: '/ingredients',
    component : Ingredient,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
