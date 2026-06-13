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

    <div class="currentdrinkbox">
    <h3 class="currentdrink">Current Drink</h3>
    <ul>
      <li>Base: {{ selected.base }}</li>
      <li>Ingredient: {{ selected.ingredients }}</li>
      <li>Cut Size: {{ selected.Cutsize }}</li>
      <li>Shake Intensity: {{ selected.Shakeintensity }}</li>
      <li>Cup Size: {{ selected.Cupsize }}</li>
      <li>Topping: {{ selected.Toppings }}</li>
    </ul>
    </div>
    <button @click="submitdrink">Submit</button>
    <h2>{{ result }}</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'

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

function emptySelected() {
  return {
    base: '',
    ingredients: '',
    Cutsize: '',
    Shakeintensity: '',
    Cupsize: '',
    Toppings: '',
  }
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

  gsap.fromTo(
    '.currentdrink',
    {
      scale: 1,
      rotation: 0
    },
    {
      scale: 1.3,
      rotation: 10,
      duration: 0.4,
      yoyo: true,
      repeat: 1
    }
  )

  selected.value = emptySelected()
  emit('drinkcomplete')
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
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 20px;
}

button {
  font-family: 'Darumadrop One', sans-serif;
  background: rgba(198, 59, 73, 0.9);
  color: white;
  border: none;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  margin: 0.3rem;
  min-width: 140px;
  font-size: 12px;
  transition: all 0.2s ease;
  cursor: pointer;
}

button:hover {
  transform: translateY(-2px);
}

button.selected {
  background-color: #7a1e28;
  outline: 2px solid #fff;
}


.currentdrinkbox {
  width: 350px;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  margin: 1rem auto;
}

.currentdrinkbox ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.currentdrink {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.currentdrinkbox li {
  font-size: 1rem;
  margin: 0.3rem 0;
}
</style>
