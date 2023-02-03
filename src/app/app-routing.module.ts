import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IsAuthenticatedGuard } from './is-authenticated.guard';
import { IsLoggeddGuard } from './is-logged-in';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    canActivate:[IsLoggeddGuard]
    
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[IsAuthenticatedGuard]
  },
  {
    path:'sign-in',
    component:SignInComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
