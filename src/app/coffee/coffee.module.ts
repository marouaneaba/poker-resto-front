import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './container/coffee/coffee.component';
import {CoffeeRoutingModule} from './coffee-routing.module';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [CoffeeComponent],
  imports: [
    CoffeeRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class CoffeeModule { }
