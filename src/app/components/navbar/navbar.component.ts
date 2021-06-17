import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showNavBar:boolean=false
  constructor() { }

  toggleNavBar(){
    this.showNavBar = !this.showNavBar
  }

}
