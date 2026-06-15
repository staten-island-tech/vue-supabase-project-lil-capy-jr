<template>
  <div class="order">
    <div class="order__container">
      <h2>Order</h2>
      <ul>
        <h3>Base: {{ order.base.name }}</h3>
        <h3>Ingredients: {{ order.ingredient.name }}</h3>
        <h3>Cut Size: {{ order.cutsize.name }}</h3>
        <h3>Shake Intensity: {{ order.shakeintensity.name }}</h3>
        <h3>Cup Size: {{ order.cupsize.name }}</h3>
        <h3>Toppings: {{ order.toppings.name }}</h3>
        <h2>Total = ${{ totalprice }}</h2>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  order: Object
})

const totalprice = computed(() => {
  const subtotal = props.order.base.price + props.order.ingredient.price +
    props.order.cutsize.price + props.order.shakeintensity.price +
    props.order.cupsize.price + props.order.toppings.price
  return (subtotal * 1.08875).toFixed(2)
})
</script>

<style scoped>
.order__container {
  background: rgba(0, 0, 0, 0.85);
  border-radius: 20px;
  padding: 1rem;
  width: 280px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
}

.order__container ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding: 0;
}

.order__container h3 {
  text-align: center;
  margin: 0.5rem 0;
}

</style>
