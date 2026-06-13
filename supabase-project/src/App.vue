<template>
  <div :class="gameStore.theme">
    <header>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { useGameStore } from '@/store/gamestore'

const gameStore = useGameStore()
</script>

<style scoped>
.router {
  margin: 2rem;
  text-align: center;
  color: white;
  text-decoration: none;
}

.router__link {
  padding: 2rem;
  text-decoration: none;
  color: inherit;
}
</style>
