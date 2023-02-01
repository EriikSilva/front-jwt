import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem, MessageService} from 'primeng/api';         
import {DividerModule} from 'primeng/divider'; 
import {CardModule} from 'primeng/card';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';       
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import { AuthInterceptorProvider } from './auth.interceptor';
import { AuthService } from './auth.service';
import { SignInComponent } from './sign-in/sign-in.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ToolbarComponent,
    SignInComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    AccordionModule,
    DividerModule,
    CardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    SidebarModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  providers: [AuthInterceptorProvider, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
