import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setToken(data: any){
    localStorage.setItem('token',data);
  }

  getToken(){
    return localStorage.getItem('token')
  }

  
  setName(data: any){
    localStorage.setItem('name',data);
  }

  getName(){
    return localStorage.getItem('name')
  }

}
