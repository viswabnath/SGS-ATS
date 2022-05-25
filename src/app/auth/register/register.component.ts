import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitted = false;

  constructor(private location: Location, private route: Router,
    private formbuilder: FormBuilder, private authservice: AuthService) { }

  ngOnInit(): void {
    this._initForm();
  }

  back() {
    this.location.back()
  }

  onsubmit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;
    const registerData = {
      firstname: this.registerFormcontrol.firstname.value,
      lastname: this.registerFormcontrol.lastname.value,
      email: this.registerFormcontrol.email.value,
      password: this.registerFormcontrol.password.value,
      confirmpassword: this.registerFormcontrol.confirmpassword.value,
      mobile: this.registerFormcontrol.mobile.value,
      roleApplied: this.registerFormcontrol.roleApplied.value,
    };
    console.log(registerData)
    this.authservice.signUp(registerData).subscribe((data: any) => {
      console.log(data)
      if (data.status === 201) {
        alert('Registered Successfully');
        this.route.navigate(['']);
      }
      else {
        alert(data.result);
      }
    })
  }

  private _initForm() {
    this.registerForm = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      mobile: ['', Validators.required],
      roleApplied: ['', Validators.required],
    })
  }

  get registerFormcontrol() {
    return this.registerForm.controls;
  }
}
