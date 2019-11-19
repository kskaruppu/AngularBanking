import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../../shared/beneficiary.service';
import { Beneficiary } from '../../shared/beneficiary.model';

@Component({
  selector: 'app-delete-own-bank-beneficiary',
  templateUrl: './delete-own-bank-beneficiary.component.html',
  styleUrls: ['./delete-own-bank-beneficiary.component.css']
})
export class DeleteOwnBankBeneficiaryComponent implements OnInit {

  constructor(private beneficiarySvc: BeneficiaryService) { }

  ngOnInit() {
    this.getRecords();
  }

  //#region private methods

  private getRecords() {
    this.beneficiarySvc.GetRecords().subscribe((ben) => { this.beneficiaryList = ben });
  }

  //#endregion

  //#region private variables

  private beneficiaryList: Beneficiary[] = [];

  //#endregion

}
