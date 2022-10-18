import { RolesService } from './../../roles.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  firstArray = ["Requirements", "User Management", "Permissions", "Roles", "Clients"];
  writearray = [];
  jsonArray: any = [];
  checkArray: any = [];
  arr2: any = [];
  i: any;
  data: any;
  dataa: any;
  roles: any;
  read: any;
  write: any;
  delete: any;
  constructor(private rolesService: RolesService, private router: Router) { }


  ngOnInit(): void {
    this._getRoles();
  }

  private _getRoles() {
    this.data = this.rolesService.getRoles()
    this.dataa = JSON.parse(this.data)
    this.roles = this.dataa.role[0].permissions;
    this.write = this.roles[2].moduleTypes;
    // console.log(this.write)
    this.write.forEach((e: any) => {
      this.arr2.push(e.moduleName)
    });
    console.log(this.arr2);

    let map: any = {};
    this.firstArray.forEach(i => map[i] = false);
    this.arr2.forEach((i: any) => map[i] === false && (map[i] = true));
    let jsonArray = Object.keys(map).map(k => ({ name: k, matched: map[k] }));
    // console.log(jsonArray)

    let truevalues = jsonArray.filter((e: any) => {
      // return e.matched == true
      if (e.matched == true) {
        return this.checkArray.push(e.name)
      }
    })
    // console.log(this.checkArray)
  }


  clear() {
    localStorage.clear();
    this.router.navigate([''])
  }

}
