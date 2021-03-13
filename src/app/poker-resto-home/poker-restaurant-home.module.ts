import { NgModule } from '@angular/core';
import {PokerRestaurantHomeRoutingModule} from './poker-restaurant-home-routing.module';
import {CommonModule} from '@angular/common';
import {PokerRestaurantHomeComponent} from './container/poker-resto-home/poker-restaurant-home.component';


@NgModule({
  declarations: [
    PokerRestaurantHomeComponent,
  ],
  imports: [
    PokerRestaurantHomeRoutingModule,
    CommonModule
  ],
  providers: []
})
export class PokerRestaurantHomeModule { }
