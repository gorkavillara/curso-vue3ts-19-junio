import { createApp } from "vue"
import Main from "./Main.vue"
import "./style.css"

const app = createApp(Main)

app.provide("appName", "Curso Vue3TS 19 junio")

app.mount("div#app")

// app.provide("appName", "Curso Vue3TS 19 junio")