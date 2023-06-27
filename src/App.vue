<template>
  <h1>PokeApi</h1>
  <h3>Introduce el id del pokemon que quieres buscar</h3>
  <input type="number" v-model="id" placeholder="Introduce el id" />
  <button @click="buscaPokemonAxios">Buscar Axios</button>
  <button @click="buscaPokemonFetch">Buscar Fetch</button>
  <div v-if="pokemon">
    <h3>{{ pokemon.id }}. {{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import axios from "axios";
import { pokeAxios } from "./assets/axiosInstances"

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

const id = ref("");
const pokemon = ref<Pokemon | null>(null);

const buscaPokemonFetch = async () => {
  // Hacer la llamada a la API

  // Utilizando FETCH
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.value}`)
    .catch((error) => console.error(error));
  
  if (!res) return

  const data = await res.json().catch((error) => console.error(error));
  console.log(data);
  pokemon.value = data;
};
const buscaPokemonAxios = async () => {
  // Hacer la llamada a la API

  // Utilizando AXIOS
  // const res = await axios
  //   .get(`https://pokeapi.co/api/v2/pokemon/${id.value}`, { 
  //     transformResponse(res) { // Interceptor de respuesta
  //       console.log(JSON.parse(res))
  //       return {
  //         ...JSON.parse(res),
  //         successful: true
  //       }
  //     },
  //     transformRequest(req) { // Interceptor de solicitud
  //       console.log(req)
  //       return req
  //     }
  //   })
  //   .catch((error) => console.error(error));

  const res = await pokeAxios.get(id.value.toString())

  if (!res) return

  console.log(res.data);
  pokemon.value = res.data;
};
</script>

<style scoped></style>
