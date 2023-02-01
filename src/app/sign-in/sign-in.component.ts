import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from './sign-in.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    private singinService: SignInService,
    private router: Router,
    public messageService: MessageService
  ) {}

  userFormCreate = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl(null, Validators.required),
  });

  criarConta() {
    if (this.userFormCreate.invalid) {
      console.log('form invalido');

      this.messageService.add({
        key: 'sigin',
        severity: 'error',
        summary: 'Preencha os campos',
        detail: 'Preencha os campos obrigatorios',
      })
      return;
    }
    // console.log(this.userFormCreate.value)

    this.singinService.cadastrarUsuario(this.userFormCreate.value)
    .subscribe((res:any) => {
      this.messageService.add({
        key: 'sigin',
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Conta Criada com Sucesso',
      })
      this.router.navigate([''])
    }, error => {
      console.log(error.error.message)
      this.messageService.add({
        key: 'sigin',
        severity: 'error',
        summary: 'Ocorreu um erro',
        detail: error.error.message,
      })
    })
  }
}
