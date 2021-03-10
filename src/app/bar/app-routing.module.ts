import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BarComponent} from './container/bar/bar.component';


const routes: Routes = [
  { path: '', component: BarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
