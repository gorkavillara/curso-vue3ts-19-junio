<template>
  <h1>Mi contador</h1>
  <p>Valor del contador: {{ estado.contador }}</p>
  <button v-on:click="incrementa">Incrementa</button>
  <button v-on:click="guardarDatos">Guardar datos</button>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

type EstadoContador = {
    contador: number,
    nombre: string
}

const estado = reactive<EstadoContador>({
    contador: 15,
    nombre: "Lucas"
})

const i = ref<number>(15)
console.log(i)

const incrementa = () => {
  i.value++
  console.log(i.value)
  estado.contador++
}

const guardarDatos = () => {
  localStorage.setItem("valor-vue", i.value.toString())
  alert(
    `Datos guardados con éxito! ${
      localStorage.getItem("valor-vue")
        ? localStorage.getItem("valor-vue")
        : "No se ha guardado nada"
    }`
  )
}
</script>
