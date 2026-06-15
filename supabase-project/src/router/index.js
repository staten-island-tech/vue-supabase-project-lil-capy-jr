import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import CustomerCard from '../components/CustomerCard.vue'
import cafe from '@/views/cafe.vue'
import Drink from '@/components/Drink.vue'
import Ingredient from '@/components/Ingredient.vue'
import Login from '@/components/Login.vue'
import { supabase } from '@/lib/supabaseClient'
import Stats from '@/components/Stats.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/cafe',
    component: cafe,
  },
  {
    path: '/customercard',
    component: CustomerCard,
  },
  {
    path: '/drink',
    component: Drink,
  },
  {
    path: '/ingredients',
    component: Ingredient,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/stats',
    component: Stats,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

router.beforeEach(async (to) => {
  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (to.path === '/cafe' && !session) {
    return '/login'
  }
})
