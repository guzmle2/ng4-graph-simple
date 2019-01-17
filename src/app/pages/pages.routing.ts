import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const PAGES_ROUTING: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'crimeservers', loadChildren: 'app/pages/crimeservers/crimeservers.module#CrimeserversModule'},
    ]
  }

];

export const PagesRouting: ModuleWithProviders = RouterModule.forChild(PAGES_ROUTING);
