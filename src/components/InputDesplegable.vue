<template>
    <select name="pais" v-model="pais">
        <option value="Francia">Francia</option>
        <option value="España">España</option>
        <option value="Bélgica">Bélgica</option>
        <option value="Holanda">Holanda</option>
    </select>
    <p>{{ pais }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue"

const pais = ref("España")
</script>