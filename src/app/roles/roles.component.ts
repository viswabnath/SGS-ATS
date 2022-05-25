import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RolespermissionsService } from './rolespermissions.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  rolesList:any;
  moduleForm!: FormGroup;
  editForm!: FormGroup;
  roleNamee:any;
  roleNameeId:any;
  isSubmitted=false;
moduleclicked =false;
editClicked =false;
  constructor(private router:Router,private rolep:RolespermissionsService,private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this._listRoles();
    this._initForm();
    this._initEditForm();
  }

  modulebutton(){
    this.moduleclicked= true;
    }

  onsubmit(){
    this.isSubmitted = true;
    if (this.moduleForm.invalid) return;
    const moduleData = {
      moduleName: this.registerFormcontrol.moduleName.value,
    };
    console.log(moduleData)
    this.rolep.CreateModule(moduleData).subscribe(data => {
      console.log(data)
      if(data.status === 200){
        alert("Successfully Created!")
      } else {
        alert(data.result)
      }
    })
  }

  edit(id:any , name:any){
    this.roleNamee =name,
    this.roleNameeId =id,
    console.log(id)
    this.editClicked= true;
  }

  onsend(){
    this.isSubmitted = true;
    if (this.editForm.invalid) return;
    const editData = {
      flag:true,
      role:this.roleNameeId ,
      reportsTo: this.EditFormcontrol.reportsTo.value,
    };

    console.log(editData)
    this.rolep.editRoleReportsto(editData).subscribe(data =>{
      console.log(data)
      if(data.status === 200){
        this._listRoles();
        alert("Successfully Updated!");
        this.editClicked= false;
      } else {
        alert(data.result)
      }
    })
  }
  
  oncancel(){
    this.moduleclicked= false;
    this.editClicked= false;
  }

  private _listRoles(){
    this.rolep.getRoles().subscribe(data => {
     console.log(data);
     this.rolesList=data.result
    })  }

    view(roleName: any , id:any){
      console.log(roleName)
this.router.navigate(['/roles/permissions'],{queryParams: {'role':roleName , 'id':id}})
    }

 
    private _initForm(){
      this.moduleForm = this.formbuilder.group({
        modulename: ['', Validators.required],
      })
        }
      
        get registerFormcontrol() {
          return this.moduleForm.controls;
        }


        
    private _initEditForm(){
      this.editForm = this.formbuilder.group({
        reportsTo: ['', Validators.required],
      })
        }
      
        get EditFormcontrol() {
          return this.editForm.controls;
        }
}
