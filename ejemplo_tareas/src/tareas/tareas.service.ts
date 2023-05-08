import { Injectable } from '@nestjs/common';
import { Tareas } from './entity/tareas.interface';

@Injectable()
export class TareasService {
  tareasDatabase: Tareas[] = [
    {
      id_tarea: 1,
      nombre_tarea: 'Cocinar',
      tiempo_estimado: '30 minutos',
      done: true,
    },
    {
      id_tarea: 2,
      nombre_tarea: 'Lavar',
      tiempo_estimado: '15 minutos',
      done: false,
    },
    {
      id_tarea: 3,
      nombre_tarea: 'Guardar', //Saltar
      tiempo_estimado: '5 minutos', //60 minutos
      done: false, //true
    },
  ];
  public obtenerTareas() {
    return this.tareasDatabase;
  }
  public obtenerUnaTarea(id_tarea) {
    // console.log('este es el id >>', id_tarea);
    console.log(this.tareasDatabase[id_tarea - 1]);
    return this.tareasDatabase[id_tarea - 1];
  }
  public editarTarea(id_tarea, informacionEditar) {
    // return 'Editando tarea';
    this.tareasDatabase[2].nombre_tarea = 'Saltar';
  }
  public eliminarTarea(id_tarea) {
    this.tareasDatabase.splice(id_tarea - 1, 1);
    return this.obtenerTareas();
  }
  public nuevaTarea(nuevaTarea) {
    console.log('informacion del cliente>>>', nuevaTarea);
    this.tareasDatabase.push(nuevaTarea);
    return this.obtenerTareas();
  }
}
