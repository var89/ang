import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {FormControl, FormGroupDirective, NgForm, Validator, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";
import {exhaustMap} from "rxjs/operators";



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class UserForm {
  id: string;
  gender: string;
  username: string;
  password: string;
  email: string;

  constructor( gender: string, email: string, username: string, password: string) {
    this.id = '_' + Math.random().toString(36).substr(2, 9);
    this.gender = gender;
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
 // constructor(public userRegistrationService: UserRegistrationService) { }

  genders: string[] = ["male", "female", "cupcake", "other"];
  newUser: UserForm = new UserForm('','', '', '');
  currentGender: string = "male";
  selected: string = "male";
  formControls = {
    emailFormControl : new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    passwordFormControl:  new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    usernameFormControl:  new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
  };

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }
  registerUser(){
    // if( !this.formControls.emailFormControl.hasError('email') &&
    //     !this.formControls.emailFormControl.hasError('required') &&
    //     !this.formControls.usernameFormControl.hasError('minlength') &&
    //     !this.formControls.usernameFormControl.hasError('required') &&
    //     !this.formControls.passwordFormControl.hasError('minlength') &&
    //     !this.formControls.passwordFormControl.hasError('required')){
    //
    // }
  /*  this.userRegistrationService.setUser(this.newUser).subscribe((obj: JSON)=>{
      console.log("recieved: " );
      console.log( obj)
    });*/

  }

}
