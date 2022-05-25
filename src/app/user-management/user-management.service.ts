import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  APIURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  userList(): Observable<any> {
    return this.http.get<any>(
      `${this.APIURL}api/v1/admin/users?approvalLevel=3`
    );
  }

  userListLevelOne(): Observable<any> {
    return this.http.get<any>(
      `${this.APIURL}api/v1/admin/users?approvalLevel=1`
    );
  }

  userListLevelTwo(): Observable<any> {
    return this.http.get<any>(
      `${this.APIURL}api/v1/admin/users?approvalLevel=2`
    );
  }

  approvalLevelOne(userId: any): Observable<any> {
    return this.http.put<any>(
      `${this.APIURL}api/v1/admin/firstApproval`,{"id":userId}
    );
  }

  approvalLevelTwo(userId: any): Observable<any> {
    return this.http.put<any>(
      `${this.APIURL}api/v1/admin/secondApproval`,{"id":userId}
    );
  }

  listofroles(){
    return this.http.get<any>(
      `${this.APIURL}api/v1/role/listRolesOnly`
    );
  }

  assignofroles(roleid:any,userid:any){
    return this.http.get<any>(
      `${this.APIURL}api/v1/role/assignRole/${roleid}/user/${userid}`
    )
  }


}
