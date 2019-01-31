import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { PdfViewerModule } from 'ng2-pdf-viewer';


import { GlobalConfig } from './GlobalConfig';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GithubprojectlistComponent } from './components/githubprojectlist/githubprojectlist.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResumeComponent } from './components/resume/resume.component';


import { GithubProjectsPipe } from './pipes/github-projects.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    GithubprojectlistComponent,
    GithubProjectsPipe,
    PageNotFoundComponent,
    NavbarComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PdfViewerModule,
  ],
  providers: [GlobalConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}

}
