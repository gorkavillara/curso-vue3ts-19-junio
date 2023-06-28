import { createApp } from "vue"
import App from "./App.vue"
import MiPlugin from "./plugins/miPlugin"
import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const app = createApp(App)

const router = createRouter({
    routes,
    history: createWebHistory()
})
app.use(router)

app.use(MiPlugin)

app.provide("appName", "Curso Vue3TS 19 junio")

app.mount("div#app")

// vueInstance.

// app.provide("appName", "Curso Vue3TS 19 junio")