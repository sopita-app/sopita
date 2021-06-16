import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    FormComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    FormComponent,
    TaskComponent,
    TaskListComponent
  ]
})
export class TasksModule { }
