<template>
  <div class="order">
    <div class="order__container">
      <h2>Order</h2>
      <ul>
        <h3>
          <normal>Base: {{ order.base.name }}</normal>
        </h3>
        <h3>
          <normal>Ingredients: {{ order.ingredient.name }}</normal>
        </h3>
        <h3>
          <normal>Cut Size: {{ order.cutsize.name }}</normal>
        </h3>
        <h3>
          <normal>Shake Intensity: {{ order.shakeintensity.name }}</normal>
        </h3>
        <h3>
          <normal>Cup Size: {{ order.cupsize.name }}</normal>
        </h3>
        <h3>
          <normal>Toppings: {{ order.toppings.name }}</normal>
        </h3>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-size: 14px;
  line-height: 14px;
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
