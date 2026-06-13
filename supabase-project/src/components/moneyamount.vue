<template>
  <div class="money" ref="moneyRef">
    ${{ currenttotal }}
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  currenttotal: {
    type: [String, Number],
    required: true
  }
})

const moneyRef = ref(null)

watch(
  () => props.currenttotal,
  () => {
    if (!moneyRef.value) return

    gsap.fromTo(
      moneyRef.value,
      { scale: 1.4 },
      {
        scale: 1,
        duration: 0.3
      }
    )
  }
)
</script>

<style scoped>
.money {
  font-size: 24px;
  font-weight: bold;
}
</style>