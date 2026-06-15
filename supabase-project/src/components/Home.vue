<template>
  <div class="website">
    <h1 class="website__title">Genshin Impact Capybara Cafe</h1>
    <p class="daypreview">Day {{ gameStore.day }}</p>
<button class="play__button" @click="playGame">Play</button>
</div>
</template>

<script setup>
import { useGameStore } from '@/store/gamestore'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabaseClient'

const gameStore = useGameStore()
const router = useRouter()

async function playGame() {
  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (session) {
    router.push('/cafe')
  } else {
    router.push('/login')
  }
}
</script>

<style scoped>
.website {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin: 0;
}

.website__title {
  text-align: center;
  font-family: 'Darumadrop One', sans-serif;
  font-size: 67px;
  margin: 0;
  text-shadow: 5px 2px 5px black;
}

.play__button {
  font-family: 'Darumadrop One', sans-serif;
  background-color: #c63b49;
  font-size: 25px;
  border-radius: 1rem;
  padding: 0 30px 7px 30px;
  margin: 1rem;
  text-decoration: none;
  color: #ffffff;
}

</style>