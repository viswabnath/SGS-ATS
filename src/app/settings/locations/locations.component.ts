import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  moduleForm!: FormGroup;
  isSubmitted = false;
  somedata:any;

  constructor(private router: Router, private formbuilder: FormBuilder,
    private settings: SettingsService) {

  }

  ngOnInit(): void {
    this._initForm();
    this._listoflocations();
  }


  onsubmit() {
    this.isSubmitted = true;
    if (this.moduleForm.invalid) return;
    // const moduleData = {
    //   myfile: this.fileToUpload
    // };

    const cdata = {
      locationname: this.registerFormcontrol.locationname.value,
    }
    // console.log(cdata);

    this.settings.addlocation(cdata).subscribe((data:any) => {
      console.log(data)
      if (data.status === 200) {
        alert("Successfully Created!");
        this.moduleForm.reset();
        this._listoflocations();
      } else {
        alert(data.result)
      }
    })

  }

  private _initForm() {
    this.moduleForm = this.formbuilder.group({
      locationname: ['', Validators.required],
    })
  }

  get registerFormcontrol() {
    return this.moduleForm.controls;
  }

  private _listoflocations() {
    this.settings.getlocations().subscribe((dataa:any) => {
      console.log(dataa);
      this.somedata = dataa.result;
      console.log(this.somedata);
    })
  }

}
