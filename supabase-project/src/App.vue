<template>
  <div>
    <header>
      <nav class="router">
        <RouterLink class="router__link" to="/">Home</RouterLink>
        <RouterLink class="router__link" to="/bill">Bill</RouterLink>
        <RouterLink class="router__link" to="/customercard">Customer Card</RouterLink>
        <RouterLink class="router__link" to="/drink">Drink</RouterLink>
        <RouterLink class="router__link" to="/ingredientbutton">Ingredient Button</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script></script>

<style scoped>
.router {
  margin: 2rem;
  text-align: center;
}

.router__link{
  padding: 2rem;
}
</style>
