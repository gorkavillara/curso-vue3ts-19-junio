<template>
  <div>
    <h3>Clientes</h3>
    <ul>
      <li v-for="cliente in clientes">
        <span>{{ cliente.id }}. {{ cliente.nombre }}</span>
        <span> | </span>
        <span>{{ cliente.email }}</span>
        <span> | </span>
        <span>{{ cliente.age }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Cliente } from "../models";
import axios from "axios";

const clientes = ref<Cliente[]>([]);

onMounted(async () => {
  const baseUrl = "https://07cc-46-25-71-106.ngrok-free.app";
  // Hacemos la búsqueda de clientes
  console.log("Encontrando clientes...");
  // obtenemos el token
  const token = sessionStorage.getItem("sessionToken");
  if (!token) return;

  const res = await axios.post(
    `${baseUrl}/clients`,
    { action: "get" },
    { headers: {
        Authorization: `Bearer ${token}`
    } }
  );

  clientes.value = res.data
});
</script>
