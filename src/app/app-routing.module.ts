import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManufacturingComponent } from './pages/industry/manufacturing/manufacturing.component';
import { AboutComponent } from './pages/about/about.component';
import { AllianceComponent } from './pages/alliance/alliance.component';
import { IndustryComponent } from './pages/industry/industry.component';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ResearchComponent } from './pages/industry/research/research.component';
import { ReactionsComponent } from './pages/industry/reactions/reactions.component';
import { PiComponent } from './pages/industry/pi/pi.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'alliance', component: AllianceComponent},
  {path: 'industry', component: IndustryComponent},
  {path: 'industry/manufacturing', component: ManufacturingComponent},
  {path: 'industry/research', component: ResearchComponent},
  {path: 'industry/reactions', component: ReactionsComponent},
  {path: 'industry/pi', component: PiComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
