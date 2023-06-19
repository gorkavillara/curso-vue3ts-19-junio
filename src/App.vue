<template>
  <h1 class="saludo">{{ mensaje }}</h1>
  <button @click="handleClick">Click me</button>
  <button v-on:click="handleClick">Otro botón</button>
</template>

<script setup lang="ts">
// Composition API
const mensaje = "Hola desde Composition API"
const handleClick = () => {
  console.log("clic desde handleClick")
}
// export default {
  // setup() {
    // definir variables, constantes, etc
    // definir funciones...
    // definir funciones de gestión del ciclo de vida...
  // }
// }

// Options API
// export default {
//   data() {
//     return {
//       mensaje: "Hola desde Options API"
//     }
//   },
//   methods: {
//     handleClick: () => {
//       console.log("He hecho click")
//       console.log(this.mensaje)
//     }
//   }
// }
</script>

<style scoped>
.saludo {
  color: blue;
}
</style>
