import { RolesService } from './../../roles.service';
import { LocalstorageService } from './../localstorage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  isSubmitted = false;
  loginFetchData :any;
  constructor(private formbuilder: FormBuilder, private route:Router,
    private authservice: AuthService,private localStorageService:LocalstorageService,
    private rolesService:RolesService
    ) { }

  ngOnInit(): void {
    this._initFormgroup();
  }

  onsubmit(){
    this.isSubmitted = true;
    if (this.loginFormGroup.invalid) return;
    const loginData = {
      email: this.loginForm.email.value,
      password: this.loginForm.password.value,
    };
    console.log(loginData)
    this.authservice.signIn(loginData).subscribe((data)=>{
      console.log(data)
      if(data.status === 200){
        this.loginFetchData = data;
        this.rolesService.setRoles(this.loginFetchData.result);
        this.localStorageService.setName(this.loginFetchData.result.firstname);
        this.localStorageService.setToken(this.loginFetchData.result.token);
        this.route.navigate(['/welcome']);
      } else{
        alert(data.result);
      }
    })  }

  private _initFormgroup() {
    this.loginFormGroup = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }

}
