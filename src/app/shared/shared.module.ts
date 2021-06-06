import { NgModule } from '@angular/core';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {CustomerFeedBackComponent} from './components/customer-feed-back/customer-feed-back.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {ProductTopComponent} from './components/product-top/product-top.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AboutUsComponent,
    CustomerFeedBackComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    ProductTopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutUsComponent,
    CustomerFeedBackComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    ProductTopComponent
  ]
})
export class SharedModule { }
