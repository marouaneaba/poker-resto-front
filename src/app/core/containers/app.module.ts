import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {NavBarComponent} from "../../common/components/nav-bar/nav-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "../../common/components/header/header.component";
import {FooterComponent} from "../../common/components/footer/footer.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {coffeeReducer} from "../../coffee/nrgx/Reducer.coffee";
import {EffectsCoffee} from "../../coffee/nrgx/Effects.coffee";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({coffeeState: coffeeReducer}), //définir Reducer
    EffectsModule.forRoot([EffectsCoffee]), // définir les effects
    StoreDevtoolsModule.instrument() // chaque évenement ngrx le plugin chrome sera notifée ,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
