import { AddpermissionsComponent } from './addpermissions/addpermissions.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { AddroleComponent } from './addrole/addrole.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles.component';

const routes: Routes = [
  { path: '', component: RolesComponent },
  { path: 'addrole', component: AddroleComponent },
  { path: 'permissions', component: PermissionsComponent },
  { path: 'addpermissions', component: AddpermissionsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
