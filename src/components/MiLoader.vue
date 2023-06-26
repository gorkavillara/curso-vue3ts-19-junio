<template>
    <h2>Mi loader</h2>
    <span v-if="loader.loading">
        <span class="loader" :style="`border-left-color:${loader.color}`"></span>
    </span>
    <br />
    <br />
    <button @click="stopLoading">Stop</button>
    <button @click="setLoading">Start</button>
    <input v-focus type="text" />
</template>

<script setup lang="ts">
import useLoader from "../composables/useLoader"

const { loader, setLoading, stopLoading } = useLoader({
    initiallyLoading: true,
    color: "blue"
})
</script>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #FFF;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left: 4px solid #FF3D00;
  border-bottom: 4px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>