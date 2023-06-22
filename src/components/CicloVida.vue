<template>
    <h2>Ciclo de vida</h2>
    <button @click="cambiaToggle">{{ toggle ? "ON" : "OFF" }}</button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted } from "vue"

const toggle = ref(false)
const cambiaToggle = () => {
    toggle.value = !toggle.value
}

onMounted(() => {
    console.log("El componente ha sido montado")
    // Se suele utilizar para hacer llamadas a apis
})

onUpdated(() => {
    console.log("El componente ha sido actualizado")
    // Se suele utilizar para efectos secundarios
})

onUnmounted(() => {
    console.log("El componente se ha desmontado")
    // Se suele utilizar para eliminar eventListeners
})
</script>