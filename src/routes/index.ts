import { RouteRecordRaw } from "vue-router"
import Main from "../Main.vue"
// import MiContador from "../components/MiContador.vue"
// import MisUsuarios from "../components/MisUsuarios.vue"
// import DetallesUsuario from "../components/DetallesUsuario.vue"
import ArticuloLargo from "../components/ArticuloLargo.vue"
import ComponenteProhibido from "../components/ComponenteProhibido.vue"

const estaLogueado = () => Math.random() > 0.5

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/enlaceantiguo",
        redirect: "/"
    },
    {
        path: "/contador",
        component: () => import("../components/MiContador.vue"),
        name: "RutaContador"
    },
    {
        path: "/usuarios",
        // component: MisUsuarios,
        component: () => import("../components/MisUsuarios.vue"),
        // children: [{
        //     path: ":id",
        //     component: DetallesUsuario
        // }]
    },
    {
        path: "/usuarios/:id",
        component: () => import("../components/DetallesUsuario.vue")
    },
    {
        path: "/articulo",
        component: ArticuloLargo
    },
    {
        path: "/prohibido",
        component: ComponenteProhibido,
        meta: {
            estaLogueado: estaLogueado()
        },
        beforeEnter(to, from, next) {
            if (to.meta.estaLogueado as boolean) {
                console.log("Estás logueado, tienes permiso para ver LO PROHIBIDO", to.path)
                next()
                return
            }
            console.log("NO estás logueado, no tienes permiso para ver LO PROHIBIDO")
            next(from.path)
        },
        // beforeLeave() {

        // }
    }
]

export default routes