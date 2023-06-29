import { createApp } from "vue"
import "./style.scss"
import { createPinia } from "pinia"
import MecGame from "./components/MecGame.vue"
import LayoutView from "./views/LayoutView.vue"
import StudentsView from "./views/StudentsView.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  routes: [
    {
      path: "/",
      component: MecGame
    },
    {
      path: "/students",
      component: StudentsView
    }
  ],
  history: createWebHistory()
})

const pinia = createPinia()

const vueApp = createApp(LayoutView)

vueApp.use(pinia)

vueApp.use(router)

vueApp.mount("#app")
