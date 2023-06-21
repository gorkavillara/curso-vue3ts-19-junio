<template>
  <AboutUsView v-if="pagina === 'AboutUs'" />
  <ContactView v-if="pagina === 'Contact'" />
  <HomeView v-if="pagina === 'Home'" />
  <MathView v-if="pagina === 'Math'" />
  <SeriesView v-if="pagina === 'Series'" />
  <div>
    <button @click="redirige('Home')" id="Home">Home</button>
    <button @click="redirige('Contact')" id="Contact">Contact</button>
    <button @click="redirige('AboutUs')" id="AboutUs">AboutUs</button>
    <button @click="redirige('Math')" id="Math">Math</button>
    <button @click="redirige('Series')" id="Series">Series</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Routes } from "./models";
import {
  AboutUsView,
  ContactView,
  HomeView,
  MathView,
  SeriesView,
} from "./views";

const pagina = ref<Routes>("Home");

const redirige = (ruta: Routes) => {
  pagina.value = ruta;
  // console.log(evento)
  // pagina.value = evento.target.id
};
</script>

<style scoped></style>
