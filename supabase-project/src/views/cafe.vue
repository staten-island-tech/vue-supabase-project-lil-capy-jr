<template>
 <div class="game-layout" v-if="!showbill">
  <div class="left-panel">
    <CustomerCard :key="customersserved" />
    <Drink :key="customersserved" :order="order" />

    <div class="profit-card">
      <h2>Today's Profit</h2>
      <p>${{ dailyprofit.toFixed(2) }}</p>

      <h3>Customers Served</h3>
      <p>{{ customersserved }}/5</p>
    </div>
  </div>

  <div class="right-panel">
    <Ingredient
      :key="customersserved"
      :order="order"
      @drinkcomplete="completeorder"
    />
  </div>
</div>

<Bill
  v-else
  :day="day"
  :dailyProfit="dailyprofit"
  @closebill="finishday"
/>
</template>

<script setup>
import Bill from '@/components/Bill.vue'
import { supabase } from '@/lib/supabaseClient'
import CustomerCard from '@/components/CustomerCard.vue'
import Drink from '@/components/Drink.vue'
import Ingredient from '@/components/Ingredient.vue'
import { ref, computed, onMounted } from 'vue'
import { useGameStore } from '@/store/gamestore'
import { useRouter } from 'vue-router'

const gameStore = useGameStore()
const router = useRouter()

const day = computed(() => gameStore.day)

const customersserved = ref(0)
const dailyprofit = ref(0)
const showbill = ref(false)
const order = ref({})

const Base = [
  { name: 'Milk', price: 2, type: 'base' },
  { name: 'Tea', price: 2, type: 'base' },
  { name: 'Firewater', price: 3, type: 'base' },
  { name: 'Fruitwine', price: 4, type: 'base' },
]

const Ingredients = [
  { name: 'Romaritime Flower Juice', price: 3, type: 'ingredients' },
  { name: 'Caramel', price: 2, type: 'ingredients' },
  { name: 'Smetana', price: 2, type: 'ingredients' },
  { name: 'Fermented Juice', price: 2, type: 'ingredients' },
  { name: 'Fizzy Water', price: 2, type: 'ingredients' },
  { name: 'Chopped Petals', price: 1, type: 'ingredients' },
  { name: 'Mint', price: 1, type: 'ingredients' },
  { name: 'Cocoa', price: 1, type: 'ingredients' },
  { name: 'Wolfhook', price: 1, type: 'ingredients' },
]

const Cutsize = [
  { name: 'Large Pieces', price: 0, type: 'Cutsize' },
  { name: 'Small Pieces', price: 0, type: 'Cutsize' },
  { name: 'Small Bits', price: 0, type: 'Cutsize' },
]

const Shakeintensity = [
  { name: 'Shake Gently', price: 0, type: 'Shakeintensity' },
  { name: 'Shake Properly', price: 0, type: 'Shakeintensity' },
  { name: 'Shake Hard', price: 0, type: 'Shakeintensity' },
]

const Cupsize = [
  { name: 'Small', price: 0, type: 'Cupsize' },
  { name: 'Medium', price: 0, type: 'Cupsize' },
  { name: 'Large', price: 0, type: 'Cupsize' },
]

const Toppings = [
  { name: 'Dodoco Candy', price: 0, type: 'Toppings' },
  { name: 'Star Salt', price: 0, type: 'Toppings' },
  { name: 'Lemon Slice', price: 0, type: 'Toppings' },
  { name: 'Valberry', price: 0, type: 'Toppings' },
  { name: 'Small Lamp Grass', price: 0, type: 'Toppings' },
]

function Random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function addMoney(amount) {
  gameStore.money = Number((gameStore.money + amount).toFixed(2))
}

function generatecustomer() {
  order.value = {
    base: Random(Base),
    ingredient: Random(Ingredients),
    cutsize: Random(Cutsize),
    shakeintensity: Random(Shakeintensity),
    cupsize: Random(Cupsize),
    toppings: Random(Toppings),
  }
}

generatecustomer()

async function completeorder() {
  if (customersserved.value >= 5) return

  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return

  const subtotal =
    order.value.base.price +
    order.value.ingredient.price +
    order.value.cutsize.price +
    order.value.shakeintensity.price +
    order.value.cupsize.price +
    order.value.toppings.price

  const total = Number((subtotal * 1.08875).toFixed(2))

  await supabase.from('drinks').insert([
    {
      user_id: session.user.id,
      base: order.value.base.name,
      ingredient: order.value.ingredient.name,
      cutsize: order.value.cutsize.name,
      shakeintensity: order.value.shakeintensity.name,
      cupsize: order.value.cupsize.name,
      toppings: order.value.toppings.name,
      price: total,
    },
  ])

  addMoney(total)
  dailyprofit.value = Number((dailyprofit.value + total).toFixed(2))

  customersserved.value++

  if (customersserved.value >= 5) {
    endday()
  } else {
    generatecustomer()
  }
}

function endday() {
  gameStore.money = Number((gameStore.money - 20).toFixed(2))
  showbill.value = true
}

async function finishday() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return

  const nextDay = gameStore.day + 1

  const { data, error } = await supabase
    .from('profiles')
    .upsert({
      id: session.user.id,
      current_day: nextDay,
      current_money: gameStore.money
    })
    .select()

  console.log('SAVE DATA:', data)
  console.log('SAVE ERROR:', error)

  if (error) return

  gameStore.nextDay()

  dailyprofit.value = 0
  customersserved.value = 0
  showbill.value = false

  router.push('/')
}

async function loadSave() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return

  const { data, error } = await supabase
    .from('profiles')
    .select('current_day, current_money')
    .eq('id', session.user.id)
    .single()

  console.log('LOAD DATA:', data)
  console.log('LOAD ERROR:', error)

  if (error || !data) return

  gameStore.day = data.current_day ?? 1
  gameStore.money = data.current_money ?? 0
}

async function ensureProfile(session) {
  const { data, error } = await supabase
    .from('profiles')
    .upsert({
      id: session.user.id,
      email: session.user.email,
      current_day: 1,
      current_money: 0
    })
    .select()

  console.log('PROFILE INIT:', data)
  console.log('PROFILE INIT ERROR:', error)
}

onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) return

  await ensureProfile(session)
  await loadSave()

  generatecustomer()
})
</script>

<style scoped>
.daycounter {
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-family: 'Darumadrop One', sans-serif;
  z-index: 10;
}

.game-layout {
  display: flex;
  min-height: 100vh;

  backdrop-filter: blur(2px);
}

.left-panel {
  width: 30%;
  min-width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 2rem;
}

.right-panel {
  flex: 1;
  padding: 2rem 3rem;
  overflow-y: auto;
}

.profit-card {
  background: rgba(0, 0, 0, 0.85);
  color: white;
  width: 320px;
  text-align: center;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.profit-card h2 {
  margin: 0;
  font-family: 'Darumadrop One', sans-serif;
}

.profit-card p {
  margin-top: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
}
</style>