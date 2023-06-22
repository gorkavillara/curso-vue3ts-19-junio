<template>
    <h1>Eventos comunicación</h1>
    <MiInput :valor="valorInput" @mi-evento="funcionCambio" />
    <p>{{ valorInput }}</p>
</template>

<script setup lang="ts">
    import { ref } from "vue"
    import MiInput from "./MiInput.vue";
    const valorInput = ref("Hola mundo")

    const funcionCambio = (evento: InputEvent) => {
        console.log(evento)
        valorInput.value = (evento.target as HTMLInputElement).value
    }
</script>