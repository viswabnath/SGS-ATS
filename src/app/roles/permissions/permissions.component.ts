import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RolespermissionsService } from '../rolespermissions.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
role:any;
roleid:any;
permissions:any;
moduletype:any = [];
moduleForm!: FormGroup;
isSubmitted=false;
moduleclicked =false;
moduleList:any;
  constructor(private activer:ActivatedRoute,private formbuilder: FormBuilder,private router:Router,private rolep:RolespermissionsService) { }

  ngOnInit(): void {
    this.activer.queryParams.subscribe(params =>{
      this.role=params.role;
      this.roleid = params.id
      console.log(this.role ,this.roleid);
      
    })
    this._getPermission(this.role);
    this._initForm();
    this._getListofModules();
  }

  modulebutton(){
    this.moduleclicked= true;
    }

  onsubmit(){
    this.isSubmitted = true;
    if (this.moduleForm.invalid) return;
    const moduleData = {
      permission: this.registerFormcontrol.permission.value,
      module: this.registerFormcontrol.module.value,
    };
    console.log(moduleData)
    this.rolep.AddModuleToPermission(moduleData).subscribe((data)=>{
      console.log(data)
      if(data.status === 201){
        alert("Successfully Created!")
      } else {
        alert(data.result)
      }
    })
  }
  
  oncancel(){
    this.moduleclicked= false;
  }

private _getPermission(role: any){
  this.rolep.getRolePermission(role).subscribe(data => {
    console.log(data);
    this.permissions =data.result[0].permissions
    console.log(this.permissions);
    this.permissions.forEach((e: any) => {
      this.moduletype.push(e.moduleTypes)
    });
    console.log(this.moduletype);
  })
}

private _getListofModules(){
  this.rolep.getListModules().subscribe(data => {
    console.log(data);
    this.moduleList = data.result
  })
}

removeModule(pID:any , mID:any){
  console.log(pID,mID)
  const removem = {
    permission: pID,
    module:mID
  };
  console.log(removem);
  if (confirm("Are you Sure!")) {
    this.rolep.removeModuleFromPermission(removem).subscribe(data =>{
      console.log(data);
      if(data.status === 200){
        this._getPermission(this.role);
        alert("Successfully Deleted!")
      } else {
        alert(data.result)
      }
    })
  } else {
  }
}


private _initForm(){
  this.moduleForm = this.formbuilder.group({
    permission: ['', Validators.required],
    module: ['', Validators.required],
  })
    }
  
    get registerFormcontrol() {
      return this.moduleForm.controls;
    }

}
