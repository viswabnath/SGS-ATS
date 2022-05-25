import { ReqService } from './../req.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import exp from '../../shared/jsonfiles/experience.json';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-addrequirement',
  templateUrl: './addrequirement.component.html',
  styleUrls: ['./addrequirement.component.css']
})
export class AddrequirementComponent implements OnInit {
  requirementForm!: FormGroup;
  isSubmitted = false;
  expList:{year:string}[]=exp;
  dropdownList : any[] = [];
  client:any;
  selectedItems : any[] = [];
  allskills:any=[]
  dropdownSettings :IDropdownSettings ={};
  constructor(private formbuilder: FormBuilder , private reqservice:ReqService) { }

  ngOnInit(): void {
    this._initForm();
    this._getClientsList();
    this.dropdownList = [
      'JAVA' , 'HTML' , 'CSS' , 'SQL' , 'HANA' , 'MONGODB', 'REACT' , 'ANGULAR' , 'ANGULARJS' , 'MICROSERVICES' , 'JENKIENS', 'CLOUD' , 'AZURE',
      'IONIC', 'DEVEOPS', 'AWS' , 'NODEJS'
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'skill',
      textField: 'skill',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    this.allskills =item
    console.log(this.allskills);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onsubmit(){
    // this.isSubmitted = true;
    // if (this.requirementForm.invalid) return;
    const reqData = {
      RequirementName: this.requirementFormcontrol.RequirementName.value,
      ClosedDate: this.requirementFormcontrol.ClosedDate.value,
      Skills: this.requirementFormcontrol.Skills.value,
      NoOfPosts: this.requirementFormcontrol.NoOfPosts.value,
      Suggestion: this.requirementFormcontrol. Suggestion.value,
      MaxCTC: this.requirementFormcontrol.MaxCTC.value,
      Experience: this.requirementFormcontrol.Experience.value,
      JobCode: this.requirementFormcontrol. JobCode.value,
      ECVS0: this.requirementFormcontrol.ecvs.value,
      Description: this.requirementFormcontrol. Description.value,
      RequirementType: this.requirementFormcontrol.RequirementType.value,
      Location: this.requirementFormcontrol.Location.value,
      ClientId: this.requirementFormcontrol.ClientId.value,
    };
    console.log(reqData)
    this.reqservice.createReq(reqData).subscribe(data => {
     console.log(data);
     if(data.status === 201){
      alert("Successfully Created!")
    } else {
      alert(data.result)
    }
    })
  }

  private _initForm(){
this.requirementForm = this.formbuilder.group({
  RequirementName: ['', Validators.required],
  ClosedDate: ['', Validators.required],
  Skills: ['', [Validators.required]],
  NoOfPosts: ['', Validators.required],
  Suggestion: [''],
  MaxCTC: ['', Validators.required],
  Experience: ['', Validators.required],
  JobCode: ['', Validators.required],
  ecvs: ['', Validators.required],
  Description: ['', Validators.required],
  RequirementType: ['', Validators.required],
  Location: ['', Validators.required],
  ClientId: ['', Validators.required],
})
  }

  get requirementFormcontrol() {
    return this.requirementForm.controls;
  }


  private _getClientsList(){
    this.reqservice.getClients().subscribe(data =>{
      console.log(data);
      this.client = data.result
    })
  }

}
