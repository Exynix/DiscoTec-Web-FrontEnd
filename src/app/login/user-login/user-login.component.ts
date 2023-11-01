import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css', '../login.component.css']
})
export class UserLoginComponent {

  emailField = new FormControl ('',
    [
      Validators.required,
      Validators.email
    ])

  passwordField = new FormControl ('',
    [
      Validators.required
    ])

  constructor() {
  }



}
