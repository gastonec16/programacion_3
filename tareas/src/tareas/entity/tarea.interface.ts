export interface CrearTareaInterface {
    nombre: string
    tiempo?: string
}

export interface ModificarTareaInterface {
    nombre?: string
    tiempo?: string
    done?: boolean
}
