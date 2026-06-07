<template>
  <div class="money">
    ${{ currenttotal }}
  </div>
</template>

<script setup>
const props = defineProps({
  currenttotal: {
    type: [String, Number],
    required: true
  }
})
</script>

<style scoped>
.money {
  font-size: 24px;
  font-weight: bold;
}
</style>