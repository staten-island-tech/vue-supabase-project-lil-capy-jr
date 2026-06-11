import { defineStore } from 'pinia'
import { ref } from 'vue'
 
export const useGameStore = defineStore('game', () => {
  const day = ref(1)
  const money = ref(0)
  function nextDay() {
    day.value++
  }
  function resetForNewGame() {
    day.value = 1
    money.value = 0
  }
  return { day, money, nextDay, resetForNewGame }
})
 