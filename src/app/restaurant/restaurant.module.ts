import { NgModule } from '@angular/core';
import { RestaurantComponent } from './container/restaurant/restaurant.component';
import {RestaurantRoutingModule} from './restaurant-routing.module';
import {RestaurantListComponent} from './components/restaurant-list/restaurant-list.component';
import {RestaurantHeaderComponent} from './components/restaurant-header/restaurant-header.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantListComponent,
    RestaurantHeaderComponent
  ],
  imports: [
    RestaurantRoutingModule,
    SharedModule
  ]
})
export class RestaurantModule { }
