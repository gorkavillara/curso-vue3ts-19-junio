export type Routes = "Home" | "Contact" | "AboutUs" | "Math" | "Series"

export interface Serie {
    titulo: string
    año: number
    sugiriente: string
    vista?: boolean
}