import {ModuleWithProviders, NgModule} from '@angular/core';
import {CrimeservicesService} from './crimeservices.service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    HttpModule
  ],
  exports: [
    HttpModule
  ],
  providers: [
    CrimeservicesService
  ]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        CrimeservicesService
      ]
    };
  }
}
