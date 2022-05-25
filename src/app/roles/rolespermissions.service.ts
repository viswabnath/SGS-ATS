import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RolespermissionsService {
  APIURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getPermissions(){
    return this.http.get<any>(
      `${this.APIURL}api/v1/permission/listPermission`,
    );
  }

  getRoles(){
    return this.http.get<any>(
      `${this.APIURL}api/v1/role/listRolesOnly`,
    );
  }

  getRolePermission(role:any){
    return this.http.get<any>(
      `${this.APIURL}api/v1/role/listRoles?role=${role}`,
    );
  }

  removeModuleFromPermission(data:any){
    return this.http.put<any>(
      `${this.APIURL}api/v1/permission/removeModuleFromPermission`,data
    );
  }

  AddModuleToPermission(data:any){
    return this.http.put<any>(
      `${this.APIURL}api/v1/permission/addModuleToPermission`,data
    );
  }

  getListModules(){
    return this.http.get<any>(
      `${this.APIURL}api/v1/module/viewModules`,
    );
  }


  CreatePermissions(data:any){
    return this.http.post<any>(
      `${this.APIURL}api/v1/permission/createPermission`,data
    );
  }

  deletePermission(data:any){
    return this.http.put<any>(
      `${this.APIURL}api/v1/permission/deletePermission`,data
    );
  }

  CreateRole(data:any){
    return this.http.post<any>(
      `${this.APIURL}api/v1/role/createRole`,data
    );
  }

  CreateModule(data:any){
    return this.http.post<any>(
      `${this.APIURL}api/v1/module/addModule`,data
    );
  }

  editRoleReportsto(data:any){
    return this.http.put<any>(
      `${this.APIURL}api/v1/role/editRolePermission`,data
    );
  }
}
