import {RouterModule, Routes} from '@angular/router';
import {CoffeeComponent} from './container/coffee/coffee.component';
import {NgModule} from '@angular/core';
import {CoffeeAddComponent} from "./components/coffee-add/coffee-add.component";
import {CoffeeEditComponent} from "./components/coffee-edit/coffee-edit.component";

const routes: Routes = [
  { path: '', component: CoffeeComponent },
  { path: 'newCoffee', component: CoffeeAddComponent },
  { path: 'editCoffee/:id', component: CoffeeEditComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffeeRoutingModule { }
