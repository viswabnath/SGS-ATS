import { UserManagementService } from './user-management.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  approvallistData: any;
  approvallistDataOne: any
  approvallistDataTwo: any
  templateOne = false;
  templateTwo = false;
  selectedType: any;
  selectForm!: FormGroup;
  listData: any;
  roleid: any;
  constructor(private manageservice: UserManagementService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this._getUserApprovalList();
    this._initForm();
    this._listofroles();
  }

  devent(event: any) {
    this.selectedType = event.target.value;
  }

  fevent(event: any) {
    this.roleid = event.target.value;
  }

  approveToLevel1(itemId: any) {
    console.log(this.selectedType);
    if (this.selectedType === 'level-1') {
      this.manageservice.approvalLevelOne(itemId).subscribe((data) => {
        console.log(data);
        if (data.status === 200) {
          this._getUserApprovalList();
          // alert('Level 1' + data.result);
        } else {
          // alert(data.result);
        }
      })
      // console.log('level1 clicked'+itemId);
    } else if (this.selectedType === 'level-2') {
      this.manageservice.approvalLevelTwo(itemId).subscribe((data) => {
        console.log(data);
        if (data.status === 200) {
          this._getUserApprovalList();
          // alert('Level 2' + data.result);
        } else {
          // alert(data.result);
        }
      })
      // console.log('level2 clicked'+itemId);
    } else {
      alert('Choose type of Approval')
    }
  }

  approveFromlevel1(itemId: any) {
    this.manageservice.approvalLevelTwo(itemId).subscribe((data) => {
      console.log(data);
      if (data.status === 200) {
        this._getUserListLevel1();
        // alert(data.result);
      } else {
        // alert(data.result);
      }
    })
  }

  leveOne() {
    this.templateTwo = false;
    this.templateOne = true;
    this._getUserListLevel1();
  }

  leveTwo() {
    this.templateOne = false;
    this.templateTwo = true;
    this.manageservice.userListLevelTwo().subscribe((data) => {
      console.log(data);
      if (data.status === 200) {
        this.approvallistDataTwo = data.result;
        // alert(data.result);
      } else {
        // alert(data.result);
      }
    })
  }

  back() {
    this.templateOne = false;
    this.templateTwo = false;
  }

  private _getUserListLevel1() {
    this.manageservice.userListLevelOne().subscribe((data) => {
      console.log(data);
      if (data.status === 200) {
        this.approvallistDataOne = data.result;
        // alert(data.result);
      } else {
        // alert(data.result);
      }
    })
  }

  private _getUserApprovalList() {
    this.manageservice.userList().subscribe((data) => {
      console.log(data);
      if (data.status === 200) {
        this.approvallistData = data.result;
        // alert(data.result);
      } else {
        // alert(data.result);
      }
    })
  }

  private _initForm() {
    this.selectForm = this.formbuilder.group({
      selectedValue: ['', Validators.required],
    })
  }

  private _listofroles() {
    this.manageservice.listofroles().subscribe((data) => {
      console.log(data);
      if (data.status === 201) {
        this.listData = data.result;
        // alert(data.result);
      } else {
        // alert(data.result);
      }
    })
  }

  assignrole(userid: any) {
    console.log('role', this.roleid, 'user', userid);
    this.manageservice.assignofroles(this.roleid, userid).subscribe((data) => {
      console.log(data);
      if (data.status === 200) {
        // this.listData = data.result;
        // alert(data.result);
      } else {
        // alert(data.result);
      }
    })

  }

}
