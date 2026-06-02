<template>
  <div class="order">
    <ul>
      <h3>
        <strong>Base: {{ order.base.name }}</strong>
      </h3>
      <h3>
        <strong>Ingredients: {{ order.ingredient.name }}</strong>
      </h3>
      <h3>
        <strong>Cut Size: {{ order.cutsize.name }}</strong>
      </h3>
      <h3>
        <strong>Shake Intensity: {{ order.shakeintensity.name }}</strong>
      </h3>
      <h3>
        <strong>Cup Size: {{ order.cupsize.name }}</strong>
      </h3>
      <h3>
        <strong>Toppings: {{ order.toppings.name}}</strong>
      </h3>
      <h2>Total = ${{ totalprice }}</h2>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  order: Object
})

const totalprice = computed(() => {
  const subtotal = order.value.base.price + order.value.ingredient.price + order.value.cutsize.price +  order.value.shakeintensity.price + order.value.cupsize.price +order.value.toppings.price
  const totalWithTax = subtotal * 1.08875
  return (subtotal * 1.08875).toFixed(2)
})
</script>

<style scoped>
.order {
  text-align: center;
  width: 500px;
  height: 300px;
  background-color: black;
}

h3 {
  font-size: 14px;
  line-height: 14px;
}
</style>
