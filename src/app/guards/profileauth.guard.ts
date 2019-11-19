import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ProfileService } from '../user/service/profile.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileauthGuard implements CanActivate {
  constructor(private auth: AuthService,
    private myRoute: Router, private profileSvc: ProfileService) {
  }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   if (this.auth.isLoggedIn()) {
  //     return true;
  //   } else {
  //     this.myRoute.navigate(["./login"]);
  //     return false;
  //   }
  // }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.loadNavigation(next.component);
      return false;
    }
  }
  private loadNavigation(component: any) {

    switch (component.name) {
      case "OwnBeneficiaryComponent":
        // this.myRoute.navigate([this.baseUrl], { state: { name: "Manage BOI Beneficiary" } });
        this.myRoute.navigate([this.baseUrl], { state: { name: this.profileSvc.componentName } });
        break;
      case "OthersBeneficiaryComponent":
        // this.myRoute.navigate([this.baseUrl], { state: { name: "Other Bank Beneficiary" } });
        this.myRoute.navigate([this.baseUrl], { state: { name: this.profileSvc.componentName } });
        break;
      default:
        break;
    }
  }
  private baseUrl = "./profile";

}
