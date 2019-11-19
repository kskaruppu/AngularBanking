import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../../shared/beneficiary.service';
import { Beneficiary } from '../../shared/beneficiary.model';

@Component({
  selector: 'app-delete-other-bank-beneficiary',
  templateUrl: './delete-other-bank-beneficiary.component.html',
  styleUrls: ['./delete-other-bank-beneficiary.component.css']
})
export class DeleteOtherBankBeneficiaryComponent implements OnInit {

  constructor(private beneficiarySvc: BeneficiaryService) { }

  ngOnInit() {
    this.getBeneficiaryItems();
  }

  //#region Public Methods

  private getBeneficiaryItems(): void {
    this.beneficiarySvc.GetRecords().subscribe((e) => { this.beneficiaryList = e });
  }

  private setbeneficiary(record: Beneficiary) {
    console.log("ID:" + record.id);
    this.mbeneficiary.id = record.id;
    this.mbeneficiary.name = record.name;
    this.mbeneficiary.accountNumber = record.accountNumber;
    this.mbeneficiary.confirmAccountNumber = record.confirmAccountNumber;
    this.mbeneficiary.addressone = record.addressone;
    this.mbeneficiary.addresstwo = record.addresstwo;
    this.mbeneficiary.addressthree = record.addressthree;
    this.mbeneficiary.transferlimit = record.transferlimit;
    this.mbeneficiary.bank = record.bank;
    this.mbeneficiary.branch = record.branch;
    this.mbeneficiary.ifsc = record.ifsc;
  }

  private deleteBeneficiary() {
    this.beneficiarySvc.delete(this.mbeneficiary.id).subscribe(
      () => console.log(`Employee with ID = ${this.mbeneficiary.id} Deleted`),
      (err) => console.log(err)
    );
  }

  //#endregion

  //#region Private Variables

  private beneficiaryList: Beneficiary[] = [];
  private mbeneficiary: Beneficiary = new Beneficiary();

  //#endregion

}
