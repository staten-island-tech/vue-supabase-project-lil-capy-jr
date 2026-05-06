import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Bill from '../components/Bill.vue'
import CustomerCard from '../components/CustomerCard.vue'
import Drink from '../components/Drink.vue'
import IngredientButton from '../components/IngredientButton.vue'

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
  {
    path: '/ingredientbutton',
    component : IngredientButton,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
