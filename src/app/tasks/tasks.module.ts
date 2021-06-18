import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksRoutingModule } from './task-routing.module';
import { FormsModule } from '@angular/forms';
import { TaskNewComponent } from './task-new/task-new.component';



@NgModule({
  declarations: [
    FormComponent,
    TaskComponent,
    TaskListComponent,
    TaskNewComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule
  ],
  exports: [
    FormComponent,
    TaskComponent,
    TaskListComponent,
    TaskNewComponent
  ]
})
export class TasksModule { }
