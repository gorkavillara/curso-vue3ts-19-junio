<template>
  <button :class="active ? 'active' : 'inactive'" @click="handleClick">
    {{ active ? "On" : "Off" }}
  </button>
</template>

<script setup lang="ts">
const { toggle } = defineProps<{
    active: boolean
    toggle: () => void
}>();

const handleClick = () => {
    console.log("He hecho click")
    toggle()
}
</script>

<style scoped>
button {
  transition: all 0.3s;
  outline: none;
}
.active {
  background-color: rgb(101, 199, 101);
  box-shadow: 0 0 5rem rgba(101, 199, 101, 0.7);
}
.inactive {
  background-color: rgb(199, 101, 101);
  box-shadow: 0 0 5rem rgba(199, 101, 101, 0.7);
}
</style>
