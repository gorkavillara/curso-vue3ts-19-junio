<template>
  <h1>App</h1>
  <span>{{ contador }}</span>
  <button @click="contador++">Suma</button>
  <div>
    <p>Navegación con router</p>
    <router-link to="/" active-class="link-activo">Main</router-link>
    <router-link to="/contador" active-class="link-activo">Contador</router-link>
  </div>
  <div>
    <p>Navegación sin router</p>
    <a href="/">Main</a>
    <a href="/contador">Contador</a>
  </div>
  <div>
    <p>Navegación imperativa</p>
    <button @click="navegaImperativo('/')">Main</button>
    <button @click="navegaImperativo('/contador')">Contador</button>
  </div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const contador = ref(0);
const router = useRouter()

const navegaImperativo = (path: string) => {
    // Dirigirnos a la home
    router.push({ path })
}
</script>
<style scoped>
.link-activo {
    text-transform: uppercase;
    text-shadow: 0 0 2rem rgb(136, 255, 125);
}
</style>
