import { App } from "vue"

const MiPlugin = {

    saludo() {
        console.log("Hola desde el plugin")
    },

    focus: {
        mounted(el: HTMLElement) {
            el.focus()
        }
    },

    install(app: App) {
        app.config.globalProperties.$saludo = MiPlugin.saludo
        
        app.directive("focus", MiPlugin.focus)
    }
}

export default MiPlugin