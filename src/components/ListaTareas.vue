<template>
  <MiSaludo nombre="Sandra" />
  <h2>Esta es la lista de tareas</h2>
  <div class="lista">
    <MiTarea titulo="Bajar la basura" />
    <MiTarea titulo="Sacar al perro" />
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import MiTarea from "@components/MiTarea";
//@ts-ignore
import MiSaludo from "@components/MiSaludo";
const esDesarrollador = true
</script>

<style scoped>
.lista {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
