import { createApp } from "vue"
import "./style.scss"
import MecGame from "./components/MecGame.vue"
import LayoutView from "./views/LayoutView.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  routes: [
    {
      path: "/",
      component: MecGame
    }
  ],
  history: createWebHistory()
})

const vueApp = createApp(LayoutView)

vueApp.use(router)

vueApp.mount("#app")
