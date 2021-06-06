import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokerRestaurantHomeModule} from '../../poker-resto-home/poker-restaurant-home.module';
import {CoffeeModule} from '../../coffee/coffee.module';
import {BarModule} from '../../bar/bar.module';
import {RestaurantModule} from '../../restaurant/restaurant.module';
import {BeerModule} from '../../beer/beer.module';

const routes: Routes = [
  { path: '', loadChildren: () => PokerRestaurantHomeModule },
  { path: 'bar', loadChildren: () => BarModule },
  { path: 'coffee', loadChildren: () => CoffeeModule },
  { path: 'restaurant', loadChildren: () => RestaurantModule },
  { path: 'beer', loadChildren: () => BeerModule },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}) // Scroll up on the route to Change
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
