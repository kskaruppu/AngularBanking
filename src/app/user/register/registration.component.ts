import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // private messageService: MessageService
  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  //#region Private Methods

  register() {
    // this.messageService.add("Registered");
    console.log('Registered');
  }

  createFormControls() {
    this.fname = new FormControl('', [Validators.minLength(3), Validators.required]);
    this.lname = new FormControl('', [Validators.required]);
    this.uname = new FormControl();
    this.password = new FormControl();
  }

  createForm() {
    this.registerForm = new FormGroup(
      {
        fname: this.fname,
        lname: this.lname,
        uname: this.uname,
        password: this.password
      }
    );
  }

  createUser() {

    this.userCollection = JSON.parse(localStorage.getItem("array")) || [];

    if (this.userCollection.find(x => x.username === this.uname.value)) {
      console.log("User name is taken");
      // this.messageService.add("User name is taken");
    }
    else {
      let newName = { username: this.uname.value };
      this.userCollection.push(newName);

      localStorage.setItem("array", JSON.stringify(this.userCollection));
      this.userCollection = JSON.parse(localStorage.getItem("array"));

      console.log(typeof this.userCollection); //object
      console.log(this.userCollection); //[1, 2, 3]
    }
  }

  //#endregion

  //#region Private variables

  registerForm: FormGroup;
  fname: FormControl;
  lname: FormControl;
  uname: FormControl;
  password: FormControl;

  private userCollection: user[] = [];
  //#endregion
}

export class user {
  public username: string;

  constructor(Value: string) {
    this.username = Value;
  }
}
