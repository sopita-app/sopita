import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showNavBar:boolean=false
  constructor(private authService : AuthService) { }

  toggleNavBar(){
    this.showNavBar = !this.showNavBar
  }
  logOut(){
    this.authService.logOut()
  }
}
