import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokerBarHomeComponent} from './container/poker-bar-home/poker-bar-home.component';

const routes: Routes = [
  { path: '', component: PokerBarHomeComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokerBarHomeRoutingModule { }
