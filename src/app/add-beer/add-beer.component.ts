import { Component, Output, EventEmitter } from '@angular/core';
import {Beer} from '../models/beer.model';


@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent {

  constructor() { }
    @Output() sendBeer = new EventEmitter();
  
    submitForm(name: string, brand: string, price: number, discountedPrice: number, alcohol: number) {
      let newBeer: Beer = new Beer(name, brand, price, discountedPrice, alcohol );
      this.sendBeer.emit(newBeer);
    }

}
