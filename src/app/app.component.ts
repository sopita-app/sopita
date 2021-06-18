import { Component } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'agendaApp';
  faTrashAlt = faTrashAlt;

  constructor(private authService: AuthService){
    if(localStorage.getItem('user')){
      this.authService.logFromLS(localStorage.getItem('user'))
    }
  }
}
