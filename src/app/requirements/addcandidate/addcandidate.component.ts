import { Component, OnInit } from '@angular/core';
import countries from '../../shared/jsonfiles/country.json';
import exp from '../../shared/jsonfiles/experience.json';
import state from '../../shared/jsonfiles/state.json';
import ctc from '../../shared/jsonfiles/ctc.json';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ReqService } from './../req.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddresumeComponent } from '../addresume/addresume.component';



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
  allskills:any=[];
  dropdownSettings: IDropdownSettings = {};
  number: any;
  singledata:any;
  reqdata:any;
  fileName = '';
  candidateid :any;
  candidatename:any;
  constructor(private formbuilder: FormBuilder , private reqservice:ReqService, private activer:ActivatedRoute,
    private route : Router) { }

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
      'JAVA' , 'HTML' , 'CSS' , 'SQL' , 'HANA' , 'MONGODB', 'REACT' , 'ANGULAR' , 'ANGULARJS' , 'MICROSERVICES' , 'JENKIENS', 'CLOUD' , 'AZURE',
      'IONIC', 'DEVEOPS', 'AWS' , 'NODEJS'
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
     this.allskills =item
    console.log(this.allskills);
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
      candidateskills: this.requirementFormcontrol.candidateskills.value,
    };

    console.log(reqData);
    this.reqservice.createCandidate(reqData).subscribe(data => {
      console.log(data);
      if (data.status === 201) {
        this.candidateid = data.result._id;
        this.candidatename = data.result.candidatefirstname+data.result.candidatelastname;

        alert("Successfully Created!");
        this.route.navigate(['requirements/requirements/addresume'],{ queryParams: { number: this.candidateid, name: this.candidatename}});
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
      candidateskills: ['', [Validators.required]],

    })
      }

      get requirementFormcontrol() {
        return this.requirementForm.controls;
      }

}
