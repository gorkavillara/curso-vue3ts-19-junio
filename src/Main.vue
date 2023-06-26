<template>
    <div v-if="esVisible">Esto debería verse</div>
    <DirectivasParametros />
</template>

<script setup lang="ts">
import DirectivasPersonalizadas from "./components/DirectivasPersonalizadas.vue"
import DirectivasParametros from "./components/DirectivasParametros.vue"
const esVisible = true
</script>

<style scoped>
</style>