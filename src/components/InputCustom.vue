<template>
    <h3>Mi input</h3>
    <input type="text" :value="modelValue" @input="handleChange" />
    <span>{{ modelValue }}</span>
</template>

<script setup lang="ts">
defineProps(["modelValue"])

const emit = defineEmits(["update:modelValue"])

const handleChange = (event: Event) => {
    emit("update:modelValue", (event.target as HTMLInputElement).value)
}
</script>