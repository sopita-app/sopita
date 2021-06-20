import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksRoutingModule } from './task-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {FulfillingBouncingCircleSpinnerModule} from 'angular-epic-spinners'

@NgModule({
  declarations: [
    FormComponent,
    TaskComponent,
    TaskListComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    FulfillingBouncingCircleSpinnerModule
  ],
  exports: [
    FormComponent,
    TaskComponent,
    TaskListComponent,
  ],
})
export class TasksModule { }
