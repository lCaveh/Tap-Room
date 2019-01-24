import { Component } from '@angular/core';
import {Beer} from "./models/beer.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  beers: Beer[]
  createNewBeer( name:string, brand:string, price: number, discountedPrice:number,  alcohol:number)
}
