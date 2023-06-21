<template>
    <BotonOnOff :active="modoOscuro" :toggle="cambiaModo" />
    <TextoPersonalizado texto="Otro texto" :esOscuro="modoOscuro" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BotonOnOff from './components/BotonOnOff.vue';
import TextoPersonalizado from "./components/TextoPersonalizado.vue"

const modoOscuro = ref(true)
const cambiaModo = () => {
    modoOscuro.value = !modoOscuro.value
}
</script>

<style scoped>
</style>