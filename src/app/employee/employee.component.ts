import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Beer} from '../models/beer.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor() { }
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();

  priorityColor(currentBeer){
    if (currentBeer.capacity < 10){
     return "bg-danger";
   }else {
     return "bg-info";
   }
  }
  editButtonClicked(beerToEdit: Beer){
    this.clickSender.emit(beerToEdit);
  }
  
}
