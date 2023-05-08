import { Module } from '@nestjs/common'
import { TareasController } from './tareas.controller'
import { TareasService } from './tareas.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Tarea } from './entity/tarea.entity'

@Module({
    // importar entidad tarea (base de datos)
    imports: [TypeOrmModule.forFeature([Tarea])],
    controllers: [TareasController],
    providers: [TareasService]
})
export class TareasModule {}
