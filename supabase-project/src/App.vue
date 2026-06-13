<template>
  <div :class="gameStore.theme">
    <header>
      <nav class="router">
        <RouterLink class="router__link" to="/">Home</RouterLink>
        <RouterLink class="router__link" to="/cafe">Cafe</RouterLink>
        <RouterLink class="router__link" to="/login"> Login </RouterLink>
      </nav>
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

.day {
  min-height: 100vh;
  background: linear-gradient(to bottom,
      #87ceeb,
      #f8f4c6);
  color: black;
  transition: all 0.5s ease;
}

.night {
  min-height: 100vh;
  background: linear-gradient(to bottom,
      #0f172a,
      #1e293b);
  color: white;
  transition: all 0.5s ease;
}
</style>
