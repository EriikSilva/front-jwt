import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  private readonly TOKEN_NAME = 'senha_jwt'
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  get token(){
    return localStorage.getItem(this.TOKEN_NAME)
  }

  constructor(private loginService:LoginService){
    this._isLoggedIn$.next(!!this.token)
  }

  login(email:any,senha:any){
   return this.loginService.login(email, senha)
   .pipe(
    tap((res:any) => {
      this._isLoggedIn$.next(true)
      localStorage.setItem(this.TOKEN_NAME ,res.token)

    })
   )
  
  }

}
