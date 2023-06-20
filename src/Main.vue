<template>
  <div>
    <input type="text" v-model="valorInput" />
    <button @click="pasaPorConsola">Pasa por consola</button>
    <p :class="claseTexto">{{ valorMayusculas }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const valorInput = ref("");

const pasaPorConsola = () => console.log(valorInput.value);

const valorMayusculas = computed(() => valorInput.value.toUpperCase());

const claseTexto = computed(() => {
    if (valorInput.value.length <= 6) return "rojo"
    return "verde"
})
</script>

<style scoped>
.rojo {
    color: red;
}
.verde {
    color: rgb(103, 218, 65);
}
</style>