import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common'
import { CrearTareaInterface, ModificarTareaInterface } from './entity/tarea.interface'
import { TareasService } from './tareas.service'

@Controller('tareas')
export class TareasController {
    constructor(private tareasService: TareasService) {}

    @Post()
    crearTarea(@Body() nuevaTarea: CrearTareaInterface) {
        return this.tareasService.crearTarea(nuevaTarea)
    }

    @Get(':idTarea')
    obtenerTarea(@Param('idTarea', ParseIntPipe) idTarea: number) {
        return this.tareasService.obtenerTarea(idTarea)
    }

    @Get()
    obtenerTareas() {
        return this.tareasService.obtenerTareas()
    }

    @Patch(':idTarea')
    modificarTarea(@Param('idTarea', ParseIntPipe) idTarea: number, @Body() tarea: ModificarTareaInterface) {
        return this.tareasService.modificarTarea(idTarea, tarea)
    }

    @Delete(':idTarea')
    eliminarTarea(@Param('idTarea', ParseIntPipe) idTarea: number) {
        return this.tareasService.eliminarTarea(idTarea)
    }
}
