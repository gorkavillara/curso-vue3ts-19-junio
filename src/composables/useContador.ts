import { ref } from "vue"

export default function useContador() {
    const contador = ref(0)

    const incrementaContador = () => {
        contador.value++
    }

    const decrementaContador = () => {
        contador.value--
    }

    return {
        contador,
        incrementaContador,
        decrementaContador
    }
}