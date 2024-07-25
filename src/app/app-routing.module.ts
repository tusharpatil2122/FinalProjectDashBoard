import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { EmiCalculatorComponent } from './include/emi-calculator/emi-calculator.component';
import { EnquiryComponent } from './include/enquiry/enquiry.component';
import { SingInComponent } from './include/sing-in/sing-in.component';
import { VisitorsComponent } from './template/visitors/visitors.component';
import { AboutComponent } from './include/about/about.component';
import { UserDashboardComponent } from './include/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:"" ,redirectTo:"SukhadLoan" ,pathMatch:'full'},
  {path:'SukhadLoan' , component: VisitorsComponent , children:[
    {path:'home',component:HomeComponent},
    {path:'emi', component:EmiCalculatorComponent},
    {path:"enquiry",component:EnquiryComponent},
    {path:"sign-in",component:SingInComponent},
    {path:'about',component:AboutComponent}

  ]},
  {path:'dash',component:UserDashboardComponent}
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
