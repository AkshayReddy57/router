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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const myRoots: Routes = [

  { path: '', component: LoginComponent},
  { path: 'table', component: TableComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,CustomMaterialModule,BrowserAnimationsModule,Ng2SmartTableModule,NgbModule.forRoot(),
    RouterModule.forRoot(
      myRoots,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService,AuthGuard,TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }