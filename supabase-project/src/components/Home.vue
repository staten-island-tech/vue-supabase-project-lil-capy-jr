<template>
  <div class="website">
    <h1 class="website__title">Genshin Impact Capybara Cafe</h1>
    <button class="play__button">Play</button>
  </div>
</template>

<script setup></script>

<style scoped>
.website {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin: 0;
  background-image: url("background.jpg");
}

.website__title {
  text-align: center;
  font-family: 'Darumadrop One', sans-serif;
  font-size: 67px;
}

.play__button {
  font-family: 'Darumadrop One', sans-serif;
  background-color: #c63b49;
}
</style>
