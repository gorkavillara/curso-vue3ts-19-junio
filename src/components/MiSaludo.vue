<template>
  <h1>Hola {{ nombre }}</h1>
</template>

<script setup lang="ts">
defineProps<{
  nombre: string;
}>();
// Puedo acceder a las props de forma programática
</script>
