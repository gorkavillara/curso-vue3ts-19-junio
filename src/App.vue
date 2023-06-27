<template>
  <nav class="navbar">
    <router-link to="/" active-class="link-activo">Main</router-link>
    <!-- <router-link :to="{ path: '/contador' }"  active-class="link-activo">Contador</router-link> -->
    <router-link :to="{ name: 'RutaContador' }" active-class="link-activo"
      >Contador</router-link
    >
    <router-link to="/usuarios" active-class="link-activo"
      >Usuarios</router-link
    >
    <router-link to="/articulo" active-class="link-activo"
      >Artículo</router-link
    >
    <router-link :to="{ path: '/articulo', hash: '#segundaparte' }"
      >Segundo</router-link
    >
    <router-link :to="{ path: '/prohibido' }"
      >LO PROHIBIDO</router-link
    >
  </nav>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.link-activo {
  text-transform: uppercase;
  text-shadow: 0 0 2rem rgb(136, 255, 125);
}

.navbar {
  width: 100%;
  background-color: rgba(140, 140, 140, 0.5);
  padding: 1rem;
  display: flex;
  gap: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
