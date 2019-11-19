import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../../shared/beneficiary.model';
import { BeneficiaryService } from '../../shared/beneficiary.service';

@Component({
  selector: 'app-add-other-bank-beneficiary',
  templateUrl: './add-other-bank-beneficiary.component.html',
  styleUrls: ['./add-other-bank-beneficiary.component.css']
})
export class AddOtherBankBeneficiaryComponent implements OnInit {

  constructor(private beneficiarySvc: BeneficiaryService) { }

  ngOnInit() {
  }

  beneficiaryRecord: Beneficiary = {
    id: null,
    name: null,
    accountNumber: null,
    confirmAccountNumber: null,
    addressone: null,
    addresstwo: null,
    addressthree: null,
    transferlimit: null,
    bank: "Corporation Bank",
    branch: "Mumbai - Navy",
    ifsc: "CORP0001502",
    beneficiaryType: "Others"
  };

  addBeneficiary(): void {
    this.beneficiarySvc.add(this.beneficiaryRecord).subscribe((data: Beneficiary) => {
      console.log(data);
    },
      (error: any) => { console.log(error); }
    );
  }
}
