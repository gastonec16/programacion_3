import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
    tasks = [
        {
            id: 1,
            title: 'Testing',
            description: 'Testing description',
            done: true
        },
        {
            id: 2,
            title: 'Testing 2',
            description: 'Testing description 2',
            done: false
        },
        {
            id: 3,
            title: 'Testing 3',
            description: 'Testing description 3',
            done: true
        }
    ];

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(id: number): Task {
        return this.tasks.find((task) => task.id === id);
    }
}
