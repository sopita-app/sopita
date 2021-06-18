import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksRoutingModule } from './task-routing.module';
import { TaskNewComponent } from './task-new/task-new.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


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
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    FormComponent,
    TaskComponent,
    TaskListComponent,
    TaskNewComponent
  ],
})
export class TasksModule { }
