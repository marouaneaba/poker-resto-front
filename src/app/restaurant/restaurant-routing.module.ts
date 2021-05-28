import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RestaurantComponent} from "./container/restaurant/restaurant.component";

const routes: Routes = [
  { path: '', component: RestaurantComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
