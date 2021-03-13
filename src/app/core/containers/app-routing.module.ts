import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokerRestaurantHomeModule} from '../../poker-resto-home/poker-restaurant-home.module';
import {BarModule} from '../../bar/bar.module';
import {CoffeeModule} from '../../coffee/coffee.module';

const routes: Routes = [
  { path: '', loadChildren: () => PokerRestaurantHomeModule },
  { path: 'bar', loadChildren: () => BarModule },
  { path: 'coffee', loadChildren: () => CoffeeModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
