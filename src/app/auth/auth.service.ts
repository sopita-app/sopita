import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  user: any = {};
  loggedUser: any = {};
  signIn(user: any) {
    this.http
      .post<any>('https://organizateunpoco.herokuapp.com/api/user/signin', user)
      .pipe(
        map((res) => res.response),
        tap(
          res => localStorage.setItem('user', res)
        )
        )
      .subscribe((user) => {
        this.loggedUser = user
        console.log(user)
        //redirectionarrrr
        if(user._id){
          //this.router.navigate(['./tasks'])
        }

      });
  }
}
