<template>
  <h2>Mi input</h2>
  <input type="text" :value="valor" @input="cambiaValor" />
</template>

<script setup lang="ts">
defineProps<{
  valor: string;
}>();
// const emit = defineEmits(["miEvento"])
const emit = defineEmits<{
    (e: "miEvento", evento: InputEvent): void
}>()

const cambiaValor = (evento: Event) => {
    emit("miEvento", evento as InputEvent)
}
</script>
