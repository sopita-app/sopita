import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {path: '', children:[
      {path: 'login', component: SigninComponent},
      {path: 'register', component: SignupComponent },
      {path: '**', redirectTo: 'login' },
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
  export class AuthRoutingModule { }
  