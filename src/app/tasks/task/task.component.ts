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

	constructor() {}

	ngOnInit(): void {}

	removeTask(id: string) {
		this.evento.emit(id);
	}
}
