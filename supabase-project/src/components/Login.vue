<template>
  <div class="website">
    <button class="login__button">Log In</button>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabaseClient';

const router = useRouter()

const form = reactive ({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const errorMessage = ref('')
const successMessage = ref('')
const loading = ref(false)

async function register() {
  errorMessage.value = ''
  successMessage.value = ''  
}
</script>

<style scoped>
.login__button {
  font-family: 'Darumadrop One', sans-serif;
  background-color: transparent;
  font-size: 25px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 4px;
  margin: 1rem;
}
</style>
