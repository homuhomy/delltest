import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../../services/data';
import { Api } from '../../services/api';
import { Misc } from '../../services/misc';

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
    private router: Router,
    private apiService: Api,
    private dataService: Data,
    private misc: Misc
  ){
    this.loginForm = this.formBuilder.group ({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]]
    })
  }

  async onSubmit(form: any){
    const loginData = form.value;

    try{
      const response: any = await this.apiService.httpPost('/auth/login', loginData);
      if (response.success) {
        let token = response.token;
        this.misc.publishLoginEvent(true);
        this.dataService.setLocalStorage('token', token);
        this.router.navigateByUrl('/users');
      } else{
        this.misc.openSnackBar('Invalid username or password', 'OK');
      }
    } catch (error: any) {
      console.error(error);
    }
  }
}
