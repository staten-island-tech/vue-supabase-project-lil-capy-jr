<template>
  <div class="website">
    <h1 class="website__title">Genshin Impact Capybara Cafe</h1>
    <RouterLink class="play__button" to="/cafe">Play</RouterLink>
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
}

.website__title {
  text-align: center;
  font-family: 'Darumadrop One', sans-serif;
  font-size: 67px;
  margin: 0;
  text-shadow: 5px 2px 5px black;
}

.play__button:link,
.play__button:visited {
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