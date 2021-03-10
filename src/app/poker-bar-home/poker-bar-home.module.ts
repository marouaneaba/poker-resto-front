import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../core/containers/app-routing.module';
import {PokerBarHomeRoutingModule} from './poker-bar-home-routing.module';
import {PokerBarHomeComponent} from './container/poker-bar-home/poker-bar-home.component';
import {NavBarComponent} from '../common/components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    PokerBarHomeComponent,
    NavBarComponent
  ],
  imports: [PokerBarHomeRoutingModule],
  providers: []
})
export class PokerBarHomeModule { }
