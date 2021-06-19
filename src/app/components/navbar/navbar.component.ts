import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  isLogged:boolean;


  constructor(private authService: AuthService, public dialog: MatDialog) {
  }
  
  ngOnInit(){
    this.authService.loginStatus.subscribe(res=>{
      this.isLogged = res
    })
  }
  
  openDialog() {
		this.dialog.open(FormComponent);
	}
  
  toggleNavBar(){
    this.showNavBar = !this.showNavBar
  }
  
  logOut(){
    this.authService.loginStatus.next(false)
    this.showNavBar = !this.showNavBar
   this.authService.logOut()
  }
}
