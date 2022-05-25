import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { RolespermissionsService } from '../rolespermissions.service';
@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitted = false;
  permissions:any;
  rolesList:any;
  constructor(private formbuilder: FormBuilder,private rolep:RolespermissionsService) { }

  ngOnInit(): void {
    this._initForm();
    this._listRoles();
    this._PermissionList();
  }

  private _PermissionList(){
    this.rolep.getPermissions().subscribe(data => {
      console.log(data);
     this.permissions = data.result.permissions
     console.log(this.permissions);
    })
  }

  onsubmit(){
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;
    console.log( this.registerFormcontrol.permissions);
    const registerData = {
      roleName: this.registerFormcontrol.roleName.value,
      role: this.registerFormcontrol.role.value,
      // profile: this.registerFormcontrol.profile.value,
      permissions: this.registerFormcontrol.permissions.value,
    };
    console.log(registerData)
    this.rolep.CreateRole(registerData).subscribe((data)=>{
      console.log(data)
      if(data.status === 201){
        alert("Successfully Created!")
      } else {
        alert(data.result)
      }
    })
  }


  private _listRoles(){
    this.rolep.getRoles().subscribe(data => {
     console.log(data);
     this.rolesList=data.result
    })  }



  private _initForm(){
this.registerForm = this.formbuilder.group({
  roleName: ['', Validators.required],
  role: ['', Validators.required],
  permissions: ['', Validators.required],

})
  }

  get registerFormcontrol() {
    return this.registerForm.controls;
  }
}

