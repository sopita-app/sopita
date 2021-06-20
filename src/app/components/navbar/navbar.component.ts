import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { FormComponent } from '../../tasks/form/form.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showNavBar:boolean=false

  loggedUser:any;
  isLogged:Observable<boolean>;


  constructor(private authService: AuthService, public dialog: MatDialog) {
  }
  
  ngOnInit(){
     this.isLogged = this.authService.checkLoginStatus();
  }
  
  openDialog() {
		this.dialog.open(FormComponent, {width: '600px',});
	}
  
  toggleNavBar(){
    this.showNavBar = !this.showNavBar;
  }
  
  logOut(){
    this.showNavBar = !this.showNavBar;
    this.authService.logOut();
  }
}
