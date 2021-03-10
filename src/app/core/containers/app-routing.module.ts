import {getModuleFactory, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokerBarHomeModule} from '../../poker-bar-home/poker-bar-home.module';
import {BarModule} from '../../bar/bar.module';

const routes: Routes = [
  { path: '', loadChildren: () => PokerBarHomeModule },
  { path: 'bar', loadChildren: () => BarModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
