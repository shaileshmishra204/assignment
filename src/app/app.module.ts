import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { AppService } from './app.service';

import {ImageviwerComponent} from './imageviwer/imageviwer.component'
const appRoutes: Routes = [
  { path: 'child1', component: Child1Component, pathMatch: 'full' },
  { path: 'child2', component: Child2Component, pathMatch: 'full' },
  { path: 'imageview/:id', component: ImageviwerComponent, pathMatch: 'full' },
  {
    path: '', component: ParentComponent, pathMatch: 'full'
  }


];
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    ImageviwerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
