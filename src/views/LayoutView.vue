<template>
  <div class="view">
    <div class="navbar">
      <div class="container">
        <a class="navbar-brand">
          <span style="color: rgb(45, 173, 45)">Vue</span>nas tardes
        </a>
        <span>{{ titulo }}</span>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/students" class="nav-link">Students</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/game" class="nav-link">Game</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
const titulo = import.meta.env.VITE_APP_TITULO
</script>

<style scoped lang="scss">
.view {
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}

.navbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.nav-item {
  display: inline-block;
  margin-left: 10px;
}

.nav-link {
  color: #333;
  text-decoration: none;
}

.content {
  padding: 20px;
}

.card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  color: #333;
}
</style>
