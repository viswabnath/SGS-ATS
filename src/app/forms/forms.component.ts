import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitted = false;

  constructor(private location:Location ,private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this._initForm();
  }


  onsubmit(){
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;
    const registerData = {
      firstname: this.registerFormcontrol.firstname.value,
      lastname: this.registerFormcontrol.lastname.value,
      email: this.registerFormcontrol.email.value,
      username: this.registerFormcontrol.username.value,
      password: this.registerFormcontrol.password.value,
      mobile: this.registerFormcontrol.mobile.value,
      homephone: this.registerFormcontrol.homephone.value,
      officephone: this.registerFormcontrol.officephone.value,
      fax: this.registerFormcontrol.fax.value,
      otheremail: this.registerFormcontrol.otheremail.value,
      title: this.registerFormcontrol.title.value,
      role: this.registerFormcontrol.role.value,
      department: this.registerFormcontrol.department.value,
      signature: this.registerFormcontrol.signature.value,
      country: this.registerFormcontrol.country.value,
      city: this.registerFormcontrol.city.value,
      state: this.registerFormcontrol.state.value,
      postalcode: this.registerFormcontrol.postalcode.value,
      address: this.registerFormcontrol.address.value,
    };
    console.log(registerData)
  }

  private _initForm(){
this.registerForm = this.formbuilder.group({
  firstname: ['', Validators.required],
  lastname: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  username: ['', Validators.required],
  password: ['', Validators.required],
  cpassword: ['', Validators.required],
  mobile: ['', Validators.required],
  homephone: [''],
  officephone: [''],
  fax: [''],
  otheremail: [''],
  title: ['', Validators.required],
  role: ['', Validators.required],
  department: ['', Validators.required],
  signature: ['', Validators.required],
  country: ['', Validators.required],
  city: ['', Validators.required],
  state: [''],
  postalcode: [''],
  address: [''],
})
  }

  get registerFormcontrol() {
    return this.registerForm.controls;
  }
}
