<template>
    <h2>Enviando formularios con Vee-validate</h2>
    <VeeForm v-slot="{ values, handleSubmit }" :initial-values="valoresFormulario" as="div">
        <form @submit="handleSubmit($event, enviarFormulario)">
            <Field type="text" name="username" />
            <Field type="text" name="email" />

            <p>Username: {{ values.username }}</p>
            <p>Email: {{ values.email }}</p>

            <button type="submit">Enviar</button>
            <button type="reset">Reset</button>
        </form>
    </VeeForm>
</template>

<script setup lang="ts">
import { Form as VeeForm, Field } from "vee-validate"
const valoresFormulario = {
    username: "miusuario",
    email: "miusuario@gmail.com",
    password: "1234"
}

const enviarFormulario = (values: unknown) => {
    console.log(values)
    // Enviaremos los valores
}

</script>