<template>
    <!-- <MiFormulario /> -->
    <!-- <AreaTexto /> -->
    <!-- <CheckBoxes /> -->
    <!-- <RadioButton /> -->
    <!-- <InputDesplegable /> -->
    <!-- <InputCustom v-model="valorMiInput" /> -->
    <EnvioFormularios />
</template>

<script setup lang="ts">
import MiFormulario from "./components/MiFormulario.vue"
import AreaTexto from "./components/AreaTexto.vue";
import CheckBoxes from "./components/CheckBoxes.vue";
import RadioButton from "./components/RadioButton.vue";
import InputDesplegable from "./components/InputDesplegable.vue"
import InputCustom from "./components/InputCustom.vue"
import EnvioFormularios from "./components/EnvioFormularios.vue"

import { ref } from "vue"

const valorMiInput = ref("Hola mundo")
</script>

<style scoped>
</style>