<template>
  <h3>Mi contador</h3>
  <button @click="decrementaContador">Menos</button>
  <span>{{ contador }}</span>
  <button @click="incrementaContador">Más</button>
  <button @click="dec2">Menos</button>
  <span>{{ cont2 }}</span>
  <button @click="inc2">Más</button>
</template>

<script setup lang="ts">
import useContador from "../composables/useContador";

const { contador, incrementaContador, decrementaContador } = useContador();
const {
  contador: cont2,
  incrementaContador: inc2,
  decrementaContador: dec2,
} = useContador();
</script>
