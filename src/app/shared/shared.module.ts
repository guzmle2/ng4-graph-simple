import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ChartsModule} from 'ng2-charts';
import {DiagramEditorComponent} from './diagram-editor/diagram-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    ChartsModule
  ],
  declarations: [
    DiagramEditorComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    ChartsModule,
    DiagramEditorComponent
  ]
})
export class SharedModule {
}
