import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userForm = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl(null, Validators.required),
  });

  constructor(
    private authService: AuthService,
    private loginService:LoginService,
    private router: Router,
    public messageService: MessageService
  ) {}

    

  submitForm() {
   if(this.userForm.invalid){
    console.log("Campos Invalidos")
    /**********MENSAGEM DE ERRO***************/
    this.messageService.add({
      key:'login',
      severity: "error",
      summary: "Erro",
      detail: "Preencha os campos obrigatórios"
    });


    return
   }

   this.authService.login(this.userForm.get('email')?.value,this.userForm.get('senha')?.value)
   .subscribe((res) => {
    // console.log(res)
    this.router.navigate(['/dashboard'])
   }, error => {
    /**********MENSAGEM DE ERRO***************/
    this.messageService.add({
      key:'login',
      severity: "error",
      summary: "Erro",
      detail: "Falha na Autenticação"
    });

    console.log(error.error)
    })
  }


  
  //  this.authService.login(this.userForm.get('email')?.value,this.userForm.get('senha')?.value)
  //  .subscribe((res:any) => {
  //   next: () => this.router.navigate(['/dashboard']),
  //   error:() =>  
  //      this.messageService.add({
  //         key:'login',
  //         severity: "error",
  //         summary: "Erro",
  //         detail: "Falha na Autenticação"
  //       })
  //     })
  // }


  criarConta(){
    this.router.navigate(['/sign-in'])
  }
}
