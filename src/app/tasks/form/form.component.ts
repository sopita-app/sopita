import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})

//interfaz de datos de la task
export class FormComponent implements OnInit {
	formData: any = {
		title: '',
		description: '',
		date: '',
		time: ''
	}; //definir interfaz de datos de task

	constructor(private taskService: TasksService, private authService: AuthService, private router: Router) {}

	addTask() {
		//usamos esta funcion para recibir los datos del formulario y accionar la creacion de la tarea al backend
		// ejecutamos la creacion de la tarea con los datos en la variable
		this.taskService.postTask({task: this.formData, userId: this.authService.loggedUser._id}).subscribe((res: any) => {
			if(res.success){
				this.router.navigate(['./home'])}
		}) 
	}

	ngOnInit(): void {}
}
