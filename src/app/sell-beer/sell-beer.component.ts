import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Beer} from '../models/beer.model';
@Component({
  selector: 'app-sell-beer',
  templateUrl: './sell-beer.component.html',
  styleUrls: ['./sell-beer.component.css']
})
export class SellBeerComponent {

  constructor() { }

  @Input() childSelectedBeer: Beer;
  @Output() clickedDone = new EventEmitter();


sellIt (childSelectedBeer, amount: string){
  console.log("hello");
  console.log(amount);
  console.log(childSelectedBeer);

  
  
  childSelectedBeer.sellBeer(amount);
  
}
}
