import { createApp } from "vue"
import App from "./App.vue"
import "./style.css"
import MiPlugin from "./plugins/miPlugin"
import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes"

const app = createApp(App)
// const app2 = createApp(Dashboard)
// app2.mount("div#app2")

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