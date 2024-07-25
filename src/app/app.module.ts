import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorsComponent } from './template/visitors/visitors.component';
import { UserDashboardComponent } from './include/user-dashboard/user-dashboard.component';
import { HomeComponent } from './template/home/home.component';
import { EmiCalculatorComponent } from './include/emi-calculator/emi-calculator.component';
import { EnquiryComponent } from './include/enquiry/enquiry.component';
import { VisitorHeaderComponent } from './include/visitor-header/visitor-header.component';
import { SingInComponent } from './include/sing-in/sing-in.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VisitorsComponent,
    UserDashboardComponent,
    HomeComponent,
    EmiCalculatorComponent,
    EnquiryComponent,
    VisitorHeaderComponent,
    SingInComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
