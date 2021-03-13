import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokerRestaurantHomeComponent} from './container/poker-resto-home/poker-restaurant-home.component';

const routes: Routes = [
  { path: '', component: PokerRestaurantHomeComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokerRestaurantHomeRoutingModule { }
