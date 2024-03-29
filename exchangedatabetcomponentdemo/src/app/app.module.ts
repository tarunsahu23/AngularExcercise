import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OnchangeparentdemoComponent } from './onchangeparentdemo/onchangeparentdemo.component';
import { OnchangechilddemoComponent } from './onchangechilddemo/onchangechilddemo.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    OnchangeparentdemoComponent,
    OnchangechilddemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ ParentComponent]
})
export class AppModule { }
