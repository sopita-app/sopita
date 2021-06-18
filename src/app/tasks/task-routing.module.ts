import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';

const routes:Routes =[
    {path:'',  children:[
      {path: 'home', component: TaskListComponent, pathMatch:'full'},
      {path: '**', redirectTo: 'home'},
    ]}
  ]
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports:[
      RouterModule
    ]
  })
  export class TasksRoutingModule { }
  