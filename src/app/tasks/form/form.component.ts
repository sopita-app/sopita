import { Component} from '@angular/core';
import { NewTask } from 'src/app/interfaces/task.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { TasksService } from '../tasks.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent  {
	formData: any = {
		title: '',
		description: '',
		date: '',
		time: '',
	}; //definir interfaz de datos de task

	constructor(
		private taskService: TasksService,
		private authService: AuthService,
		private _snackBar: MatSnackBar
	) {}

	addTask() {
		//usamos esta funcion para recibir los datos del formulario y accionar la creacion de la tarea al backend
		// ejecutamos la creacion de la tarea con los datos en la variable
		
		this.taskService.postTask({task: this.formData, userId: this.authService.loggedUser._id}).subscribe((res: any) => {
			if(res.success){
				this._snackBar.open('Tarea agregada con éxito', 'Ok', {duration: 1500});
				this.taskService.tasks.push(res.response)
			}
		})
	}
}
