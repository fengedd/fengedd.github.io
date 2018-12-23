import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { GlobalConfig } from './GlobalConfig';
import { FooterComponent } from './components/footer/footer.component';
import { GithubprojectlistComponent } from './components/githubprojectlist/githubprojectlist.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubProjectsPipe } from './pipes/github-projects.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    GithubprojectlistComponent,
    GithubProjectsPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GlobalConfig],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor(router: Router) {}

}
