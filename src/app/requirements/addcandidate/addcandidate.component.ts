import { Component, OnInit } from '@angular/core';
import countries from '../../shared/jsonfiles/country.json';
import exp from '../../shared/jsonfiles/experience.json';
import state from '../../shared/jsonfiles/state.json';
import ctc from '../../shared/jsonfiles/ctc.json';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ReqService } from './../req.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})
export class AddcandidateComponent implements OnInit {
  countryList: { name: string, code: string }[] = countries;
  expList: { year: string }[] = exp;
  stateList: { name: string }[] = state;
  ctcList: { ctc: string }[] = ctc;
  requirementForm!: FormGroup;
  isSubmitted = false;
  dropdownList: any[] = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};
  number: any;
  singledata:any;
  reqdata:any;
  constructor(private formbuilder: FormBuilder , private reqservice:ReqService, private activer:ActivatedRoute) { }

  ngOnInit(): void {

    this.activer.queryParams.subscribe(params =>{
      this.number=params.number;
      console.log(this.number);
      this.reqservice.singlereq(this.number).subscribe(data =>{
        console.log(data);
        if(data.status === 200){
          this.singledata = data.result;
        }
        else {
          alert(data.result);
        }
      });
      this.reqservice.assignedcandidates(this.number).subscribe((dataa:any) =>{
        console.log(dataa);
        if(dataa.status === 200){
          this.reqdata = dataa.result;
        }
        else {
          alert(dataa.result);
        }
      });
    })




    this._initForm();
    this.dropdownList = [
      {skill:'JAVA'},{skill:'HTML'},{skill:'CSS'},{skill:'SQL'},{skill:'MONGODB'},{skill:'REACT'},{skill:'ANGULAR'},{skill:'ANGULARJS'},
     {skill:'MicroServices'},{skill:'JENKIENS'},{skill:'IONIC'},{skill:'DEVEOPS'},{skill:'AWS'},{skill:'CLOUD'},{skill:'AZURE'},{skill:'NODEJS'}
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'skill',
      textField: 'skill',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onsubmit() {
    this.isSubmitted = true;
    // if (this.requirementForm.invalid) return;
    // const reqData = {
    // };
    // console.log(reqData)
    // this.isSubmitted = true;
    // if (this.requirementForm.invalid) return;
    const reqData = {
      RequirementId:this.singledata._id,
      RequirementName:this.singledata.RequirementName,
      JobCode:this.singledata.JobCode,
      candidatefirstname: this.requirementFormcontrol.candidatefirstname.value,
      candidatelastname: this.requirementFormcontrol.candidatelastname.value,
      candidatenumber: this.requirementFormcontrol.candidatenumber.value,
      candidateemail: this.requirementFormcontrol.candidateemail.value,
      country: this.requirementFormcontrol.country.value,
      state: this.requirementFormcontrol.state.value,
      currentlocation: this.requirementFormcontrol.currentlocation.value,
      DOB: this.requirementFormcontrol.DOB.value,
      pannumber: this.requirementFormcontrol.pannumber.value,
      highestdegree: this.requirementFormcontrol.highestdegree.value,
      university: this.requirementFormcontrol.university.value,
      passingyear: this.requirementFormcontrol.passingyear.value,
      worklocation: this.requirementFormcontrol.worklocation.value,
      totalexp: this.requirementFormcontrol.totalexp.value,
      relevantexp:this.requirementFormcontrol.relevantexp.value,
      currentctc:this.requirementFormcontrol.currentctc.value,
      expectedctc:this.requirementFormcontrol.expectedctc.value,
      noticeperiod:this.requirementFormcontrol.noticeperiod.value,
      currentcompany:this.requirementFormcontrol.currentcompany.value,
      durationfrom:this.requirementFormcontrol.durationfrom.value,
      durationto:this.requirementFormcontrol.durationto.value,
    };
    console.log(reqData)
    this.reqservice.createCandidate(reqData).subscribe(data => {
      console.log(data);
      if (data.status === 201) {
        alert("Successfully Created!");
      } else {
        alert(data.result);
      }
    })
  }

  private _initForm(){
    this.requirementForm = this.formbuilder.group({
      candidatefirstname: ['', Validators.required],
      candidatelastname: ['', Validators.required],
      candidatenumber: ['', [Validators.required]],
      candidateemail: ['', [Validators.required,Validators.email]],
      country: ['',[Validators.required]],
      state: ['', Validators.required],
      currentlocation: ['', Validators.required],
      DOB: ['', Validators.required],
      pannumber: ['', Validators.required],
      highestdegree: ['', Validators.required],
      university: ['', Validators.required],
      passingyear: ['', Validators.required],
      worklocation: ['', Validators.required],
      totalexp: ['', Validators.required],
      relevantexp: ['', Validators.required],
      currentctc: ['', Validators.required],
      expectedctc: ['', Validators.required],
      noticeperiod: ['', Validators.required],
      currentcompany: ['', Validators.required],
      durationfrom: ['', Validators.required],
      durationto: ['', Validators.required],

    })
      }

      get requirementFormcontrol() {
        return this.requirementForm.controls;
      }

}
