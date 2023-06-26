import { createApp } from "vue"
import Main from "./Main.vue"
import "./style.css"
import MiPlugin from "./plugins/miPlugin"

const app = createApp(Main)
// const app2 = createApp(Dashboard)
// app2.mount("div#app2")

app.use(MiPlugin)

app.provide("appName", "Curso Vue3TS 19 junio")

const vueInstance = app.mount("div#app")

// vueInstance.

// app.provide("appName", "Curso Vue3TS 19 junio")