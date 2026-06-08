<template>
  <div class="login">
    <h1>Supabase Login Test</h1>

    <input v-model="email" type="email" placeholder="Email" />

    <input v-model="name" type="text" placeholder="Name" />

    <input v-model="password" type="password" placeholder="Password" />

    <button @click="signUp" :disabled="loading">Sign Up</button>

    <button @click="signIn" :disabled="loading">Log In</button>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const name = ref('')
const email = ref('')
const password = ref('')
const message = ref('')
const loading = ref(false)

async function signUp() {
  loading.value = true
  message.value = ''

  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

  loading.value = false

  if (error) {
    message.value = error.message
    return
  }

  if (!error) {
    const { error: profileError } = await supabase.from('profiles').insert([
      {
        id: data.user.id,
        name: name.value,
        email: email.value,
      },
    ])

    if (profileError) {
      console.error(profileError)
    }
  }

  console.log(data)
  message.value = 'Account created successfully!'
}

async function signIn() {
  loading.value = true
  message.value = ''

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  loading.value = false

  if (error) {
    message.value = error.message
    return
  }

  console.log(data)
  message.value = 'Logged in successfully!'
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  margin: 2rem auto;
}

input {
  padding: 0.5rem;
}

button {
  padding: 0.5rem;
  cursor: pointer;
}
</style>
