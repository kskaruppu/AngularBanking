import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './register/registration.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ForgetprofileComponent } from './profile/forgetprofile.component';
import { MessagesComponent } from '../messages/messages.component';


@NgModule({
  declarations: [
    LoginComponent,
    NavComponent,
    HomeComponent,
    RegistrationComponent,
    ProfileComponent,
    ForgetprofileComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    BrowserModule, ReactiveFormsModule, FormsModule,
  ]
})
export class UserModule { }
