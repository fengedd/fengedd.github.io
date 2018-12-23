/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
*/

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageNotFoundComponent }    from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { GithubprojectlistComponent } from './components/githubprojectlist/githubprojectlist.component';

// TODO: Consider selective preloading strategy service just to see if some pages can or should be loaded
// import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'portfolio',
    component: GithubprojectlistComponent
  },
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only    
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }