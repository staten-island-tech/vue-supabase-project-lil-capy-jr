<template>
  <div class="stats">
    <h1>Player Statistics</h1>

    <div v-if="loading">
      Loading...
    </div>

    <div v-else>
      <h2>Player: {{ playerName }}</h2>

      <p>Total Days Played: {{ totalDays }}</p>
      <p>Total Profit: ${{ totalProfit.toFixed(2) }}</p>
      <p>Average Profit: ${{ averageProfit.toFixed(2) }}</p>

      <h2>Game History</h2>

      <ul>
        <li
          v-for="game in games"
          :key="game.id"
        >
          Day {{ game.day }}
          -
          ${{ game.money }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const games = ref([])
const playerName = ref('')
const loading = ref(true)

const totalDays = computed(() => games.value.length)

const totalProfit = computed(() =>
  games.value.reduce(
    (sum, game) => sum + Number(game.money),
    0
  )
)

const averageProfit = computed(() =>
  totalDays.value
    ? totalProfit.value / totalDays.value
    : 0
)

onMounted(async () => {
  try {
    const {
      data: { session }
    } = await supabase.auth.getSession()

    const { data, error } = await supabase
      .from('games')
      .select(`
        *,
        profiles (
          name,
          email
        )
      `)
      .eq('user_id', session.user.id)

    if (error) throw error

    games.value = data

    if (
      data.length &&
      data[0].profiles
    ) {
      playerName.value =
        data[0].profiles.name
    }
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.stats {
  max-width: 700px;
  margin: auto;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}
</style>