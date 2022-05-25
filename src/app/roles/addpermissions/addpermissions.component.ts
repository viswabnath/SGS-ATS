import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { RolespermissionsService } from '../rolespermissions.service';
@Component({
  selector: 'app-addpermissions',
  templateUrl: './addpermissions.component.html',
  styleUrls: ['./addpermissions.component.css']
})
export class AddpermissionsComponent implements OnInit {
  role:any;
  roleid:any;
  permissions:any;
  moduletype:any = [];
  moduleForm!: FormGroup;
  isSubmitted=false;
  moduleclicked =false;
  moduleList:any;
    constructor(private formbuilder: FormBuilder,private router:Router,private rolep:RolespermissionsService) { }
  
    ngOnInit(): void {
      this._getPermission();
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
        permissionName: this.registerFormcontrol.permissionName.value,
        modules: this.registerFormcontrol.modules.value,
        permissionType: this.registerFormcontrol.permissionType.value,
      };
      console.log(moduleData)
      this.rolep.CreatePermissions(moduleData).subscribe(data =>{
        console.log(data);
        if(data.status === 200){
          alert("Successfully Created!")
          this._getPermission();
        } else {
          alert(data.result)
        }
      })
    }
    
    oncancel(){
      this.moduleclicked= false;
    }
  
  private _getPermission(){
    this.rolep.getPermissions().subscribe(data => {
      console.log(data);
      this.permissions =data.result.permissions
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
  
  removeModule(pID:any){
    console.log(pID)
    const removem = {
      permission: pID,
    };
    console.log(removem);
    if (confirm("Are you Sure!")) {
      this.rolep.deletePermission(removem).subscribe(data =>{
        console.log(data);
        if(data.status === 200){
          alert("Successfully Deleted!")
          this._getPermission();
        } else {
          alert(data.result)
        }
      })
    } else {
    }
 
  }
  
  
  private _initForm(){
    this.moduleForm = this.formbuilder.group({
      permissionName: ['', Validators.required],
      modules: ['', Validators.required],
      permissionType: ['', Validators.required]
    })
      }
    
      get registerFormcontrol() {
        return this.moduleForm.controls;
      }
  
  }
  
