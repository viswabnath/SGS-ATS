import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionsRoutingModule } from './actions-routing.module';
import { ActionsComponent } from './actions.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    ActionsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ActionsRoutingModule
  ]
})
export class ActionsModule { }
