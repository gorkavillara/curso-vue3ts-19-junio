<template>
  <div @keydown="escribeLetra">
    <h2>Mec game</h2>
    <div>{{ selectedPhrase }}</div>
    <div>
      {{ enteredPhrase }}
    </div>
    <div v-show="true">
      <input type="text" value="" @keydown="escribeLetra" v-focus />
    </div>
    <button @click="resetEverything">Reset</button>
  </div>
</template>

<script setup lang="ts">
import { phrases } from "../assets"
import { ref, watch } from "vue"

const initialTime = ref<Date | null>(null)

const selectedPhrase = ref(phrases[1])
const enteredPhrase = ref("")

const vFocus = {
  mounted (el: HTMLElement) {
    el.focus()
  }
}

const resetEverything = () => {
  initialTime.value = null
  enteredPhrase.value = ""
  const num = Math.floor(Math.random() * 6)
  const newPhrase = phrases[num]
  selectedPhrase.value = newPhrase
}

const escribeLetra = (e: Event) => {
  const ev = e as KeyboardEvent
  const nextCharacter = ev.key
  const position = enteredPhrase.value.length
  const nextCorrectCharacter = selectedPhrase.value.charAt(position)

  if (nextCharacter === nextCorrectCharacter) {
    enteredPhrase.value = `${enteredPhrase.value}${nextCharacter}`
  }
}

watch(enteredPhrase, (nextValue, prevValue) => {
  if (enteredPhrase.value === selectedPhrase.value) {
    const elapsedTime = new Date().getTime() - initialTime.value!.getTime()
    alert(`Bien hecho! Has tardado ${elapsedTime / 1000} segundos`)
  }

  // Chequemos si empezamos a escribir correctamente
  if (prevValue === "" && prevValue !== nextValue) {
    initialTime.value = new Date()
  }
})
</script>
