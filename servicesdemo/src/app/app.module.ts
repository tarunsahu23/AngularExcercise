import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataserviceService } from 'src/services/dataservice.service';
import { AppComponent } from './app.component';
import { TestserviceComponent } from './testservice/testservice.component';

@NgModule({
  declarations: [
    AppComponent,
    TestserviceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataserviceService],
  bootstrap: [TestserviceComponent]
})
export class AppModule { }
