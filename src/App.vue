<template>
  <div class="navbar">
    <router-link :to="{ path: '/' }">Home</router-link>
    <router-link :to="{ path: '/clientes' }" v-if="isLoggedIn">Clientes</router-link>
    <button v-if="isLoggedIn" @click="logOut">Logout</button>
    <router-link :to="{ path: '/login' }" v-if="!isLoggedIn">Login</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref, provide } from "vue"

const isLoggedIn = ref(false)
const logIn = () => {
  isLoggedIn.value = true
}
const logOut = () => {
  sessionStorage.removeItem("sessionToken")
  isLoggedIn.value = false
}

provide("isLoggedIn", isLoggedIn)
provide("logIn", logIn)
</script>

<style scoped>
  .navbar {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
</style>
