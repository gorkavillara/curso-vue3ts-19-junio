<template>
    <div>
        <p>Mi texto</p>
        <input type="text" @input="cambioTexto" :value="valorInput" />
        <button @click="obtenClick">Enviar</button>
        <input type="text" v-model="valorInput" />
        <p>El valor del input es: {{ valorInput }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const valorInput = ref("Valor inicio")

const cambioTexto = (event: Event) => {
    // console.log(event)
    // console.log("He cambiado")
    const nuevoValor = (event.target as HTMLInputElement).value

    console.log(nuevoValor)
    valorInput.value = nuevoValor
}

const obtenClick = (event: Event) => {
    console.log(event)
}
</script>
<style scoped>
div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
input {
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    transition: all 0.5s;
}
input:focus {
    box-shadow: 0 0 20px rgba(190, 190, 190, 0.5);
}
</style>