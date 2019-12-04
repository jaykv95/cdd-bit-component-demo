import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListModule } from '@bit/jaykv95.angular-tutorial.product-list';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ProductListModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
