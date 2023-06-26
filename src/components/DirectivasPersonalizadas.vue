<template>
    <h3>Este es el componente de las directivas personalizadas</h3>
    <input type="text" v-focus />
    <br />
    <button v-confirm >Acción insegura</button>
</template>

<script setup lang="ts">
const vFocus = {
    mounted(elemento: HTMLInputElement) {
        elemento.focus()
    }
}

const vConfirm = {
    mounted(elemento: HTMLElement) {
        elemento.addEventListener("click", (e: MouseEvent) => {
            if (!confirm("⚠️ ¿Estás segur@?")) {
                e.preventDefault()
            }
            return handleClick()
        })
    },
    unmounted(elemento: HTMLElement) {
        elemento.removeEventListener("click", () => null)
    }
}

const handleClick = () => {
    console.log("Has realizado la acción insegura")
}
</script>