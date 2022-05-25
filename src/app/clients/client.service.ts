import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  APIURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getClients(){
    return this.http.get<any>(
      `${this.APIURL}api/v1/client`,
    );
  }


  AddClient(data:any){
    return this.http.post<any>(
      `${this.APIURL}api/v1/client`,data
    );
  }


  Adddemofile(fileToUpload: File){
    const formData: FormData = new FormData();
    formData.append('myfile', fileToUpload, fileToUpload.name);
    return this.http.put<any>(
      `${this.APIURL}api/v1/client`,formData
    );
  }

  getams(){
    return this.http.get<any>(
      `${this.APIURL}api/v1/user/getAM`
    );
  }
}
