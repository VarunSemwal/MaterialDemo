import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertdemoComponent } from './alertdemo/alertdemo.component';
import {SkyAlertModule} from '@skyux/indicators';

@NgModule({
  declarations: [
    AppComponent,
    AlertdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkyAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
