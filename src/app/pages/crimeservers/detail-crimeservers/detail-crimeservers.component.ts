import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CrimeservicesService} from '../../../shared/services/crimeservices.service';
import * as go from 'gojs';

@Component({
  selector: 'blv-detail-crimeservers',
  templateUrl: './detail-crimeservers.component.html',
  styleUrls: ['./detail-crimeservers.component.scss']
})
export class DetailCrimeserversComponent implements OnInit, AfterViewInit {

  crimeDetail = <any>{};
  model: any;

  constructor(private _route: ActivatedRoute, protected crimservices: CrimeservicesService) {
  }

  ngOnInit() {
    this._route.params.subscribe(
      params => {
        const id = params['id'];
        if (typeof id !== 'undefined') {
          this.getDetail(id);
        }
      }
    );
  }

  getDetail(id) {
    this.crimservices.getCrimeServersId(id)
      .subscribe(e => {
        this.crimeDetail = e.data;
        this.model = new go.GraphLinksModel(
          [
            { key: 1, text: this.crimeDetail.tags, color: 'lightblue' },
            { key: 2, text:  this.crimeDetail.ip, color: 'orange' },
            { key: 3, text:  this.crimeDetail.indicator, color: 'lightgreen' }
          ],
          [
            { from: 1, to: 2 },
            { from: 2, to: 3 },
            { from: 2, to: 1 },
            { from: 3, to: 2 }
          ]);
      });
  }


  ngAfterViewInit(): void {
  }


}
