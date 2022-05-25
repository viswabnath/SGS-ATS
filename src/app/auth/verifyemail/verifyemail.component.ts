import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent implements OnInit {
  loginFormGroup!: FormGroup;
  isSubmitted = false;

  constructor(private formbuilder: FormBuilder,
    private authservice: AuthService ) { }

  ngOnInit(): void {
    this._initFormgroup();
  }

  onsubmit(){
    this.isSubmitted = true;
    if (this.loginFormGroup.invalid) return;
    const loginData = {
      email: this.loginForm.email.value,
      code: this.loginForm.code.value,
    };
    console.log(loginData)
    this.authservice.verify(loginData).subscribe((data)=>{
      console.log(data)
    })  }

  private _initFormgroup() {
    this.loginFormGroup = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      code: ['', Validators.required],
    });
  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }

}