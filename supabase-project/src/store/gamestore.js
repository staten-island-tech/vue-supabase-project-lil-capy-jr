import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useGameStore = defineStore('game', () => {
  const day = ref(1)
  const money = ref(0)

  const theme = computed(() => {
    return day.value % 2 === 0 ? 'night' : 'day'
  })

  function nextDay() {
    day.value++
  }

  function resetForNewGame() {
    day.value = 1
    money.value = 0
  }

  return {
    day,
    money,
    theme,
    nextDay,
    resetForNewGame
  }
})