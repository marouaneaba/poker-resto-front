import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {coffeeReducer} from '../../coffee/nrgx/Reducer.coffee';
import {EffectsCoffee} from '../../coffee/nrgx/Effects.coffee';
import {createCustomElement} from '@angular/elements';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({coffeeState: coffeeReducer}), // Inject Reducer
    EffectsModule.forRoot([EffectsCoffee]), // Inject effects
    StoreDevtoolsModule.instrument(), // Each ngrx event the chrome plugin will be notified
    SharedModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const restaurantCustomElement = createCustomElement(AppComponent, {injector});
    customElements.define('poker-restaurant', restaurantCustomElement);
  }

  ngDoBoostrap() {}
}
