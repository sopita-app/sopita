import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  user: any = {};
  loggedUser: any;
  
  signIn(user: any) {
    this.http
      .post<any>('https://organizateunpoco.herokuapp.com/api/user/signin', user)
      .pipe(
        map((res) => res.response),
        tap(
          res => localStorage.setItem('user', res.token)
        )
        )
      .subscribe((user) => {
        this.loggedUser = user
        console.log(user)
        //redirectionarrrr
        if(user._id){
          this.router.navigate(['./home'])
        }

      });
  }
  logOut(){
    this.loggedUser = null
    localStorage.clear()
    this.router.navigate(['./auth/login'])

  }

  verificaAutenticacion(){
    if(!localStorage.getItem('user')){
      return of(false)
    }else{
      //ejectutar el post para loguearse desde localstorage
      return of(true)
    }
  }

}
