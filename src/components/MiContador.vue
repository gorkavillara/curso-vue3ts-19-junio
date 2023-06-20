<template>
    <div>
        <h2>El contador</h2>
        <button @click="incrementaContador">Contador: {{ contador }}</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const contador = ref(0)
const incrementaContador = () => {
    contador.value++
}
</script>