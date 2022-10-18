import { LocalstorageService } from './../auth/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RolesService } from '../roles.service';
import { ReqService } from './req.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css'],
})
export class RequirementsComponent implements OnInit {
  reqname: any;
  reqcount: any;
  carddetails: any[] = [];
  roledata: any[] = [];
  ldata:any;
  loginid:any;


  number: any;
  logindata: any;
  isassigned = false;

  constructor(private route: Router, private rolesService: RolesService, private lService: LocalstorageService
    , private reqservice: ReqService,) { }

  ngOnInit(): void {
    this._getReqList();
    // console.log(this.rolesService.getRoles());
    // console.log(this.lService.getToken());
    this.ldata = this.rolesService.getRoles();
    this.logindata = JSON.parse(this.ldata);
    this.loginid = this.logindata._id;
    this.roledata = this.logindata.role;
    console.log(this.roledata);
    var r = this.roledata.some(e => e.roleName === 'Admin' || 'Manager');
    // var r = Object.values(this.logindata.role).includes('Admin' || 'Manager');
    console.log(r);
    if (r === true) {
      this.isassigned = true;
    }
    else {
      this.isassigned = false;
    }
  }



  // getcolor(type:string){
  //   switch(type)
  //   {
  //     case 'immediate':
  //     return 'tomato';
  //     case '15-20':
  //     return 'blue';
  //     case '30-60':
  //     return 'green'
  //     default: return 'info';

  //   }
  // }

  msg(){
    alert('Under Developement')
  }

  view(reqid :any){
    this.route.navigate(['requirements/requirements/view'],{ queryParams: { number: reqid } });
  }



  addcandidate(reqid: any) {
    console.log(reqid);
    this.route.navigate(['requirements/requirements/postcandidate'], { queryParams: { number: reqid } });
  }

  assign(reqid: any) {
    console.log(reqid);
    this.route.navigate(['requirements/requirements/assign'], { queryParams: { number: reqid, AM:this.loginid}});
  }


  private _getReqList() {
    this.reqservice.getReqsList().subscribe(data => {
      console.log(data);
      this.reqcount = data.result.count
      this.carddetails = data.result.requirements
    })
  }

}
