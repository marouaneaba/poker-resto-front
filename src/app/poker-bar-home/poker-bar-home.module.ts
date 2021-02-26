import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../core/containers/app-routing.module';

import * as PokerBarHomeContainer from './container';


@NgModule({
  declarations: [ ...PokerBarHomeContainer.container ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class PokerBarHomeModule { }
