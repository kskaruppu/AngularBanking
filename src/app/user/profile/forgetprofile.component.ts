import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../service/profile.service';
import { ForgetProfile } from './forgetprofile';

@Component({
  selector: 'app-forgetprofile',
  templateUrl: './forgetprofile.component.html',
  styleUrls: ['./forgetprofile.component.css']
})
export class ForgetprofileComponent implements OnInit {

  constructor(private router: Router, private profileSvc: ProfileService) { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
  }

  //#region private methods

  private createFormControls() {
    this.hintQuestion = new FormControl('', [Validators.required]);
    this.hintAnswer = new FormControl('', [Validators.required]);
  }

  private createFormGroup() {
    this.hintGroup = new FormGroup({
      hintquestion: this.hintQuestion,
      hintanswer: this.hintAnswer
    });
  }

  onSubmit() {
    this.profileRecord.HintQuestion = this.hintQuestion.value;
    this.profileRecord.HintAnswer = this.hintAnswer.value;
    this.profileSvc.getProfile(this.profileRecord).subscribe(
      (profiles) => { this.profiles = profiles },
      (error: any) => { console.log(error); }
    );
    console.log(this.profiles);
  }

  private clearForms() {
    this.hintQuestion.reset();
    this.hintAnswer.reset();
  }
  //#endregion

  //#region private variables

  private profileRecord: ForgetProfile = new ForgetProfile();
  private hintQuestion: FormControl;
  private hintAnswer: FormControl;
  private hintGroup: FormGroup;
  private questions: string[] = [
    'Who is your favourite author?',
    'What is your favourite food?'
  ];
  private profiles: any[] = [];

  //#end region
}
