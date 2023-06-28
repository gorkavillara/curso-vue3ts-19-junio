import { createApp } from "vue"
import App from "./App.vue"
import "./index.css"
import MiPlugin from "./plugins/miPlugin"
import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes"

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