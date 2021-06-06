import { NgModule } from '@angular/core';
import {PokerRestaurantHomeRoutingModule} from './poker-restaurant-home-routing.module';
import {PokerRestaurantHomeComponent} from './container/poker-resto-home/poker-restaurant-home.component';
import {MdbCarouselModule} from 'mdb-angular-ui-kit';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsHomeIndexComponent } from './components/products-home-index/products-home-index.component';
import {SharedModule} from '../shared/shared.module';
import {GoogleMapsModule} from '@angular/google-maps';


@NgModule({
  declarations: [
    PokerRestaurantHomeComponent,
    CarouselComponent,
    ProductsHomeIndexComponent,
  ],
  imports: [
    PokerRestaurantHomeRoutingModule,
    MdbCarouselModule,
    SharedModule,
    GoogleMapsModule
  ],
  providers: []
})
export class PokerRestaurantHomeModule { }
