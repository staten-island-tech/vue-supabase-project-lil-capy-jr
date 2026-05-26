<template>
  <div class="order">
    <ul>
      <li>
        <strong>Base: {{ order.base.name }}</strong>
      </li>
      <li>
        <strong>ingredients: {{ order.ingredient.name }}</strong>
      </li>
      <li>
        <strong>Cut Size: {{ order.cutsize.name }}</strong>
      </li>
      <li>
        <strong>Shake Intensity: {{ order.shakeintensity.name }}</strong>
      </li>
      <li>
        <strong>Cup Size: {{ order.cupsize.name }}</strong>
      </li>
      <li>
        <strong>Toppings: {{ order.toppings.name}}</strong>
      </li>
      <h2>Total = ${{ totalprice }}</h2>
    </ul>
  </div>
</template>

<script setup>
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
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

const order = ref({
  base: Random(Base),
  ingredient: Random(Ingredients),
  cutsize: Random(Cutsize),
  shakeintensity: Random(Shakeintensity),
  cupsize: Random(Cupsize),
  toppings: Random(Toppings),
})

const totalprice = computed(() => {
  const subtotal = order.value.base.price + order.value.ingredient.price + order.value.cutsize.price +  order.value.shakeintensity.price + order.value.cupsize.price +order.value.toppings.price
  const totalWithTax = subtotal * 1.08875
  return totalWithTax.toFixed(2)
})
</script>

<style scoped></style>
