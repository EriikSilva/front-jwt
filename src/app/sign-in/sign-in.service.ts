import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private htpp:HttpClient) {}

  apiUrl = "http://localhost:3000/usuarios/cadastro"

  cadastrarUsuario(data:any){
   return this.htpp.post(this.apiUrl, data)
  }
  

}
