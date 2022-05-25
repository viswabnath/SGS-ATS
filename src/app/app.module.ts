import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './jwt.interceptor';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
