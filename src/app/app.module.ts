import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CouserComponent } from './course.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,CouserComponent, AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
