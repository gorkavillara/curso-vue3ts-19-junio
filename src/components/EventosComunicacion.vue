<template>
    <h1>Eventos comunicación</h1>
    <MiInput :valor="valorInput" />
    <p>{{ valorInput }}</p>
</template>

<script setup lang="ts">
    import { ref } from "vue"
    import MiInput from "./MiInput.vue";
    const valorInput = ref("Hola mundo")
</script>