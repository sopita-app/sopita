import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { Router } from '@angular/router';
import * as interfaces from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  user: any = {};
  loggedUser: any;
  public loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  public get auth(){
    return this.loggedUser
  }
  constructor(private http: HttpClient, private router: Router) {
    this.loginStatus.subscribe(result =>{
      console.log(result)
    })
  }

  checkLoginStatus(){
    if(localStorage.getItem('user')){
      return true
    }
  }

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

  signUp(user: interfaces.SignUpUser) {
    this.http
      .post<any>('https://organizateunpoco.herokuapp.com/api/user/signup', user)
      .pipe(
        map((res) => res.response),
        // tap(
        //   res => localStorage.setItem('user', res.token)
        // )
        )
      .subscribe((user) => {
        // this.loggedUser = user
        console.log(user)
        //redirectionarrrr
        if(user._id){
          this.router.navigate(['./home'])
          this.loginStatus.next(true)
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

  logFromLS(token){
    this.http.post<any>('https://organizateunpoco.herokuapp.com/api/user/preserve', {token}, {
      headers:{
        Authorization: 'Bearer ' + token
    }
    }).pipe(
      map(res => res.response)
    ).subscribe( user => {
      this.loggedUser = user
    })
  }
}
