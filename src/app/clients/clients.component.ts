import { ClientService } from './client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  imageSrc: any;
  rolesList: any;
  moduleForm!: FormGroup;
  editForm!: FormGroup;
  roleNamee: any;
  roleNameeId: any;
  isSubmitted = false;
  moduleclicked = false;
  somedata: any;
  ams: any;

  fileToUpload: File | any;
  // fiells :any;
  // file :any;

  constructor(private router: Router, private formbuilder: FormBuilder, private clients: ClientService) { }

  ngOnInit(): void {
    this._listClients();
    this._initForm();
    this._listofams();
  }

  modulebutton() {
    this.moduleclicked = true;
  }

  oncancel() {
    this.moduleclicked = false;
  }

  //   handleFileInput(files: any) {
  //     this.fileToUpload = files.target.files.item(0);
  // }

  // onSelectFile(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     this.file =event.target.files[0]
  //     this.fiells = this.file
  //     console.log(this.file);

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     // reader.onload = (event) => { // called once readAsDataURL is completed
  //     //   this.url = event.target?.result
  //     // }
  //   }
  // }


  // clientName: this.registerFormcontrol.clientName.value,
  // location: this.registerFormcontrol.location.value,
  //     POCName: this.registerFormcontrol.POCName.value,
  //     POCEmail: this.registerFormcontrol.POCEmail.value,

  onsubmit() {
    this.isSubmitted = true;
    if (this.moduleForm.invalid) return;
    // const moduleData = {

    //   myfile: this.fileToUpload
    // };

    const cdata = {
      clientName: this.registerFormcontrol.clientName.value,
      location: this.registerFormcontrol.location.value,
      POCName: this.registerFormcontrol.POCName.value,
      POCEmail: this.registerFormcontrol.POCEmail.value,
      zone: this.registerFormcontrol.zone.value,
      AM: this.registerFormcontrol.AM.value
    }

    console.log(cdata);

    this.clients.AddClient(cdata).subscribe(data => {
      console.log(data)
      if (data.status === 200) {
        alert("Successfully Created!");
        this.moduleForm.reset();
        this._listClients();
      } else {
        alert(data.result)
      }
    })
  }

  private _listClients() {
    this.clients.getClients().subscribe(data => {
      console.log(data);
      this.rolesList = data.result
    })
  }

  private _initForm() {
    this.moduleForm = this.formbuilder.group({
      clientName: ['', Validators.required],
      location: ['', Validators.required],
      POCName: ['', Validators.required],
      POCEmail: ['', [Validators.required, Validators.email]],
      zone: ['', [Validators.required]],
      AM: ['', [Validators.required]]
      // myfile: [''],
    })
  }

  get registerFormcontrol() {
    return this.moduleForm.controls;
  }

  private _listofams() {
    this.clients.getams().subscribe(dataa => {
      console.log(dataa);
      this.somedata = dataa.result;
      console.log(this.somedata);


    })
  }
}
