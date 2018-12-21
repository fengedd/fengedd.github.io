import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { GlobalConfig } from './GlobalConfig';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [GlobalConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
