import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {NavBarComponent} from "../../common/components/nav-bar/nav-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "../../common/components/header/header.component";
import {FooterComponent} from "../../common/components/footer/footer.component";

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
    ReactiveFormsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
