import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  moduleForm!: FormGroup;
  isSubmitted = false;
  somedata: any;

  constructor(private router: Router, private formbuilder: FormBuilder, private settings: SettingsService) {

  }

  ngOnInit(): void {
    this._initForm();
    this._listofskils();
  }

  onsubmit() {
    this.isSubmitted = true;
    if (this.moduleForm.invalid) return;
    // const moduleData = {
    //   myfile: this.fileToUpload
    // };

    const cdata = {
      skillname: this.registerFormcontrol.skillname.value,
    }
    console.log(cdata);

    this.settings.addskill(cdata).subscribe((data: any) => {
      console.log(data)
      if (data.status === 200) {
        alert("Successfully Created!");
        this.moduleForm.reset();
        this._listofskils();
      } else {
        alert(data.result)
      }
    })

  }

  private _initForm() {
    this.moduleForm = this.formbuilder.group({
      skillname: ['', Validators.required],
    })
  }

  get registerFormcontrol() {
    return this.moduleForm.controls;
  }

  private _listofskils() {
    this.settings.getskils().subscribe(dataa => {
      console.log(dataa);
      this.somedata = dataa.result;
      console.log(this.somedata);
    })
  }

}
