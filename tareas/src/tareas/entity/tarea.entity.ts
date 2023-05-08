import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Tarea {
    @PrimaryGeneratedColumn()
    idTarea: number

    @Column()
    nombre: string

    @Column({ nullable: true })
    tiempo: string

    @Column({ default: false })
    finalizado: boolean
}
