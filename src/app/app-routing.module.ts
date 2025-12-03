import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { BookingComponent } from './components/booking/booking.component';
import { ContactComponent } from './components/contact/contact.component'; 
import { AdminBookingsComponent } from './components/admin-bookings/admin-bookings.component';

const routes: Routes = [
  // Event detail
  // { path: '**', redirectTo: '' }  ,
    { path: 'about', component: AboutComponent }, 
    { path: 'service', component: ServiceComponent },   
    {path:'bookings', component:BookingComponent} ,
    {path:'contact', component:ContactComponent} ,
    {path:'admin-secret-bookings-1234', component:AdminBookingsComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
