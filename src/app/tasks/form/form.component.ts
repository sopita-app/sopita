import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})

export class FormComponent{
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
		
		// this.authService.loggedUser._id
		this.taskService.postTask({task: this.formData, userId: '60c61015724b960015415b47'}).subscribe((res: any) => {
			console.log(res)
			if(res.success){
				this.router.navigate(['./home']);
			}
		}) 
	}
}
