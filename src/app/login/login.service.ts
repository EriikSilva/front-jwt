import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUsuarios = "http://localhost:3000/usuarios/login"
  apiUsuarioLogado = "http://localhost:3000/usuarios"

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(this.apiUsuarioLogado)
  }

  login(email:any, senha:any){
    return this.http.post(this.apiUsuarios, {email, senha})
  }

}
