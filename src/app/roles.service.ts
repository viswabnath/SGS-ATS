import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor() { }


  setRoles(result:any){
    localStorage.setItem('roles',JSON.stringify(result));
  }

  getRoles(){
    return localStorage.getItem('roles');
  }
}
