import {RouterModule, Routes} from '@angular/router';
import {CoffeeComponent} from './container/coffee/coffee.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', component: CoffeeComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffeeRoutingModule { }
