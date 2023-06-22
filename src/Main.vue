<template>
    <BotonOnOff :active="modoOscuro" :toggle="cambiaModo" />
    <TextoPersonalizado texto="Otro texto" :esOscuro="modoOscuro" />
    <EventosComunicacion />
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import BotonOnOff from './components/BotonOnOff.vue';
import TextoPersonalizado from "./components/TextoPersonalizado.vue"
import EventosComunicacion from "./components/EventosComunicacion.vue"

const modoOscuro = ref(true)
const cambiaModo = () => {
    modoOscuro.value = !modoOscuro.value
}

provide("version", "0.2")
provide("modoOscuro", modoOscuro)
</script>

<style scoped>
</style>