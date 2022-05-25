import { AddcandidateComponent } from './addcandidate/addcandidate.component';
import { AddrequirementComponent } from './addrequirement/addrequirement.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequirementsComponent } from './requirements.component';
import { ViewreqComponent } from './viewreq/viewreq.component';
import { EditreqComponent } from './editreq/editreq.component';
import { AssignComponent } from './assign/assign.component';

const routes: Routes = [
{ path: '', component: RequirementsComponent },
{ path: 'requirements', component: RequirementsComponent },
{ path: 'requirements/addreq', component: AddrequirementComponent  },
{ path: 'requirements/postcandidate', component: AddcandidateComponent  },
{ path: 'requirements/view', component: ViewreqComponent  },
{ path: 'requirements/edit', component: EditreqComponent  },
{ path: 'requirements/assign', component: AssignComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequirementsRoutingModule { }
