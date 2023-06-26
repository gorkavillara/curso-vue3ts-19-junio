<template>
    <h2>Formulario básico con Vee-validate</h2>
    <Form v-slot="{ values }" :initial-values="valoresFormulario">
        <Field type="text" name="username" />
        <Field type="text" name="email" />

        <p>Username: {{ values.username }}</p>
        <p>Email: {{ values.email }}</p>
    </Form>
</template>

<script setup lang="ts">
import { Form, Field } from "vee-validate"
const valoresFormulario = {
    username: "miusuario",
    email: "miusuario@gmail.com",
    password: "1234"
}
</script>