import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './container/coffee/coffee.component';
import {CoffeeRoutingModule} from './coffee-routing.module';
import { CoffeeAddComponent } from './components/coffee-add/coffee-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CoffeeEditComponent } from './components/coffee-edit/coffee-edit.component';
import { NavBarCoffeeComponent } from './components/nav-bar-coffee/nav-bar-coffee.component';
import { CoffeeListComponent } from './components/coffee-list/container/coffee-list.component';
import { CoffeeItemComponent } from './components/coffee-list/components/coffee-item/coffee-item.component';




@NgModule({
  declarations: [
    CoffeeComponent,
    CoffeeAddComponent,
    CoffeeEditComponent,
    NavBarCoffeeComponent,
    CoffeeListComponent,
    CoffeeItemComponent
  ],
  imports: [
    CoffeeRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoffeeModule { }
