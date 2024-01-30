import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Behcomp1Component } from './behcomp1/behcomp1.component';
import { Behcomp2Component } from './behcomp2/behcomp2.component';
import { Behcomp3Component } from './behcomp3/behcomp3.component';
import { Behcomp4Component } from './behcomp4/behcomp4.component';
import { Behcomp5Component } from './behcomp5/behcomp5.component';
import { BehmaincompoComponent } from './behmaincompo/behmaincompo.component';

@NgModule({
  declarations: [
    AppComponent,
    Behcomp1Component,
    Behcomp2Component,
    Behcomp3Component,
    Behcomp4Component,
    Behcomp5Component,
    BehmaincompoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
