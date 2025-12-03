import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { BookingComponent } from './components/booking/booking.component';
import { EventsComponent } from './components/events/events.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AdminBookingsComponent } from './components/admin-bookings/admin-bookings.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    BookingComponent,
    EventsComponent,
    EventDetailsComponent,
    ContactComponent,
    AdminBookingsComponent,
   

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
