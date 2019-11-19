import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { BeneficiaryRoutingModule } from './beneficiary-routing.module';
import { BeneficiaryComponent } from './beneficiary.component';
import { OthersBeneficiaryComponent } from './others/others-beneficiary.component';
import { AddOtherBankBeneficiaryComponent } from './others/add/add-other-bank-beneficiary.component';
import { ListOtherBankBeneficiaryComponent } from './others/list/list-other-bank-beneficiary.component';
import { DeleteOtherBankBeneficiaryComponent } from './others/delete/delete-other-bank-beneficiary.component';
import { ModifyOtherBankBeneficiaryComponent } from './others/modify/modify-other-bank-beneficiary.component';
import { OwnBeneficiaryComponent } from './own/own-beneficiary.component';
import { AddOwnBankBeneficiaryComponent } from './own/add/add-own-bank-beneficiary.component';
import { DeleteOwnBankBeneficiaryComponent } from './own/delete/delete-own-bank-beneficiary.component';
import { ModifyOwnBankBeneficiaryComponent } from './own/modify/modify-own-bank-beneficiary.component';
import { ListOwnBankBeneficiaryComponent } from './own/list/list-own-bank-beneficiary.component';



@NgModule({
  declarations: [BeneficiaryComponent, OthersBeneficiaryComponent, AddOtherBankBeneficiaryComponent, ListOtherBankBeneficiaryComponent, DeleteOtherBankBeneficiaryComponent, ModifyOtherBankBeneficiaryComponent, OwnBeneficiaryComponent, AddOwnBankBeneficiaryComponent, DeleteOwnBankBeneficiaryComponent, ModifyOwnBankBeneficiaryComponent, ListOwnBankBeneficiaryComponent],
  imports: [
    FormsModule,
    CommonModule,
    BeneficiaryRoutingModule
  ]
})
export class BeneficiaryModule { }
