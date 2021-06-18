import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})

export class TasksService {
	constructor(private http: HttpClient) {}

	getTasks() {
		return this.http.get(
			'https://organizateunpoco.herokuapp.com/api/tasks'
		);
	}

	postTask(task: any) {
		const userId = task.userId;
		delete task.userId;
		return this.http.post(
			`https://organizateunpoco.herokuapp.com/api/tasks/?userId=${userId}`,
			task
		);
	}

	deleteTask(id: string) {
		return this.http.get(
			'https://organizateunpoco.herokuapp.com/api/tasks' + id
		);
	}
}
