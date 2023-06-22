<template>
  <h2>Mi input</h2>
  <input type="text" :value="valor" @input="cambiaValor" />
</template>

<script setup lang="ts">
defineProps<{
  valor: string;
}>();
const emit = defineEmits(["cambiaValor"])

const cambiaValor = (evento: Event) => {
    emit("cambiaValor", evento)
}
</script>
