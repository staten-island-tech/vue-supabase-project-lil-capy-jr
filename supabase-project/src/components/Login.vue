<template>
  <div class="login">
    <h1>Login</h1>

    <input
      v-model="email"
      type="email"
      placeholder="Email"
    />

    <input
      v-model="password"
      type="password"
      placeholder="Password"
    />

    <button @click="signUp" :disabled="loading">
      Sign Up
    </button>

    <button @click="signIn" :disabled="loading">
      Log In
    </button>

    <p v-if="message">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/store/gamestore'

const router = useRouter()
const gameStore = useGameStore()
const email = ref('')
const password = ref('')
const loading = ref(false)
const message = ref('')

async function signUp() {
  if (!email.value || !password.value) {
  message.value = 'Please fill out all fields.'
  return
}
  loading.value = true
  message.value = ''

  const { data, error } =
  await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

if (error) {
  message.value = error.message
  return
}

await supabase
  .from('profiles')
  .insert([
    {
      id: data.user.id,
      email: email.value,
      name: email.value.split('@')[0],
    }
  ])

  if (error) {
    loading.value = false
    message.value = error.message
    return
  }

  const { error: profileError } = await supabase
    .from('profiles')
    .insert([
      {
        id: data.user.id,
        email: email.value,
      },
    ])

  console.log('profile error:', profileError)

  loading.value = false

  if (profileError) {
    message.value = profileError.message
    return
  }

  message.value = 'Account created successfully!'
}
async function signIn() {
  loading.value = true
  message.value = ''

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) {
      message.value = error.message
      return
    }

    const {
      data: { session }
    } = await supabase.auth.getSession()

    const { data } = await supabase
      .from('profiles')
      .select('current_day, current_money')
      .eq('id', session.user.id)
      .single()

    if (data) {
      gameStore.day = data.current_day
      gameStore.money = Number(data.current_money)
    }

    message.value = 'Logged in successfully!'
    router.push('/cafe')
  } catch (err) {
    console.error(err)
    message.value = 'Something went wrong.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  margin: 2rem auto;
  text-align: center;
}

input {
  padding: 0.5rem;
  font-family: 'Elms Sans', sans-serif;
}

button {
  padding: 0.5rem;
  cursor: pointer;
  font-family: 'Elms Sans', sans-serif;
}
</style>