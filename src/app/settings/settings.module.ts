import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SkillsComponent } from './skills/skills.component';
import { LocationsComponent } from './locations/locations.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SettingsComponent,
    SkillsComponent,
    LocationsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
