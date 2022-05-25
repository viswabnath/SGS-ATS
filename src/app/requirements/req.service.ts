import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReqService {

  APIURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getClients(){
    return this.http.get<any>(
      `${this.APIURL}api/v1/client`,
    );
  }

  getReqsList(){
    return this.http.get<any>(
      `${this.APIURL}api/v1/requirement/listRequirement`,
    );
  }

  createReq(data:any){
    return this.http.post<any>(
      `${this.APIURL}api/v1/requirement/createRequirement`, data
    );
  }

  singlereq(data:any){
    return this.http.post<any>(
      `${this.APIURL}api/v1/requirement/singleRequirement`, {id:data}
    );
  }

  createCandidate(data:any){
    return this.http.post<any>(
      `${this.APIURL}api/v1/candidate/createCandidate`, data
    );
  }

  assignedcandidates(data:any){
    return this.http.post<any>(
      `${this.APIURL}api/v1/candidate/assignedcandidates`, {RequirementId:data}
    );
  }

  getIrsList(){
    return this.http.get<any>(
      `${this.APIURL}api/v1/user/getIrs`,
    );
  }


}
