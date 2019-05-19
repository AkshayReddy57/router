import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Router,Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CustomMaterialModule } from './core/material.module';
import { AppComponent } from './app.component';
import { TableService } from './table/table.service';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';

import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const myRoots: Routes = [

  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'table', component: TableComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,

    RegistrationComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,CustomMaterialModule,BrowserAnimationsModule,Ng2SmartTableModule,
    RouterModule.forRoot(
      myRoots,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService,AuthGuard,TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }