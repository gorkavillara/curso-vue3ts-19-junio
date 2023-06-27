<template>
    <div v-if="usuario !== null">
        <h4>Detalles de usuario</h4>
        <p><strong>Nombre:</strong> {{ usuario?.nombre }}</p>
        <p><strong>Email:</strong> {{ usuario?.email }}</p>
    </div>
</template>

<script setup lang="ts">
// import { ref, computed } from "vue"
import { useRoute } from "vue-router"
import usuarios from "../assets/usuarios"

// const usuario = null

const route = useRoute()

const { id } = route.params

const usuario = usuarios.find(u => u.id.toString() === id)

const { nuevonombre } = route.query

console.log(nuevonombre)

// console.log({ usuario })

// const usuario = computed(() => {
//     usuarios.find(u => u.id.toString() === id)
// })

</script>