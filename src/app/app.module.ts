import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { MetricCardComponent } from './components/metric-card/metric-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogGridComponent } from './components/blog-grid/blog-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent,
    MetricsComponent,
    MetricCardComponent,
    BlogCardComponent,
    BlogGridComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
