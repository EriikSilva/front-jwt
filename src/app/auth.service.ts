import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  // private readonly TOKEN_NAME = 'senha_jwt'
  private readonly TOKEN_NAME = 'senha_jwt'
  private readonly EMAIL_NAME = 'email'

  emailFront:any;


  isLoggedIn$ = this._isLoggedIn$.asObservable()

  getToken(){
    // return this.token
    return localStorage.getItem(this.TOKEN_NAME)
  }

  constructor(private loginService:LoginService){
    this._isLoggedIn$.next(!!this.getToken())
  }

  login(email:any,senha:any){
   return this.loginService.login(email, senha)
   .pipe(
    tap((res:any) => {
      const token = res.token
      this._isLoggedIn$.next(true)
      localStorage.setItem(this.TOKEN_NAME , token)
      localStorage.setItem(this.EMAIL_NAME, res.email) 
      // console.log("LOGIN",res)
    })
   )
  }

 

  private clearAuthData() {
    localStorage.removeItem(this.TOKEN_NAME);
    localStorage.removeItem(this.EMAIL_NAME);
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');
  }


  logout(){
    // this.token = null;
    this.clearAuthData()
  }

}
