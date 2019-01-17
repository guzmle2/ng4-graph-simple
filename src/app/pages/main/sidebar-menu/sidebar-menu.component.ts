import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'blv-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit, AfterViewInit {
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    jQuery('.button-collapse').sideNav();
  }


}
