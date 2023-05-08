import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get()
    getTasks(): Task[] {
        return this.taskService.getTasks();
    }

    @Get(':taskId')
    getTask(@Param('taskId') taskId: string) {
        return this.taskService.getTask(parseInt(taskId));
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        console.log(task.done);
        return 'Creating a task';
    }

    @Put(':id')
    updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
        console.log(task);
        console.log(id);
        return 'Updating a task';
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        return `Deleting task ${id}`;
    }
}
