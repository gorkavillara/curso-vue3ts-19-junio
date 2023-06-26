import { createApp } from "vue"
import { defineRule } from "vee-validate"
import Main from "./Main.vue"
import "./style.css"

defineRule("empiezaPorA", (value: string) => {
  if (value.charAt(0) === "a") return true
  return "El campo username debe empezar por a"
})

const app = createApp(Main)
// const app2 = createApp(Dashboard)
// app2.mount("div#app2")

app.provide("appName", "Curso Vue3TS 19 junio")

const vueInstance = app.mount("div#app")

// vueInstance.

// app.provide("appName", "Curso Vue3TS 19 junio")