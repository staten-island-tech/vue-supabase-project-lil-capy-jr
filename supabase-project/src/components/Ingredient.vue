<template>
  <div>
    <h2 class="base__title">Bases</h2>
    <button v-for="item in Base" :key="item.name" @click="selectitem(item)">
      {{ item.name }} - ${{ item.price }}
    </button>

    <h2 class="ingredients__title">Ingredients</h2>
    <button v-for="item in Ingredients" :key="item.name" @click="selectitem(item)">
      {{ item.name }} - ${{ item.price }}
    </button>

    <h2 class="cutsize__title">Cut Size</h2>
    <button v-for="item in cutsize" :key="item.name" @click="selectitem(item)">
      {{ item.name }}
    </button>

    <h2 class="shakeintensity__title">Shake Intensity</h2>
    <button v-for="item in Shakeintensity" :key="item.name" @click="selectitem(item)">
      {{ item.name }}
    </button>

    <h2 class="cupsize__title">Cup Size</h2>
    <button v-for="item in Cupsize" :key="item.name" @click="selectitem(item)">
      {{ item.name }}
    </button>

    <h2 class="toppings__title">Toppings</h2>
    <button v-for="item in Toppings" :key="item.name" @click="selectitem(item)">
      {{ item.name }}
    </button>

    <h3 class="current__drink">Current Drink</h3>
    <ul>
      <li v-for="item in selecteddrink" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
    <button>Submit</button>
  </div>
</template>

<script setup>
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
import { ref } from 'vue'
const emit = defineEmits(['addingredient'])
const selecteddrink = ref([])
const selectitem = (item) => {
  selecteddrink.value.push(item)
  emit('addingredient', item)
<<<<<<< HEAD
} 


=======
}
>>>>>>> main
</script>

<style scoped>
div {
  text-align: center;
}

.base__title {
  text-align: center;
  font-family: 'Darumadrop One', sans-serif;
  font-size: 30px;
  margin: 0;
  text-shadow: 5px 2px 5px black;
}

.ingredients__title {
  text-align: center;
  font-family: 'Darumadrop One', sans-serif;
  font-size: 30px;
  margin: 0;
  text-shadow: 5px 2px 5px black;
}

.cutsize__title {
  text-align: center;
  font-family: 'Darumadrop One', sans-serif;
  font-size: 30px;
  margin: 0;
  text-shadow: 5px 2px 5px black;
}

.shakeintensity__title {
  text-align: center;
  font-family: 'Darumadrop One', sans-serif;
  font-size: 30px;
  margin: 0;
  text-shadow: 5px 2px 5px black;
}

.cupsize__title {
  text-align: center;
  font-family: 'Darumadrop One', sans-serif;
  font-size: 30px;
  margin: 0;
  text-shadow: 5px 2px 5px black;
}

.toppings__title {
  text-align: center;
  font-family: 'Darumadrop One', sans-serif;
  font-size: 30px;
  margin: 0;
  text-shadow: 5px 2px 5px black;
}

.current__drink {
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
</style>
