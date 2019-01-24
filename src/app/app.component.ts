import { Component } from '@angular/core';
import {Beer} from "./models/beer.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedBeer = null;
  beers: Beer[]=[
  new Beer('budweiser','bud light',5,3,3)
  ];
 
  editBeer(clickedBeer) {
    this.selectedBeer = clickedBeer;
  }
  finishedEditing() {
   this.selectedBeer = null;
 }
  addBeer(newBeer: Beer) {
    this.beers.push(newBeer);
  }
}
