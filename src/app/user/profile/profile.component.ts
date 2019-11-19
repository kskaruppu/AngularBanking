import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/guards/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();

    let statename = history.state;
    this.divTitle = statename.name;
  }

  //#region private method

  onSubmit() {

    this.auth.sendToken(this.profilePassword.value)
    this.router.navigate(["ownBeneficiary"]);
  }

  private clear() {
    this.profileForm.reset();
  }

  private createFormControls() {
    this.profilePassword = new FormControl('', [Validators.required]);
  }

  private createFormGroup() {
    this.profileForm = new FormGroup(
      { profilePassword: this.profilePassword }
    );
  }


  //#endregion

  //#region private variables

  private profilePassword: FormControl;
  private profileForm: FormGroup;
  private divTitle: string;

  //#endregion
}
