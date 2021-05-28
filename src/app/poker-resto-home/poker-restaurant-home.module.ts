import { NgModule } from '@angular/core';
import {PokerRestaurantHomeRoutingModule} from './poker-restaurant-home-routing.module';
import {CommonModule} from '@angular/common';
import {PokerRestaurantHomeComponent} from './container/poker-resto-home/poker-restaurant-home.component';
import {MdbCarouselModule} from "mdb-angular-ui-kit";
import {CoffeeModule} from "../coffee/coffee.module";


@NgModule({
  declarations: [
    PokerRestaurantHomeComponent,
  ],
  imports: [
    PokerRestaurantHomeRoutingModule,
    CommonModule,
    MdbCarouselModule,
    CoffeeModule
  ],
  providers: []
})
export class PokerRestaurantHomeModule { }
