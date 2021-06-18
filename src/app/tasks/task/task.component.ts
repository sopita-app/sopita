import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
	@Input() task: any;
	@Output() evento: any = new EventEmitter();

	constructor() {
		console.log(this.task, 'soy la tarea unitaria');
	}

	ngOnInit(): void {}

	removeTask(id: string) {
		this.evento.emit(id);
	}
}
