import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { FormComponent } from './form/form.component';

const routes:Routes =[
    {path:'', component: TaskListComponent,
    children:[
      {path: 'home', component: TaskListComponent},
      {path: 'newTaks', component: FormComponent},
      {path: '**', redirectTo: 'home'},
    ]}
  ]
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports:[
      RouterModule
    ]
  })
  export class TasksRoutingModule { }
  