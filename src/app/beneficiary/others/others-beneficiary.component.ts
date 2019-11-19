import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-others-beneficiary',
  templateUrl: './others-beneficiary.component.html',
  styleUrls: ['./others-beneficiary.component.css']
})
export class OthersBeneficiaryComponent implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.data;
  }
}
