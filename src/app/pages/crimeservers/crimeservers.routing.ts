import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCrimeserversComponent} from './list-crimeservers/list-crimeservers.component';
import {DetailCrimeserversComponent} from './detail-crimeservers/detail-crimeservers.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'prefix'
  },
  {path: 'list', component: ListCrimeserversComponent},
  {path: 'detail/:id', component: DetailCrimeserversComponent}
];

export const CRIMESERVERS_ROUTING = routes;

export const CrimeServersRouting: ModuleWithProviders = RouterModule.forChild(routes);
