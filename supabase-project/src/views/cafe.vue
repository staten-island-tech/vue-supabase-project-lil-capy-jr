<template>
    <div class = "cafe">
        <div class = "customer">
            <CustomerCard/>
            <Drink/>
        </div>
        <div class = "counter">
            <Ingredient/>
        </div>
    </div>
</template>

<script setup>
import CustomerCard from '@/components/CustomerCard.vue';
import Drink from '@/components/Drink.vue';
import Ingredient from '@/components/Ingredient.vue';

</script>

<style  scoped>

</style>