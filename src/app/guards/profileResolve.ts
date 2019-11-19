import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from '@angular/router';
import { ProfileService } from '../user/service/profile.service';
import { filter } from 'rxjs/operators';

@Injectable()
export class ProfileResolve implements Resolve<any> {
  constructor(private route: ActivatedRoute, private profileSvc: ProfileService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.profileSvc.componentName = 'Others';
    let cc = route.data['name'];
    return route.data['name'];
  }
  previousUrls: string;
}