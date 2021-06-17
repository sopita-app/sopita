import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { TasksService } from '../tasks.service';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
	@Input() task: any;
	@Output() evento: any = new EventEmitter();

	constructor(private taskService: TasksService) {}

	ngOnInit(): void {}

	removeTask() {
		this.taskService
			.deleteTask('60cbbbc09ed06c0015de6d53')
			.subscribe((data: any) => {
				this.task.filter(
					(tarea: any) => tarea._id !== data.response._id
				);
			});
	}
}
