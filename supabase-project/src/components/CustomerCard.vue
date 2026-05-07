<template>
  <div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
const characters = ref([])
async function getcharacters(){
  try {
    const response = await fetch('https://genshin.jmp.blue/characters')
    const data = await response.json()
    characters.value = data
  } catch (err){
    console.log("Failed to load characters")
  }
}
onMounted(() => {
  getcharacters()
})

</script>

<style scoped></style>
