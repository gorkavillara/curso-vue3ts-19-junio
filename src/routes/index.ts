import { RouteRecordRaw } from "vue-router"
import Main from "../Main.vue"
import MiContador from "../components/MiContador.vue"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/contador",
        component: MiContador
    }
]

export default routes