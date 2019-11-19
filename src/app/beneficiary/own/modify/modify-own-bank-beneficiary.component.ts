import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../../shared/beneficiary.service';
import { Beneficiary } from '../../shared/beneficiary.model';

@Component({
  selector: 'app-modify-own-bank-beneficiary',
  templateUrl: './modify-own-bank-beneficiary.component.html',
  styleUrls: ['./modify-own-bank-beneficiary.component.css']
})
export class ModifyOwnBankBeneficiaryComponent implements OnInit {

  constructor(private beneficiarySvc: BeneficiaryService) { }

  ngOnInit() {
    this.getRecords();
  }

  //#region private methods

  private LoadItems(record: Beneficiary) {
    console.log(record.id);
    this.benificiary.id = record.id;
    this.benificiary.name = record.name;
    this.benificiary.accountNumber = record.accountNumber;
    this.benificiary.confirmAccountNumber = record.confirmAccountNumber;
    this.benificiary.addressone = record.addressone;
    this.benificiary.addresstwo = record.addresstwo;
    this.benificiary.addressthree = record.addressthree;
    this.benificiary.transferlimit = record.transferlimit;
    this.benificiary.bank = record.bank;
    this.benificiary.branch = record.branch;
    this.benificiary.ifsc = record.ifsc;
  }

  private update(): void {
    this.beneficiarySvc.update(this.benificiary).subscribe(
      () => {
      },
      (error: any) => { console.log(error); }
    );

  }

  private getRecords() {
    this.beneficiarySvc.GetRecords().subscribe((e) => { this.beneficiaryList = e });
  }
  //#endregion

  //#region private variables

  private beneficiaryList: Beneficiary[] = [];
  private benificiary: Beneficiary = new Beneficiary();

  //#endregion

}
