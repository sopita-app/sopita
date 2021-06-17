import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksRoutingModule } from './task-routing.module';



@NgModule({
  declarations: [
    FormComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  exports: [
    FormComponent,
    TaskComponent,
    TaskListComponent
  ]
})
export class TasksModule { }
