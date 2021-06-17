import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})

//interfaz de datos de la task
export class FormComponent implements OnInit {
	formData: any = {}; //definir interfaz de datos de task

	constructor(private taskService: TasksService) {}

	addTask(tarea: any) {
		//usamos esta funcion para recibir los datos del formulario y accionar la creacion de la tarea al backend

		this.formData = tarea; //seteamos la variable con los datos

		this.taskService.postTask(this.formData); // ejecutamos la creacion de la tarea con los datos en la variable
	}

	ngOnInit(): void {}
}
