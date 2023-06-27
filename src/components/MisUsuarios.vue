<template>
  <div>
    <div v-for="usuario in usuarios" class="usuario">
      <span>{{ usuario.id }}</span>
      <span>{{ usuario.nombre }}</span>
      <span>{{ usuario.email }}</span>
      <router-link :to="`/usuarios/${usuario.id}`">Detalles</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import usuarios from "../assets/usuarios";
</script>

<style scoped>
.usuario {
  display: flex;
  gap: 1rem;
}
</style>
