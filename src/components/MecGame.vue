<template>
    <div>
        <h2>Mec game</h2>
        <div>{{ selectedPhrase }}</div>
        <div><input type="text" /></div>
        <div>// Sección de ranking</div>
    </div>
</template>

<script setup lang="ts">
import { phrases } from "../assets"
import { ref } from "vue"

const selectedPhrase = ref(phrases[0])
</script>
