import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addresume',
  templateUrl: './addresume.component.html',
  styleUrls: ['./addresume.component.css']
})
export class AddresumeComponent implements OnInit {

  number :any;
  candidatename:any;

  myForm = new FormGroup({
      file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  fileName = '';
  public selectedFile :File | any = null;;


  constructor(private activer:ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    this.activer.queryParams.subscribe(params =>{
      this.number=params.number;
      console.log(this.number);
      this.candidatename = params.name;
      console.log(this.candidatename);

  })
}

onFileSelected(event:any) {

  console.log(event);


  this.selectedFile = <File>event.target.files[0];

  // if (file) {

  //     this.fileName = file.name;

  //     const formData = new FormData();

  //     formData.append("thumbnail", file);
  //     console.log(formData);
  //     const upload$ = this.http.post("/api/thumbnail-upload", formData);
  //     upload$.subscribe();
  // }
}

onUpload(){

  const fd = new FormData();
  fd.append('file', this.selectedFile, this.selectedFile.name);
  this.http.post('gs://awesomeproject-629d9.appspot.com/',fd).subscribe(res =>{
    console.log(res);

  })

}

// get f(){
//   return this.myForm.controls;
// }

// onFileChange(event:any) {

//   if (event.target.files.length > 0) {
//     const file = event.target.files[0];
//     this.myForm.patchValue({
//       fileSource: file
//     });
//   }
// }

// onsubmit(){
//   const formData = new FormData();
//   console.log(this.myForm);
//   console.log(this.myForm.get('fileSource').value);
//   console.log();
//   formData.append('file', this.myForm.get('fileSource').value);
//   this.http.post('http://localhost:8001/upload.php', formData)
//     .subscribe(res => {
//       console.log(res);
//       alert('Uploaded Successfully.');
//     })
// }



}
