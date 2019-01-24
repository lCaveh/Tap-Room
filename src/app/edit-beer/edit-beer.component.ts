import { Component, Input ,Output, EventEmitter } from '@angular/core';
import {Beer} from '../models/beer.model';

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent  {

  constructor() { }
  @Input() childSelectedBeer: Beer;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }

}
