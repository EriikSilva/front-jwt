import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  email:any

  constructor(
    private loginService:LoginService,
    private authService:AuthService
    ){}

  ngOnInit(): void {
    this.email = localStorage['email']
  }

}
