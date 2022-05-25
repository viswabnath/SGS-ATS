import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { AddroleComponent } from './addrole/addrole.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { AddpermissionsComponent } from './addpermissions/addpermissions.component';


@NgModule({
  declarations: [
    RolesComponent,
    AddroleComponent,
    PermissionsComponent,
    AddpermissionsComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    SharedModule
  ]
})
export class RolesModule { }
