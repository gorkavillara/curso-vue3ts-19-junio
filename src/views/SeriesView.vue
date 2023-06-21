<template>
  <h1>Series</h1>
  <div
    v-for="(serie, index) in series"
    :class="`serie ${index % 2 ? 'odd' : 'even'}`"
    @click="cambiaEstado(index)"
  >
    <span style="text-align: left; flex-grow: 1">{{ serie.titulo }}</span>
    <span>{{ serie.sugiriente }}</span>
    <span>{{ serie.año }}</span>
    <span><input type="checkbox" :checked="serie.vista" /></span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Serie } from "../models";
// const contador = ref<number>(0)
// const series: Serie[] = [
const series = ref<Serie[]>([
  {
    titulo: "Tú también lo harías",
    año: 2023,
    sugiriente: "Gorka",
  },
  {
    titulo: "Black Mirror",
    año: 2023,
    sugiriente: "Sandra",
  },
  {
    titulo: "The Mandalorian",
    año: 2023,
    sugiriente: "Antonio",
  },
  {
    titulo: "Death Note",
    año: 2001,
    sugiriente: "Aitor",
  },
  {
    titulo: "Paquita Salas",
    año: 2019,
    sugiriente: "Los Javis",
  },
  {
    titulo: "From",
    año: 2022,
    sugiriente: "Angel",
  },
]);
const cambiaEstado = (index: number) => {
    series.value = series.value.map((serie, id) => {
        if (id !== index) return serie
        return { ...serie, vista: serie.vista ? false : true }
    })
}
</script>

<style scoped>
.serie {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  gap: 1rem;
  transition: all 0.3s;
}
.serie:hover, .serie.even:hover {
    background-color: rgba(200, 200, 200, 0.5);
}
.serie.even {
  background-color: rgba(150, 150, 150, 0.3);
}
</style>
