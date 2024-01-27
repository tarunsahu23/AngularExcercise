import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ParentcompoComponent } from './parentcompo/parentcompo.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ParentcompoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ParentcompoComponent]
})
export class AppModule { }
