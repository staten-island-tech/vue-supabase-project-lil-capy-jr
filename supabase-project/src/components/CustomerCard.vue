<template>
  <div class = "characters">
    <div class = "characterimage">
<img v-if="randomcharacter" :src="`https://genshin.jmp.blue/characters/${randomcharacter}/icon`" :alt="randomcharacter">    </div>
   
    <div class = "characterdrink"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { gsap } from "gsap"

const characters = ref([])
const randomcharacter = ref(null)
async function getcharacters(){
  try {
    const response = await fetch('https://genshin.jmp.blue/characters')
    const data = await response.json()
    characters.value = data
    const randomindex = Math.floor(Math.random()*data.length)
    randomcharacter.value = data[randomindex]
  } catch (err){
    console.log("Failed to load characters")
  }
}
onMounted(() => {
  getcharacters()

  gsap.from(".characters", {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power2.out"
  })
})

</script>
<style scoped>
.characters {
  display: flex;
  justify-content: center;
  align-items: center;
}

.characterimage {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 180px;
  height: auto;

  object-fit: contain;
}
</style>


