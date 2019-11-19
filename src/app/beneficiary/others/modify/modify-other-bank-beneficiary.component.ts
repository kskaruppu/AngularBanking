import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../../shared/beneficiary.service';
import { Beneficiary } from '../../shared/beneficiary.model';

@Component({
  selector: 'app-modify-other-bank-beneficiary',
  templateUrl: './modify-other-bank-beneficiary.component.html',
  styleUrls: ['./modify-other-bank-beneficiary.component.css']
})
export class ModifyOtherBankBeneficiaryComponent implements OnInit {

  constructor(private beneficiarySvc: BeneficiaryService) { }

  ngOnInit() {
    this.getBeneficiaries();
  }

  //#region public Methods

  getBeneficiaries(): void {
    this.beneficiarySvc.GetRecords().subscribe((e) => { this.beneficiaryList = e });

  }

  setbeneficiary(record: Beneficiary) {
    this.mbenificiary.id = record.id;
    this.mbenificiary.name = record.name;
    this.mbenificiary.accountNumber = record.accountNumber;
    this.mbenificiary.confirmAccountNumber = record.confirmAccountNumber;
    this.mbenificiary.addressone = record.addressone;
    this.mbenificiary.addresstwo = record.addresstwo;
    this.mbenificiary.addressthree = record.addressthree;
    this.mbenificiary.transferlimit = record.transferlimit;
    this.mbenificiary.bank = record.bank;
    this.mbenificiary.branch = record.branch;
    this.mbenificiary.ifsc = record.ifsc;
  }

  modifyBeneficiary(): void {
    this.beneficiarySvc.update(this.mbenificiary).subscribe(
      () => { },
      (error: any) => { console.log(error); }
    );
  }

  //#endregion

  //#region private variables 

  private mbenificiary: Beneficiary = new Beneficiary();
  private beneficiaryList: Beneficiary[] = [];

  //#endregion

}
