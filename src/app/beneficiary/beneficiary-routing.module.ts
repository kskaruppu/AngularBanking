import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OthersBeneficiaryComponent } from './others/others-beneficiary.component';
import { AddOtherBankBeneficiaryComponent } from './others/add/add-other-bank-beneficiary.component';
import { DeleteOtherBankBeneficiaryComponent } from './others/delete/delete-other-bank-beneficiary.component';
import { ListOtherBankBeneficiaryComponent } from './others/list/list-other-bank-beneficiary.component';
import { ModifyOtherBankBeneficiaryComponent } from './others/modify/modify-other-bank-beneficiary.component';
import { AddOwnBankBeneficiaryComponent } from './own/add/add-own-bank-beneficiary.component';
import { BeneficiaryComponent } from './beneficiary.component';
import { DeleteOwnBankBeneficiaryComponent } from './own/delete/delete-own-bank-beneficiary.component';
import { ModifyOwnBankBeneficiaryComponent } from './own/modify/modify-own-bank-beneficiary.component';
import { OwnBeneficiaryComponent } from './own/own-beneficiary.component';
import { ListOwnBankBeneficiaryComponent } from './own/list/list-own-bank-beneficiary.component';
import { ProfileauthGuard } from '../guards/profileauth.guard';
import { ProfileResolve } from '../guards/profileResolve';
import { ProfileComponent } from '../user/profile/profile.component';


const routes: Routes = [
  {
    path: 'beneficiary', component: BeneficiaryComponent,
    data: { breadcrumb: 'Beneficiary' }
  },
  {
    path: 'otherBeneficiary', redirectTo: '/otherBeneficiary/add', pathMatch: 'full',
  },
  {
    path: 'ownBeneficiary', redirectTo: '/ownBeneficiary/add', pathMatch: 'full',
  },
  {
    path: 'otherBeneficiary', component: OthersBeneficiaryComponent,
    data: { breadcrumb: 'OtherBeneficiary' }, resolve: { ResolveData: ProfileResolve },
    canActivate: [ProfileauthGuard],
    children: [
      {
        path: 'add', component: AddOtherBankBeneficiaryComponent,
        data: { breadcrumb: 'Add' }
      },
      {
        path: 'delete', component: DeleteOtherBankBeneficiaryComponent,
        data: { breadcrumb: 'Delete' }
      },
      {
        path: 'list', component: ListOtherBankBeneficiaryComponent,
        data: { breadcrumb: 'View' }
      },
      {
        path: 'update', component: ModifyOtherBankBeneficiaryComponent,
        data: { breadcrumb: 'Modify' }
      },
    ]
  },
  {
    path: 'ownBeneficiary', component: OwnBeneficiaryComponent,
    data: { breadcrumb: 'OwnBeneficiary' }, canActivate: [ProfileauthGuard],
    children: [
      {
        path: 'add', component: AddOwnBankBeneficiaryComponent,
        data: { breadcrumb: 'Add' }
      },
      {
        path: 'delete', component: DeleteOwnBankBeneficiaryComponent,
        data: { breadcrumb: 'Delete' }
      },
      {
        path: 'list', component: ListOwnBankBeneficiaryComponent,
        data: { breadcrumb: 'View' }
      },
      {
        path: 'update', component: ModifyOwnBankBeneficiaryComponent,
        data: { breadcrumb: 'Modify' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiaryRoutingModule { }
