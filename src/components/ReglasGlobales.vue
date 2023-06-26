<template>
    <h2>Validando</h2>
    <VeeForm
      v-slot="{ values, handleSubmit }"
      :initial-values="valoresFormulario"
      as="div"
      :validation-schema="miSchema"
    >
      <form @submit="handleSubmit($event, enviarFormulario)">
        <Field type="text" name="username" rules="empiezaPorA" />
        <br />
        <ErrorMessage name="username" />
        <br />
        <Field type="email" name="email" />
        <br />
        <ErrorMessage name="email" />
  
        <p>Username: {{ values.username }}</p>
        <p>Email: {{ values.email }}</p>
  
        <button type="submit">Enviar</button>
        <button type="reset">Reset</button>
      </form>
    </VeeForm>
  </template>
  
  <script setup lang="ts">
  import { Form as VeeForm, Field, ErrorMessage } from "vee-validate";
  import * as yup from "yup";
  
  const miSchema = yup.object({
    username: yup
      .string()
      .required("El campo username es obligatorio")
      .min(4, "El campo username debe tener mínimo 4 caracteres"),
    email: yup.string().email().required(),
  });
  
  const valoresFormulario = {
    username: "mi",
    email: "miusuario@gmail.com",
    password: "1234",
  };
  
  const enviarFormulario = (values: unknown) => {
    console.log(values);
    // Enviaremos los valores
  };
  </script>
  