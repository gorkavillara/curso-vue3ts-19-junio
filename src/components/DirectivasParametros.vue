<template>
    <h3>Este es el componente de las directivas con parámetros</h3>
    <p v-bold v-rojo>Hola mundo</p>
</template>

<script setup lang="ts">
const vBold = {
    mounted(el: HTMLElement) {
        el.style.fontWeight = "800"
    }
}
const vRojo = {
    mounted(el: HTMLElement) {
        el.style.color = "red"
    }
}
</script>