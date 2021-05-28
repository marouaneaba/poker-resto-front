import { NgModule } from '@angular/core';
import {BeerComponent} from './container/beer/beer.component';
import {RouterModule, Routes} from '@angular/router';
import {BeerRoutingModule} from './beer-routing.module';
import {SharedModule} from '../shared/shared.module';
import {BeerHeaderComponent} from './components/beer-header/beer-header.component';

const routes: Routes = [
  { path: '', component: BeerComponent }
];

@NgModule({
  declarations: [
    BeerComponent,
    BeerHeaderComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    BeerRoutingModule,
    SharedModule
  ]
})
export class BeerModule { }
