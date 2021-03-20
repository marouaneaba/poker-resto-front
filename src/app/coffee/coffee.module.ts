import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './container/coffee/coffee.component';
import {CoffeeRoutingModule} from './coffee-routing.module';
import { CoffeeAddComponent } from './components/coffee-add/coffee-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CoffeeEditComponent } from './components/coffee-edit/coffee-edit.component';
import { NavBarCoffeeComponent } from './components/nav-bar-coffee/nav-bar-coffee.component';




@NgModule({
  declarations: [
    CoffeeComponent,
    CoffeeAddComponent,
    CoffeeEditComponent,
    NavBarCoffeeComponent
  ],
  imports: [
    CoffeeRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoffeeModule { }
