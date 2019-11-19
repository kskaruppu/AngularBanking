import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../../shared/beneficiary.service';
import { Beneficiary } from '../../shared/beneficiary.model';

@Component({
  selector: 'app-list-own-bank-beneficiary',
  templateUrl: './list-own-bank-beneficiary.component.html',
  styleUrls: ['./list-own-bank-beneficiary.component.css']
})
export class ListOwnBankBeneficiaryComponent implements OnInit {

  constructor(private beneficiarySvc: BeneficiaryService) { }

  ngOnInit() {
    this.getRecords();
  }

  private getRecords(): void {
    this.beneficiarySvc.GetRecords().subscribe((e) => { this.beneficiaryList = e });

  }


  private activeElement = "n";
  private selectedItem(name: string) {
    this.activeElement = name;
  }

  private beneficiaryList: Beneficiary[] = [];

}
