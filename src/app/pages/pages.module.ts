import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {PagesRouting} from './pages.routing';
import {MainModule} from './main/main.module';
import {DashboardComponent} from './dashboard/dashboard.component';


@NgModule({
  imports: [
    SharedModule,
    PagesRouting,
    MainModule
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class PagesModule {
}
