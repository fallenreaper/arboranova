import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { MetricCardComponent } from './components/metric-card/metric-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogGridComponent } from './components/blog-grid/blog-grid.component';
import { AboutComponent } from './pages/about/about.component';
import { ManufacturingComponent } from './components/indy/manufacturing/manufacturing.component';
import { AllianceComponent } from './pages/alliance/alliance.component';
import { IndustryComponent } from './pages/industry/industry.component';
import { ResearchComponent } from './pages/industry/research/research.component';
import { ReactionsComponent } from './pages/industry/reactions/reactions.component';
import { PiComponent } from './pages/industry/pi/pi.component';
import { SelectComponent } from './components/inputs/select/select.component';
import { BlueprintComponent } from './components/indy/blueprint/blueprint.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BuildComponent } from './pages/industry/build/build.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent,
    MetricsComponent,
    MetricCardComponent,
    BlogCardComponent,
    BlogGridComponent,
    AboutComponent,
    ManufacturingComponent,
    AllianceComponent,
    IndustryComponent,
    ResearchComponent,
    ReactionsComponent,
    PiComponent,
    SelectComponent,
    BlueprintComponent,
    BuildComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
