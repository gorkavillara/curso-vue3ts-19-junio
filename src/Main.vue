<template>
    <CicloVida v-if="mostrar" />
    <button @click="calcular">Vuelve a probar</button>
</template>

<script setup lang="ts">
import { ref } from "vue"
import CicloVida from "./components/CicloVida.vue"
const mostrar = ref(Math.random() > 0.5)
const calcular = () => {
    mostrar.value = !mostrar.value
}
</script>

<style scoped>
</style>