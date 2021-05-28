import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BeerComponent} from "./container/beer/beer.component";
import {RouterModule, Routes} from "@angular/router";
import {CoffeeModule} from "../coffee/coffee.module";
import {BeerRoutingModule} from "./beer-routing.module";

const routes: Routes = [
  { path: '', component: BeerComponent }
];

@NgModule({
  declarations: [
    BeerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BeerRoutingModule,
    CoffeeModule
  ]
})
export class BeerModule { }
