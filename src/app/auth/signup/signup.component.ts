import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SignUpUser } from '../../interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {

  constructor(private authService: AuthService, private _snackBar: MatSnackBar) { }

  user: SignUpUser = {
    name: '',
    lastname: '',
    email: '',
    password: '',
  }

  signUp(){
    this.authService.signUp(this.user);
    this._snackBar.open('Cuenta creada, inicie sesión', 'Ok', {duration: 1500});
  }
}
