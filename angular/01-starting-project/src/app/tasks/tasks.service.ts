import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angualar',
            summury: 'Learn all the basic and advanced feature of angular & how to apply them.',
            dueDate: '2025-12-31'
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summury: 'Build a first prototype of the online shop website.',
            dueDate: '2025-12-31'
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summury: 'Prepare and describe an issue template which will help with management.',
            dueDate: '2025-12-31'
        }
    ]

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }


    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        // push(tail) / unshift(head)
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summury: taskData.summary,
            dueDate: taskData.date
        })
        this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}