import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    // this.loginService.getUser()
    // .subscribe((res:any) => {
    //     // console.log(res)
    // })
  }

}
