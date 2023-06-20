import { ref } from "vue";

export default function useContador(valorInicial: number = 0) {
  const contador = ref(valorInicial);

  const incrementaContador = (suma: number = 1) => (contador.value += suma);

  const decrementaContador = (resta: number = 1) => (contador.value -= resta);

  return { contador, incrementaContador, decrementaContador };
}
