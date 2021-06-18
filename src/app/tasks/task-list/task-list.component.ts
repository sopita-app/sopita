import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
	tasks: any = [];

	constructor(private taskService: TasksService) {
		//creo que es asi, mañana sigo viendo y lo pruebo
		this.taskService.getTasks().subscribe((data: any) => {
			console.log(data.response);
			this.tasks = data.response;
		});
	}

	deleteTask(id: string) {
		this.taskService.deleteTask(id).subscribe((data) => {
			this.tasks = this.tasks.filter((tarea: any) => tarea._id !== id);
		});
	}
}
