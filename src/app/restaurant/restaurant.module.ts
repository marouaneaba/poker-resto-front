import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './container/restaurant/restaurant.component';
import {RestaurantRoutingModule} from "./restaurant-routing.module";
import {AboutUsComponent} from "../common/components/about-us/about-us.component";
import {RestaurantListComponent} from "./components/restaurant-list/restaurant-list.component";
import {CustomerFeedBackComponent} from "../common/components/customer-feed-back/customer-feed-back.component";
import {CoffeeModule} from "../coffee/coffee.module";



@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantListComponent
  ],
  imports: [
    RestaurantRoutingModule,
    CommonModule,
    CoffeeModule
  ]
})
export class RestaurantModule { }
