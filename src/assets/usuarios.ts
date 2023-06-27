interface Usuario {
    id: number
    nombre: string
    email: string
}

const usuarios: Usuario[] = [
    {
        id: 1,
        nombre: "Uno",
        email: "uno@uno.com"
    },
    {
        id: 2,
        nombre: "Dos",
        email: "dos@dos.com"
    },
    {
        id: 3,
        nombre: "Tres",
        email: "tres@tres.com"
    }
]

export default usuarios