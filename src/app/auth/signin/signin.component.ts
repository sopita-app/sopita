import { Component } from '@angular/core';
import {AuthService} from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private authService: AuthService, private _snackBar: MatSnackBar) { }

  user: User = {
    email: 'test@gmail.com',
    password: '123456',
  }

  signIn(){
    this.authService.signIn(this.user)
  }
}
