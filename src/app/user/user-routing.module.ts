import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { RegistrationComponent } from './register/registration.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileResolve } from '../guards/profileResolve';
import { ForgetprofileComponent } from './profile/forgetprofile.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  { path: 'navig', component: NavComponent },
  { path: 'profile', component: ProfileComponent, data: { compnames: 'project/:idprofile' }, resolve: { ResolveData: ProfileResolve }, },
  { path: 'forgetprofile', component: ForgetprofileComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
