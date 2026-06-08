<template>
  <div>
    <header>
      <nav class="router">
        <RouterLink class="router__link" to="/">Home</RouterLink>
        <RouterLink class="router__link" to="/bill">Bill</RouterLink>
        <RouterLink class="router__link" to="/customercard">Shop</RouterLink>
        <RouterLink class="router__link" to="/drink">Drink</RouterLink>
        <RouterLink class="router__link" to="/login"> Login </RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>

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
  color: white;
  text-decoration: none;
}
</style>
