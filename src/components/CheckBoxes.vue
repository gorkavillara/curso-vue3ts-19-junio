<template>
  <h2>Colores disponibles</h2>
  <form>
    <label for="input-rojo">
      <input
        type="checkbox"
        value="Rojo"
        id="input-rojo"
        v-model="coloresSeleccionados"
      />
      Rojo
    </label>
    <label for="input-azul">
      <input
        type="checkbox"
        value="Azul"
        id="input-azul"
        v-model="coloresSeleccionados"
      />
      Azul
    </label>
    <label for="input-verde">
      <input
        type="checkbox"
        value="Verde"
        id="input-verde"
        v-model="coloresSeleccionados"
      />
      Verde
    </label>
    <label for="input-amarillo">
      <input
        type="checkbox"
        value="Amarillo"
        id="input-amarillo"
        v-model="coloresSeleccionados"
      />
      Amarillo
    </label>
  </form>
  <p>{{ coloresSeleccionados }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const coloresSeleccionados = ref<string[]>([]);
</script>
