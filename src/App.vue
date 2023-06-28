<template>
  <NavBar />
  <div class="principal">
    <h1>Hola mundo</h1>
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <GridExample />
  </div>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
import GridExample from "./components/GridExample.vue"
</script>

<style scoped>
  .principal {
    padding: 1rem;
  }
</style>
