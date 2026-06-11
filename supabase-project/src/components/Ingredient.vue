<template>
  <div>
    <h2 class="basetitle">Bases</h2>
    <button v-for="item in Base" :key="item.name" @click="selectitem(item)">
      {{ item.name }} - ${{ item.price }}
    </button>

    <h2 class="ingredientstitle">Ingredients</h2>
    <button v-for="item in Ingredients" :key="item.name" @click="selectitem(item)">
      {{ item.name }} - ${{ item.price }}
    </button>

    <h2 class="cutsizetitle">Cut Size</h2>
    <button v-for="item in cutsize" :key="item.name" @click="selectitem(item)">
      {{ item.name }}
    </button>

    <h2 class="shakeintensitytitle">Shake Intensity</h2>
    <button v-for="item in Shakeintensity" :key="item.name" @click="selectitem(item)">
      {{ item.name }}
    </button>

    <h2 class="cupsizetitle">Cup Size</h2>
    <button v-for="item in Cupsize" :key="item.name" @click="selectitem(item)">
      {{ item.name }}
    </button>

    <h2 class="toppingstitle">Toppings</h2>
    <button v-for="item in Toppings" :key="item.name" @click="selectitem(item)">
      {{ item.name }}
    </button>
    <h3 class="currentdrink">Current Drink</h3>
    <ul>
      <li>Base: {{ selected.base }}</li>
      <li>Ingredient: {{ selected.ingredients }}</li>
      <li>Cut Size: {{ selected.Cutsize }}</li>
      <li>Shake Intensity: {{ selected.Shakeintensity }}</li>
      <li>Cup Size: {{ selected.Cupsize }}</li>
      <li>Topping: {{ selected.Toppings }}</li>
    </ul>
    <button @click="submitdrink">Submit</button>
    <h2>{{ result }}</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  order: Object
})

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
const cutsize = [
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
const selected = ref({
  base: '',
  ingredients: '',
  Cutsize: '',
  Shakeintensity: '',
  Cupsize: '',
  Toppings: '',
})
const result = ref('')
const emit = defineEmits(['drinkcomplete'])
function selectitem(item) {
  selected.value[item.type] = item.name
}
function submitdrink() {
  const correct =
    selected.value.base === props.order.base.name &&
    selected.value.ingredients === props.order.ingredient.name &&
    selected.value.Cutsize === props.order.cutsize.name &&
    selected.value.Shakeintensity === props.order.shakeintensity.name &&
    selected.value.Cupsize === props.order.cupsize.name &&
    selected.value.Toppings === props.order.toppings.name
  if (correct) {
    result.value = 'Correct Order'
    selected.value = emptySelected()
    emit('drinkcomplete')
  } else {
    result.value = 'Wrong, try again'
  }
}
</script>

<style scoped>
div {
  text-align: center;
}
.basetitle,
.ingredientstitle,
.cutsizetitle,
.shakeintensitytitle,
.cupsizetitle,
.toppingstitle {
  text-align: center;
  font-family: 'Darumadrop One', sans-serif;
  font-size: 30px;
  margin: 0;
  text-shadow: 5px 2px 5px black;
}
.currentdrink {
  text-align: center;
  font-family: 'Darumadrop One', sans-serif;
  font-size: 35px;
  margin: 0;
  text-shadow: 5px 2px 5px black;
}
button {
  font-family: 'Darumadrop One', sans-serif;
  background-color: #c63b49;
  font-size: 15px;
  border-radius: 1rem;
  border-color: transparent;
  padding: 0 30px 7px 30px;
  margin: 1rem;
  text-decoration: none;
  color: #ffffff;
}
button.selected {
  background-color: #7a1e28;
  outline: 2px solid #fff;
}
</style>
