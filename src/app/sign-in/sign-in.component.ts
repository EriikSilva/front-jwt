import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(private singinService:SignInService){}


  userFormCreate = new FormGroup({
    email: new FormControl("", Validators.required),
    senha: new FormControl(null, Validators.required)    
  })




  criarConta(){
    if(this.userFormCreate.invalid){
      console.log("form invalido")
      return
    } 
    // console.log(this.userFormCreate.value)

    this.singinService.cadastrarUsuario(this.userFormCreate.value)
    .subscribe((res:any) => {
      console.log("RES DO CADASTRO =>", res)
    })
    

  }

}
