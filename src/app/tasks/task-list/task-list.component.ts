import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
	tasks: [] = [];
	newTask: any = {};

	constructor(private taskService: TasksService) {
		//creo que es asi, mañana sigo viendo y lo pruebo
		this.taskService.getTasks().subscribe((data: any) => {
			this.tasks = data.response;
		});
	}

	ngOnInit(): void {}
}
