import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
	@Input() eachTask: any;
	@Output() evento: any = new EventEmitter();
	@Output() update = new EventEmitter()

	constructor() {
		
	}

	ngOnInit(): void {}

	removeTask(id: string) {
		this.evento.emit(id);
	}
	taskstatus(id:string){
		this.update.emit(id)
	  }
}
