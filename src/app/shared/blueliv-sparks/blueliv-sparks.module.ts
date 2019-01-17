import {NgModule} from '@angular/core';
import {BluelivSparksService} from './blueliv-sparks.service';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,

  ],
  providers: [
    BluelivSparksService,
  ],
  declarations: []
})
export class BluelivSparksModule {
}

