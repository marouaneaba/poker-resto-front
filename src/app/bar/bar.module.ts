import { NgModule } from '@angular/core';
import { BarComponent } from './container/bar/bar.component';
import {BarRoutingModule} from './bar-routing.module';
import {BarListComponent} from './components/bar-list/bar-list.component';
import {SharedModule} from '../shared/shared.module';
import {BarHeaderComponent} from './components/bar-header/bar-header.component';



@NgModule({
  declarations: [
    BarComponent,
    BarListComponent,
    BarHeaderComponent
  ],
  imports: [
    BarRoutingModule,
    SharedModule
  ]
})
export class BarModule { }
