import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TareasModule } from './tareas/tareas.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [
        // npm install --save @nestjs/typeorm typeorm mysql2
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'tareas',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true
        }),
        TareasModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
