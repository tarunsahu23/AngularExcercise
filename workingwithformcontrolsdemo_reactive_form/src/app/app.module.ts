import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { CustomdemoService } from './services/customdemo.service';
import { WorkingtextBoxesRfaComponent } from './ReactiveFormApprochDemo/workingtext-boxes-rfa/workingtext-boxes-rfa.component';
import { WorkingwithradioRfaComponent } from './ReactiveFormApprochDemo/workingwithradio-rfa/workingwithradio-rfa.component';
@NgModule({
  declarations: [
    AppComponent,
    WorkingtextBoxesRfaComponent,
    WorkingwithradioRfaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomdemoService],
  bootstrap: [WorkingwithradioRfaComponent]
})
export class AppModule { }
