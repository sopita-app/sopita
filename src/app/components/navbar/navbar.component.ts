import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { FormComponent } from '../../tasks/form/form.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showNavBar:boolean=false
  constructor(private authService: AuthService, public dialog: MatDialog) {}

  openDialog() {
		this.dialog.open(FormComponent);
	}

  toggleNavBar(){
    this.showNavBar = !this.showNavBar
  }
  
  logOut(){
    this.showNavBar = !this.showNavBar
    this.authService.logOut()
  }
}
