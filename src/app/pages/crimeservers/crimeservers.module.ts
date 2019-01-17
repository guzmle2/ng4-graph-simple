import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {CrimeServersRouting} from './crimeservers.routing';
import { ListCrimeserversComponent } from './list-crimeservers/list-crimeservers.component';
import { DetailCrimeserversComponent } from './detail-crimeservers/detail-crimeservers.component';

@NgModule({
  imports: [
    SharedModule,
    CrimeServersRouting
  ],
  declarations: [
    ListCrimeserversComponent,
    DetailCrimeserversComponent
  ]
})
export class CrimeserversModule {
}
