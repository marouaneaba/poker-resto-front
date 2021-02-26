import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from 'src/app/common/footer/footer.component';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { PokerBarHomeComponent } from 'src/app/poker-bar-home/container/poker-bar-home/poker-bar-home.component';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PokerBarHomeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
