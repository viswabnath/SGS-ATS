import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './actions.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [{ path: '', component: ActionsComponent },
{ path: 'settings', component: SettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionsRoutingModule { }
