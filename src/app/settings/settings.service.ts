import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  APIURL = environment.apiURL;

  constructor(private http: HttpClient) { }
  addskill(data:any){
    return this.http.post<any>(
      `${this.APIURL}api/v1/skill/createskill`,data
    );
  }

  getskils(){
    return this.http.get<any>(
      `${this.APIURL}api/v1/skill/getskills`
    );
  }

  addlocation(data:any){
    return this.http.post<any>(
      `${this.APIURL}api/v1/location/createlocation`,data
    );
  }

  getlocations(){
    return this.http.get<any>(
      `${this.APIURL}api/v1/location/getlocationss`
    );
  }
}
