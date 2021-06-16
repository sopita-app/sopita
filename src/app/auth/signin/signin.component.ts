import { Component } from '@angular/core';
import {AuthService} from '../auth.service'
import {NgModel} from '@angular/forms'

interface User {
  email:string,
  password:string,
}
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})


export class SigninComponent{

  constructor(private authService: AuthService) { }


  user:User={
    email: '',
    password: ''
  }

  signIn(){
    this.authService.signIn(this.user)
    }
  



}
