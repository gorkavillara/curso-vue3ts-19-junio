<template>
  <textarea placeholder="añade varias líneas de texto" v-model="texto" />
  <p style="white-space: pre-line;">{{ texto }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const texto = ref(`Buen finde`);
</script>
