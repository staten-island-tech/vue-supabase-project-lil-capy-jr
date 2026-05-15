import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Bill from '../components/Bill.vue'
import CustomerCard from '../components/CustomerCard.vue'
import Drink from '../components/Drink.vue'

const routes = [
  {
    path : '/',
    component : Home,
  },
  {
    path: '/bill',
    component : Bill,
  },
  {
    path: '/customercard',
    component : CustomerCard,
  },
  {
    path: '/drink',
    component : Drink,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
