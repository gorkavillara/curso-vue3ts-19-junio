<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="hazLogin">
      <input
        type="email"
        placeholder="Tu email"
        v-model="formData.email"
        :disabled="loader.loading"
      />
      <input
        type="password"
        placeholder="Tu password"
        v-model="formData.password"
        :disabled="loader.loading"
      />
      <button :disabled="loader.loading">Haz login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { reactive, inject } from "vue";
import { useRouter } from "vue-router";
import useLoader from "../composables/useLoader";

const logIn = inject("logIn") as Function

const { loader, setLoading, stopLoading } = useLoader({
  color: "red",
  initiallyLoading: false,
});

const formData = reactive({
  email: "",
  password: "",
});

const router = useRouter();

const baseUrl = "https://07cc-46-25-71-106.ngrok-free.app";
const hazLogin = async () => {
  setLoading();
  // Vamos a hacer login
  console.log("Haciendo login...");
  try {
    const res = await axios.post(`${baseUrl}/auth`, {
      email: formData.email,
      password: formData.password,
    });
    console.log(res.data);
    if (!res.data.token) throw new Error("Token not found");

    sessionStorage.setItem("sessionToken", res.data.token);
    logIn()
    stopLoading();
    router.push("/");
  } catch (error) {
    console.error(error);
    stopLoading();
  }
  // Vamos a setear un sessionStorage

  // Vamos a redireccionar
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input {
  padding: 0.5rem;
}
</style>
