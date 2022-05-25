import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { SettingsComponent } from './settings/settings.component';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    // NgMultiSelectDropDownModule.forRoot()
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent
  ]
})
export class SharedModule { }
