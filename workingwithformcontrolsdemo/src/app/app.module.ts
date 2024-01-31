import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Behcomp1Component } from './behcomp1/behcomp1.component';
import { Behcomp2Component } from './behcomp2/behcomp2.component';
import { Behcomp3Component } from './behcomp3/behcomp3.component';
import { Behcomp4Component } from './behcomp4/behcomp4.component';

import { BehmaincompoComponent } from './behmaincompo/behmaincompo.component';
import { BehsubparentShowcategoriesComponent } from './behsubparent-showcategories/behsubparent-showcategories.component';
import { BehsubchildShowproductsComponent } from './behsubchild-showproducts/behsubchild-showproducts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomsharedService } from './services/customshared.service';
import { CookieService } from 'ngx-cookie-service';
import { CookiesdemoComponent } from './cookiesdemo/cookiesdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    Behcomp1Component,
    Behcomp2Component,
    Behcomp3Component,
    Behcomp4Component,
    BehmaincompoComponent,
    BehsubparentShowcategoriesComponent,
    BehsubchildShowproductsComponent,
    CookiesdemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CustomsharedService,CookieService],
  bootstrap: [BehsubparentShowcategoriesComponent]
})
export class AppModule { }
