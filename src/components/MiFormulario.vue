<template>
    <form>
        <input type="text" name="usuario" v-model.lazy="formData.usuario" />
        <span>{{ formData.usuario }}</span>
        <input type="text" name="email" v-model.trim="formData.email" />
        <span>{{ formData.email.length }}</span>
        <input type="number" name="edad" v-model.number="formData.edad" />
        <span>{{ typeof formData.edad }}</span>
        <input type="password" name="password" v-model="formData.password" />
        <span>{{ formData.password }}</span>
        <button type="submit">Enviar</button>
    </form>
</template>

<script setup lang="ts">
import { reactive } from "vue"

interface IForm {
    usuario: string
    email: string
    edad: number
    password: string
}

const formData = reactive<IForm>({
    usuario: "gorka",
    email: "",
    edad: 0,
    password: ""
})
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

input {
    padding: 0.5rem;
    transition: all 0.3s;
}

input:focus {
    box-shadow: 0 0 2rem rgba(125, 214, 125, 0.753);
}
</style>