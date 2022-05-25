import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ReqService } from './../req.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RolesService } from 'src/app/roles.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  number: any;
  logindata: any;
  isassigned = false;
  loginid: any;
  loginname: any;
  ldata: any;
  singledata: any;
  dropdownList: any[] = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};
  IrArray: any[] = [];
  requirementForm!: FormGroup;
  lid: any;
  aids:any;

  constructor(private formbuilder: FormBuilder, private reqservice: ReqService,
    private activer: ActivatedRoute, private Rolesservice: RolesService) {

  }

  ngOnInit(): void {

    this.activer.queryParams.subscribe(params => {
      this.number = params.number;
      this.lid = params.AM
      console.log(this.number, this.lid);
      this.reqservice.singlereq(this.number).subscribe(data => {
        console.log(data);
        if (data.status === 200) {
          this.singledata = data.result;
        }
        else {
          alert(data.result);
        }
      });
    })

    this._initForm();

    setTimeout(() => {
      this.dropdownList = this.IrArray;
    console.log(this.dropdownList);
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'firstname',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    }, 2000);

    this.ldata = this.Rolesservice.getRoles();
    this.logindata = JSON.parse(this.ldata);
    console.log(this.logindata);
    this.loginid = this.logindata._id;
    this.loginname = this.logindata.firstname + this.logindata.lastname;
    console.log(this.loginname);
    this.reqservice.getIrsList().subscribe(data => {
      console.log(data);
      if (data.status == 200) {
        this.IrArray = data.result;
        console.log(this.IrArray);
      }
      else {
        alert(data.result);
      }
    })
  }


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onsubmit() {
    this.aids = this.requirementFormcontrol.AssignedIA;
    console.log(this.aids);
    const data = {
      reqid:this.number,
      amid:this.lid,
      AssignedIA:this.requirementFormcontrol.AssignedIA.value,
    }
    console.log(data);

  }


  private _initForm() {
    this.requirementForm = this.formbuilder.group({
      AssignedIA: ['', Validators.required],
    })
  }

  get requirementFormcontrol() {
    return this.requirementForm.controls;
  }

  // private _getIr() {
  // this.reqservice.getIrsList().subscribe(data => {
  //   console.log(data.result);
  //   if(data.status == 200){
  //     this.IrArray = data.result;
  //   }
  //   else {
  //    alert( data.result)
  //   }
  // })
  // }
}
