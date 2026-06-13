import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import CustomerCard from '../components/CustomerCard.vue'
import cafe from '@/views/cafe.vue'
import shop from '@/views/shop.vue'
import Drink from '@/components/Drink.vue'
import Ingredient from '@/components/Ingredient.vue'
import Login from '@/components/Login.vue'
import { supabase } from '@/lib/supabaseClient'

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
    path: '/shop',
    component: shop,
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
