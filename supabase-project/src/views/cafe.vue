<template>
  <div class="daycounter">
    Day {{ day }}
  </div>
  <div class="customercounter">Customers: {{ customersserved }} / 10</div>
  <div class="cafe">
    <div class="customer">
      <CustomerCard :key="customersserved" />
      <Drink :key="customersserved" :order="order" />
    </div>
    <div class="counter">
      <Ingredient :key="customersserved" :order="order" @drinkcomplete="completeorder" />
    </div>
    <moneyamount :currenttotal="money" />
    <Bill v-if="showbill" :day="day" :dailyprofit="dailyprofit" @closebill="finishday" />
  </div>
</template>

<script setup>
import moneyamount from '@/components/moneyamount.vue';
import Bill from '@/components/Bill.vue';
import CustomerCard from '@/components/CustomerCard.vue';
import Drink from '@/components/Drink.vue';
import Ingredient from '@/components/Ingredient.vue';
import { ref, computed } from 'vue'

import { useGameStore } from '@/store/gamestore'
import { useRouter } from 'vue-router'

const gameStore = useGameStore()
const router = useRouter()

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
const money = computed({
  get: () => gameStore.money,
  set: (v) => { gameStore.money = v }
})
const day = computed(() => gameStore.day)
const customersserved = ref(0)
const dailyprofit = ref(0)
const showbill = ref(false)
const order = ref({})
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
function completeorder() {
  const subtotal =
    order.value.base.price +
    order.value.ingredient.price +
    order.value.cutsize.price +
    order.value.shakeintensity.price +
    order.value.cupsize.price +
    order.value.toppings.price
  const total = Number((subtotal * 1.08875).toFixed(2))
  money.value = Number((money.value + total).toFixed(2))
  dailyprofit.value = Number((dailyprofit.value + total).toFixed(2))
  customersserved.value++
  if (customersserved.value >= 10) {
    endday()
  } else {
    generatecustomer()
  }
}
function endday() {
  money.value = Number((money.value - 20).toFixed(2))
  showbill.value = true
}
function finishday() {
  gameStore.nextDay()
  dailyprofit.value = 0
  showbill.value = false
  router.push('/')
}
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

.customercounter {
  position: fixed;
  top: 10px;
  left: 10px;
  font-size: 24px;
  font-family: 'Darumadrop One', sans-serif;
  z-index: 10;
}
</style>