<template>
    <h1>Eventos comunicación v{{ version }}</h1>
    <MiInput :valor="valorInput" @mi-evento="funcionCambio" />
    <p>{{ valorInput }}</p>
    <p>{{ modoOscuro ? "oscuro" : "claro" }}</p>
    <p>{{ nombreAplicacion }}</p>
</template>

<script setup lang="ts">
    import { ref, inject } from "vue"
    import MiInput from "./MiInput.vue";
    const valorInput = ref("Hola mundo")

    const funcionCambio = (evento: InputEvent) => {
        console.log(evento)
        valorInput.value = (evento.target as HTMLInputElement).value
    }

    const version = inject("version")
    const modoOscuro = inject("modoOscuro")
    const nombreAplicacion = inject("appName")
</script>