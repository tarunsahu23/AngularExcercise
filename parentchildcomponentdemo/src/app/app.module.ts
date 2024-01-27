import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ProductsCatalogComponent } from './products-catalog/products-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ProductsCatalogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ ProductsCatalogComponent]
})
export class AppModule { }
