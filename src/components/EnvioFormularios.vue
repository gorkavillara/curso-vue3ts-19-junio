<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="username" v-model="datosFormulario.username" />
        <br />
        <input type="password" placeholder="password" v-model="datosFormulario.password" />
        <br />
        <button type="submit">Enviar</button>
        <button type="reset">Reset</button>
    </form>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

// const miEstado = ref("El valor inicial")

const datosFormulario = reactive({
    username: "miusuario",
    password: "1234"
})

const handleSubmit = (event: Event) => {
    // event.preventDefault()
    console.log(event)
    // Enviar la info a una API
    console.log(datosFormulario.username)
    console.log(datosFormulario.password)
}
</script>