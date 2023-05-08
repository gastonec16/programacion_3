import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TareasService } from './tareas.service';
import { Tareas } from './entity/tareas.interface';

@Controller('tareas')
export class TareasController {
  constructor(private tareasService: TareasService) {}
  @Get('/obtenerTareas')
  obtenerTareas(): Tareas[] {
    return this.tareasService.obtenerTareas();
  }
  @Get('/obtenerTarea/:id')
  obtenerTarea(@Param('id') id_tarea) {
    return this.tareasService.obtenerUnaTarea(id_tarea);
  }
  @Put('/editarTarea/:id')
  editarTarea(@Param('id') id, @Body() body) {
    return this.tareasService.editarTarea(id, body);
  }
  @Delete('/eliminarTarea/:id')
  eliminarTarea(@Param('id') id_tarea) {
    return this.tareasService.eliminarTarea(id_tarea);
  }
  @Post('/nuevaTarea')
  nuevaTarea(@Body() nuevaTarea) {
    return this.tareasService.nuevaTarea(nuevaTarea);
  }
}
