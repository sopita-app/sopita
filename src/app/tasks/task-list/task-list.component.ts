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
	loading:boolean=false
	constructor(
		private taskService: TasksService,
		private authService: AuthService
	) {
		//creo que es asi, mañana sigo viendo y lo pruebo
		this.authService.loginStatus.subscribe(res =>{
			this.loading = true
			if(res){
				this.taskService.getTasks().subscribe((data: any) => {
					this.taskService.tasks = data.response.filter(
						(tarea: any) =>
							tarea.userId.email === this.authService.loggedUser?.email
					);
					this.loading = false
					this.tasks = this.taskService.tasks	
				});

			}
		})

	}

	deleteTask(id: string) {
		this.taskService.deleteTask(id).subscribe((data) => {
			this.taskService.tasks = this.taskService.tasks.filter((tarea: any) => tarea._id !== id);
			this.tasks = this.taskService.tasks
		});
	}
	taskToDone(id){
		this.taskService.taskstatus(id)
		.subscribe((data:any) =>{
		  console.log(data)
		  this.taskService.tasks = this.tasks.map(task => task._id === id ? data.response : task)
		  this.tasks = this.taskService.tasks
		})
	  }
  
}
