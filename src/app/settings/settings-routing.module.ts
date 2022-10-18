import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';
import { SettingsComponent } from './settings.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [{ path: '', component: SkillsComponent }, {path: 'location', component: LocationsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
