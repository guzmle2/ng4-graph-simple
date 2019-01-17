import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blv-main',
  template: `
<div class="main">
  <div class="section-menu">
    <blv-sidebar-menu></blv-sidebar-menu>
  </div>
  <div class="section-body">
    <div> <blv-nav-header></blv-nav-header></div>
    <div class="content"> <router-outlet></router-outlet></div>
    <div>  <blv-nav-footer></blv-nav-footer></div>
  </div>
</div>`
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
