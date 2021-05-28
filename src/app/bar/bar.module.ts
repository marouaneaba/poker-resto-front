import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './container/bar/bar.component';
import {CoffeeRoutingModule} from "../coffee/coffee-routing.module";
import {BarRoutingModule} from "./bar-routing.module";
import {BarListComponent} from "./components/bar-list/bar-list.component";
import {AboutUsComponent} from "../common/components/about-us/about-us.component";
import {CustomerFeedBackComponent} from "../common/components/customer-feed-back/customer-feed-back.component";
import {CoffeeModule} from "../coffee/coffee.module";



@NgModule({
  declarations: [
    BarComponent,
    BarListComponent,
  ],
  imports: [
    BarRoutingModule,
    CommonModule,
    CoffeeModule
  ]
})
export class BarModule { }
