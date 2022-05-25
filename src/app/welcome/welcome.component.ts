import { LocalstorageService } from './../auth/localstorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name:any;
  constructor(private lservice:LocalstorageService) { }

  ngOnInit(): void {

    this.name= this.lservice.getName()
  }





}
