import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { TasksService } from '../tasks.service';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
	tasks: any = [];

	constructor(
		private taskService: TasksService,
		private authService: AuthService
	) {
		//creo que es asi, mañana sigo viendo y lo pruebo
		this.taskService.getTasks().subscribe((data: any) => {
			this.tasks = data.response.filter(
				(tarea: any) =>
					tarea.userId.email === this.authService.loggedUser?.email
			);
		});
	}

	deleteTask(id: string) {
		this.taskService.deleteTask(id).subscribe((data) => {
			this.tasks = this.tasks.filter((tarea: any) => tarea._id !== id);
		});
	}
}
