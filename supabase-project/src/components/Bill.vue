<template>
  <div class="bill" @click="$emit('closebill')">

    <h1>Day {{ day }} Complete</h1>

    <h2>Earned: ${{ dailyprofit.toFixed(2) }}</h2>
    <h2>Bills: -$20</h2>
    <h2>
      Net Profit:
      ${{ (dailyprofit - 20).toFixed(2) }}
    </h2>
    <p>Click to continue</p>
  </div>
</template>
<script setup>
defineProps({
  day: Number,
  dailyProfit: Number
})
defineEmits(['closebill'])
</script>
<style scoped>
</style>
