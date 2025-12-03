import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'dzevent';
   constructor(public router: Router) {}


   cities = [
  { name: "Wedding Decor", image: "assets/wedding.png" },
  { name: "Birthday Events", image: "assets/birthday.png" },
  { name: "Catering Services", image: "assets/catering.png" },
  { name: "Guest Services", image: "assets/guest.png" },
  { name: "Security Service", image: "assets/security.png" },
  { name: "Furniture Rentals", image: "assets/furniture.png" }
];

}

