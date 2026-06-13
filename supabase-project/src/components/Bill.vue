<template>
  <div class="bill" @click="$emit('closebill')">
    <h1>Day {{ day }} Complete</h1>
    <h2>Earned: ${{ dailyProfit.toFixed(2) }}</h2>
    <h2>
      Net Profit:
      ${{ (dailyProfit - 20).toFixed(2) }}
    </h2>
    <p>Click to continue</p>
  </div>
</template>

<script setup>
const props = defineProps({
  day: Number,
  dailyProfit: Number
})

defineEmits(['closebill'])
</script>

<style scoped>
.bill {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  z-index: 100;
  cursor: pointer;
  color: white;
}
</style>
