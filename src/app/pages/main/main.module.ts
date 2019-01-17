import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import {MainComponent} from './main.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MainComponent,
    NavHeaderComponent,
    NavFooterComponent,
    SidebarMenuComponent
  ],
  exports: [
    MainComponent,
    NavHeaderComponent,
    NavFooterComponent,
    SidebarMenuComponent
  ]
})
export class MainModule { }
