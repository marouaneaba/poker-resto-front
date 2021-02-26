import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokerBarHomeComponent } from './container';

const routes: Routes = [
  { path: '/', component: PokerBarHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PokerBarHomeRoutingModule { }