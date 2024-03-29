import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './service/auth.service';
import { CustomdemoService } from './service/customdemo.service';
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent/pagenotfoundcomponent.component';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, PagenotfoundcomponentComponent, MainpageComponent],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,CustomdemoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
