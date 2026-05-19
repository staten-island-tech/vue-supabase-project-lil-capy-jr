<template>
  <div class = "order">
    <li><strong>Base:</strong></li>
    <li><strong>ingredients:</strong></li>
    <li><strong>ingredients:</strong></li>
    <li><strong>Cut Size:</strong></li>
    <li><strong>Shake Intensity:</strong></li>
    <li><strong>Cup Size:</strong></li>
    <li><strong>Toppings:</strong></li>
    <li><strong></strong></li>

  </div>
</template>

<script setup>
const Base = [
  {name :"Milk", price:2, type:"base"},
  {name :"Tea", price:2, type:"base"},
  {name :"Firewater", price:3, type:"base"},
  {name :"Fruitwine", price:4, type:"base"},
]
const Ingredients = [
  {name :"Romaritime Flower Juice", price:3, type:"ingredients"},
  {name :"Caramel", price:2, type:"ingredients"},
  {name :"Smetana", price:2, type:"ingredients"},
  {name :"Fermented Juice", price:2, type:"ingredients"},
  {name :"Fizzy Water", price:2, type:"ingredients"},
  {name :"Chopped Petals", price:1, type:"ingredients"},
  {name :"Mint", price:1, type:"ingredients"},
  {name :"Cocoa", price:1, type:"ingredients"},
  {name :"Wolfhook", price:1, type:"ingredients"},
]
const cutsize = [
  {name :"Large Pieces", price:0, type:"Cutsize"},
  {name :"Small Pieces", price:0, type:"Cutsize"},
  {name :"Small Bits", price:0, type:"Cutsize"},
]
const Shakeintensity = [
  {name :"Shake Gently", price:0, type:"Shakeintensity"},
  {name :"Shake Properly", price:0, type:"Shakeintensity"},
  {name :"Shake Hard", price:0, type:"Shakeintensity"},
]
const Cupsize = [
  {name :"Small", price:0, type:"Cupsize"},
  {name :"Medium", price:0, type:"Cupsize"},
  {name :"Large", price:0, type:"Cupsize"},
]
const Toppings = [
  {name :"Dodoco Candy", price:0, type:"Toppings"},
  {name :"Star Salt", price:0, type:"Toppings"},
  {name :"Lemon Slice", price:0, type:"Toppings"},
  {name :"Valberry", price:0, type:"Toppings"},
  {name :"Small Lamp Grass", price:0, type:"Toppings"},
]

function randombase(Base){
  return Base[Math.floor(Math.random()* Base.length)]
}

</script>

<style scoped>
</style>
