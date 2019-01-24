import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { EditBeerComponent } from './edit-beer/edit-beer.component';
import { SellBeerComponent } from './sell-beer/sell-beer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddBeerComponent,
    EditBeerComponent,
    SellBeerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
