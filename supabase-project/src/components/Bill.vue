<template>
  <div class="bill" @click="close">
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
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  day: Number,
  dailyProfit: Number
})

const emit = defineEmits(['closebill'])

function close() {
  emit('closebill')
}

onMounted(() => {
  gsap.from('.bill', {
    opacity: 0,
    scale: 0,
    duration: 0.8,
    ease: 'back.out(1.7)'
  })
})
</script>

<style scoped>
.bill {
  position: fixed;
  inset: 0;
  z-index: 2147483647; /* max safe z-index */

  background: rgba(0, 0, 0, 0.9);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  pointer-events: auto;
}
</style>