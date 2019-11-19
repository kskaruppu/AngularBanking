import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../../shared/beneficiary.service';
import { Beneficiary } from '../../shared/beneficiary.model';

@Component({
  selector: 'app-list-other-bank-beneficiary',
  templateUrl: './list-other-bank-beneficiary.component.html',
  styleUrls: ['./list-other-bank-beneficiary.component.css']
})
export class ListOtherBankBeneficiaryComponent implements OnInit {

  constructor(private beneficiarySvc: BeneficiaryService) { }

  ngOnInit() {
    this.getBeneficiary();
  }

  selectedItem(name: string) {
    this.activeElement = name;
  }

  getBeneficiary(): void {
    this.beneficiarySvc.GetRecords().subscribe((e) => { this.beneficiaryList = e });
  }

  //#region private variables

  private beneficiaryList: Beneficiary[] = [];
  private activeElement = "";

  //#endregion 
}
