import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequirementsRoutingModule } from './requirements-routing.module';
import { RequirementsComponent } from './requirements.component';
import { AddrequirementComponent } from './addrequirement/addrequirement.component';
import { AddcandidateComponent } from './addcandidate/addcandidate.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ViewreqComponent } from './viewreq/viewreq.component';
import { EditreqComponent } from './editreq/editreq.component';
import { AssignComponent } from './assign/assign.component';
import { AddresumeComponent } from './addresume/addresume.component';


@NgModule({
  declarations: [
    RequirementsComponent,
    AddrequirementComponent,
    AddcandidateComponent,
    ViewreqComponent,
    EditreqComponent,
    AssignComponent,
    AddresumeComponent
  ],
  imports: [
    CommonModule,
    RequirementsRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot()

  ]
})
export class RequirementsModule { }
