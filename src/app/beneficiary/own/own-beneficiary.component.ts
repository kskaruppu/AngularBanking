import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-own-beneficiary',
  templateUrl: './own-beneficiary.component.html',
  styleUrls: ['./own-beneficiary.component.css']
})
export class OwnBeneficiaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buttonTapped(args) {
    if (args == 'activate') {
      this.isTapped = true;
      this.isNotTapped = false;
    }
    else if (args == 'deactivate') {
      this.isTapped = false;
      this.isNotTapped = true;
    }
  }

  langs: string[] = [
    'Add',
    'View',
    'Update',
  ];

  //#region private variables

  private isTapped: boolean;
  private isNotTapped: boolean;

  //#endregion
}
