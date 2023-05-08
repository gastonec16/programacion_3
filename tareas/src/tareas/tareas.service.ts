import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Tarea } from './entity/tarea.entity'
import { Repository } from 'typeorm'
import { CrearTareaInterface, ModificarTareaInterface } from './entity/tarea.interface'

@Injectable()
export class TareasService {
    constructor(@InjectRepository(Tarea) private tareaRepository: Repository<Tarea>) {}

    crearTarea(tarea: CrearTareaInterface) {
        const nuevaTarea = this.tareaRepository.create(tarea)
        return this.tareaRepository.save(nuevaTarea)
    }

    async obtenerTarea(idTarea: number) {
        const tareaEncontrada = await this.tareaRepository.findOne({ where: { idTarea } })
        if (!tareaEncontrada) {
            return new HttpException('No se encontró la tarea', HttpStatus.NOT_FOUND)
        }

        return tareaEncontrada
    }

    async obtenerTareas() {
        return this.tareaRepository.find()
    }

    async modificarTarea(idTarea: number, tarea: ModificarTareaInterface) {
        const tareaEncontrada = await this.tareaRepository.findOne({ where: { idTarea } })
        if (!tareaEncontrada) {
            return new HttpException('No existe la tarea', HttpStatus.NOT_FOUND)
        }

        const tareaModificada = Object.assign(tareaEncontrada, tarea)
        return this.tareaRepository.save(tareaModificada)
    }

    async eliminarTarea(idTarea: number) {
        console.log(idTarea)
        const tareaEliminada = await this.tareaRepository.delete({ idTarea })

        if (tareaEliminada.affected === 0) {
            return new HttpException('No se encontró la tarea', HttpStatus.NOT_FOUND)
        }

        return tareaEliminada
    }
}
