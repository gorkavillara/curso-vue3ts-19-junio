<template>
    <form>
        <label for="input-con-cebolla">
            <input type="radio" id="input-con-cebolla" value="con-cebolla" v-model="opcion" />
            Con Cebolla
        </label>
        <label for="input-sin-cebolla">
            <input type="radio" id="input-sin-cebolla" value="sin-cebolla" v-model="opcion" />
            Sin Cebolla
        </label>
        <label for="input-no-me-gusta">
            <input type="radio" id="input-no-me-gusta" value="no-me-gusta" v-model="opcion" />
            No me gusta
        </label>
    </form>
    <p>{{ opcion }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue"

const opcion = ref("con-cebolla")
</script>