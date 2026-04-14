import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [...SharedModules],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.loginForm = this.formBuilder.group ({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]]
    })
  }

  async onSubmit(form: any){

  }
}
